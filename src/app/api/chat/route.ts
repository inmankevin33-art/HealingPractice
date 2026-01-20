// app/api/chat/route.ts
import { NextResponse } from "next/server";

type Lead = {
  name?: string;
  email?: string;
  phone?: string;
  location?: "St Albans" | "Birmingham" | "Luton" | "London" | "Not sure";
  category?: "Skin" | "Hair" | "Joints" | "Sexual" | "General";
  message?: string;
};

export async function POST(req: Request) {
  try {
    const { message, sessionId } = await req.json();

    // Load your curated FAQs (phase 1)
    // You can replace this with a DB later.
    const faqs = await import("@/data/faq.json").then((m) => m.default);

    const system = `
You are the HealingPRP clinic assistant.
Goal: answer FAQs accurately and guide users to booking.
Safety rules:
- Provide general information only; do not diagnose.
- Do not guarantee outcomes or use absolute claims.
- If red-flag symptoms or emergencies are mentioned, advise urgent help (999/111).
- If user asks for medical advice specific to them, encourage booking.
Always be concise, friendly, and conversion-focused.
`;

    // Build compact context from FAQs (phase 1 approach)
    // Keep it short to avoid huge prompts; you can upgrade to search/RAG later.
    const faqContext = JSON.stringify(faqs).slice(0, 12000);

    const schema = {
      name: "healingprp_chat_response",
      schema: {
        type: "object",
        additionalProperties: false,
        properties: {
          answer: { type: "string" },
          action: {
            type: "string",
            enum: ["NONE", "BOOK", "WHATSAPP", "LEAD_CAPTURE"],
          },
          lead: {
            type: "object",
            additionalProperties: false,
            properties: {
              name: { type: "string" },
              email: { type: "string" },
              phone: { type: "string" },
              location: {
                type: "string",
                enum: ["St Albans", "Birmingham", "Luton", "London", "Not sure"],
              },
              category: {
                type: "string",
                enum: ["Skin", "Hair", "Joints", "Sexual", "General"],
              },
              message: { type: "string" },
            },
          },
        },
        required: ["answer", "action"],
      },
    };

    const r = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL ?? "gpt-5-mini",
        input: [
          { role: "system", content: system },
          {
            role: "user",
            content: `User message: ${message}\n\nClinic FAQ knowledge (JSON): ${faqContext}\n\nSession: ${sessionId ?? "none"}`,
          },
        ],
        text: {
          format: {
            type: "json_schema",
            json_schema: schema,
          },
        },
      }),
    });

    if (!r.ok) {
      const err = await r.text();
      return NextResponse.json({ error: err }, { status: 500 });
    }

    const data = await r.json();

    // Responses API usually returns structured output under output_text or similar;
    // we’re expecting the model to produce a JSON string as the final text.
    const raw =
      data.output_text ??
      data.output?.map((o: any) => o?.content?.map((c: any) => c?.text).join("")).join("") ??
      "";

    const parsed = JSON.parse(raw);

    return NextResponse.json(parsed);
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "Unknown error" }, { status: 500 });
  }
}
