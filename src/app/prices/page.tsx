import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Treatment Prices | Healing PRP",
  description:
    "Transparent, doctor-led pricing for PRP and regenerative treatments. View prices for skin, hair, sexual wellness and joint PRP.",
};

type PriceItem = {
  name: string;
  price: string;
  note?: string;
};

type PriceSection = {
  title: string;
  subtitle?: string;
  items: PriceItem[];
};

const PRICE_SECTIONS: PriceSection[] = [
  {
    title: "Skin & Face",
    subtitle: "Natural skin regeneration, glow and texture support.",
    items: [
      { name: "PRP Facial (Vampire Facial)", price: "£350" },
      { name: "PRP + Microneedling", price: "£400" },
      { name: "PRP for Acne Scars", price: "£450", note: "Case-dependent" },
    ],
  },
  {
    title: "Hair Restoration",
    subtitle: "Doctor-led PRP for thinning hair and hairline support.",
    items: [
      { name: "PRP Hair Treatment (Single Session)", price: "£350" },
      { name: "Course of 3 PRP Hair Sessions", price: "£950", note: "Best value" },
    ],
  },
  {
    title: "Sexual Wellness",
    subtitle: "Regenerative treatments to support confidence and wellbeing.",
    items: [
      { name: "P-Shot (PRP for Erectile Dysfunction)", price: "£700" },
      { name: "O-Shot (Female Sexual Wellness)", price: "£650" },
    ],
  },
  {
    title: "Joint & Orthopaedic",
    subtitle: "PRP for tendon and joint support (assessment required).",
    items: [
      { name: "PRP Joint Injection (Single Joint)", price: "£450" },
      { name: "PRP for Tennis Elbow", price: "£400" },
    ],
  },
];

const FAQS = [
  {
    q: "Are the prices fixed?",
    a: "Prices are indicative. Final pricing is confirmed after a doctor-led assessment based on the area treated, clinical suitability, and the treatment plan.",
  },
  {
    q: "Do I need a consultation before booking?",
    a: "Yes. A consultation helps confirm suitability, set expectations, and tailor your plan. In some cases we can do consultation and treatment on the same day.",
  },
  {
    q: "Why do some treatments have a course option?",
    a: "Many regenerative treatments work best as a planned course. Courses are priced to reflect better value and a structured approach to results.",
  },
  {
    q: "Is PRP safe?",
    a: "PRP uses your own blood-derived platelets. As with any injectable procedure, there are risks such as bruising, swelling, discomfort, or infection, which are discussed during consent.",
  },
];

export default function PricesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero */}
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          Treatment Prices
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Transparent, doctor-led pricing for PRP and regenerative treatments —
          designed around safety, clinical suitability and realistic outcomes.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium border"
          >
            Book a consultation
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium bg-black text-white"
          >
            Ask a question
          </a>
        </div>

        {/* Trust bullets */}
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="border rounded-xl p-4">
            <p className="font-medium mb-1">Doctor-led</p>
            <p className="text-sm text-gray-600">
              Assessment, consent and treatment planning with a clinician.
            </p>
          </div>
          <div className="border rounded-xl p-4">
            <p className="font-medium mb-1">Tailored plans</p>
            <p className="text-sm text-gray-600">
              Pricing reflects your treatment area and recommended course.
            </p>
          </div>
          <div className="border rounded-xl p-4">
            <p className="font-medium mb-1">No pressure</p>
            <p className="text-sm text-gray-600">
              Clear options, expected outcomes and aftercare guidance.
            </p>
          </div>
        </div>
      </div>

      {/* Prices */}
      <section className="mt-14 space-y-8">
        {PRICE_SECTIONS.map((section) => (
          <div key={section.title} className="border rounded-2xl p-6 md:p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
              {section.subtitle ? (
                <p className="text-gray-600">{section.subtitle}</p>
              ) : null}
            </div>

            <div className="divide-y">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-start justify-between gap-6 py-4"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    {item.note ? (
                      <p className="text-sm text-gray-500 mt-1">{item.note}</p>
                    ) : null}
                  </div>
                  <p className="font-semibold whitespace-nowrap">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Packages / notes */}
      <section className="mt-10 border rounded-2xl p-6 md:p-8">
        <h3 className="text-xl font-semibold mb-3">Important notes</h3>
        <ul className="space-y-2 text-gray-600">
          <li>
            • Prices are indicative and may vary based on clinical assessment and
            the treatment plan.
          </li>
          <li>
            • Courses are often recommended for best outcomes; we’ll discuss the
            right schedule for you.
          </li>
          <li>
            • If you have a medical condition or take regular medication, please
            mention this during booking.
          </li>
        </ul>
      </section>

      {/* CTA band */}
      <section className="mt-12 border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-semibold mb-2">
            Not sure which treatment you need?
          </h3>
          <p className="text-gray-600">
            Book a consultation and we’ll recommend a safe, personalised plan.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium bg-black text-white"
          >
            Book consultation
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium border"
          >
            Message us
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold mb-6">FAQs</h2>
        <div className="space-y-4">
          {FAQS.map((f) => (
            <details key={f.q} className="border rounded-2xl p-5">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="text-gray-600 mt-3">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <p className="text-xs text-gray-500 mt-12">
        Prices are indicative. A doctor-led consultation is required to confirm
        suitability and agree a personalised plan.
      </p>
    </main>
  );
}
