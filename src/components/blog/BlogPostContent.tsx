'use client';

interface BlogPostContentProps {
  content: string;
}

export default function BlogPostContent({ content }: BlogPostContentProps) {
  if (!content) return null;

  return (
    <div
      className="blog-content max-w-none"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
