'use client';

import Image from 'next/image';
import Link from 'next/link';

// Custom components for MDX content
export const MDXComponents = {
  // Headings with auto-generated IDs
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = typeof children === 'string'
      ? children.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      : '';
    return (
      <h2 id={id} className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24" {...props}>
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = typeof children === 'string'
      ? children.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      : '';
    return (
      <h3 id={id} className="text-xl font-bold text-gray-900 mt-6 mb-3 scroll-mt-24" {...props}>
        {children}
      </h3>
    );
  },
  h4: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2" {...props}>
      {children}
    </h4>
  ),

  // Paragraphs
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-gray-700 leading-relaxed mb-4" {...props}>
      {children}
    </p>
  ),

  // Links
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = href?.startsWith('http');
    const Component = isExternal ? 'a' : Link;

    return (
      <Component
        href={href || '#'}
        className="text-green-700 hover:text-green-800 underline font-medium"
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {children}
      </Component>
    );
  },

  // Lists
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="ml-4" {...props}>
      {children}
    </li>
  ),

  // Blockquotes
  blockquote: ({ children, ...props }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-green-700 pl-4 py-2 my-4 italic text-gray-600 bg-gray-50"
      {...props}
    >
      {children}
    </blockquote>
  ),

  // Code
  code: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="bg-gray-100 text-red-600 px-1.5 py-0.5 rounded text-sm font-mono"
      {...props}
    >
      {children}
    </code>
  ),
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4" {...props}>
      {children}
    </pre>
  ),

  // Tables
  table: ({ children, ...props }: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-200" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-gray-50" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody className="bg-white divide-y divide-gray-200" {...props}>
      {children}
    </tbody>
  ),
  th: ({ children, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700" {...props}>
      {children}
    </td>
  ),

  // Horizontal rule
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-8 border-gray-200" {...props} />
  ),

  // Images
  img: ({ src, alt }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <div className="relative w-full h-auto my-6">
      <Image
        src={String(src || '')}
        alt={String(alt || '')}
        width={800}
        height={500}
        className="rounded-lg"
      />
      {alt && <p className="text-center text-sm text-gray-500 mt-2 italic">{String(alt)}</p>}
    </div>
  ),

  // Strong/Bold
  strong: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-bold text-gray-900" {...props}>
      {children}
    </strong>
  ),

  // Emphasis/Italic
  em: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic" {...props}>
      {children}
    </em>
  ),
};
