import type { Metadata } from "next";
import { getBlogPostBySlug } from "@/lib/contentful";

type LayoutProps = {
  params: { slug: string } | Promise<{ slug: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({
  params,
}: Pick<LayoutProps, "params">): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getBlogPostBySlug(resolvedParams.slug);

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

export default function BlogPostLayout({ children }: Pick<LayoutProps, "children">) {
  return <>{children}</>;
}
