import type { Metadata } from "next";
import { getBlogPostBySlug } from "@/lib/contentful";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found - Healing-PRP Clinics",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: post.seoTitle || `${post.title} - Healing-PRP Clinics Blog`,
    description:
      post.seoDescription ||
      post.excerpt ||
      `Read about ${post.title} on the Healing-PRP Clinics blog.`,
  };
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
