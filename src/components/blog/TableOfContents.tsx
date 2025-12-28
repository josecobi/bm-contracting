'use client';

import { useEffect, useState } from 'react';

interface Heading {
  level: number;
  text: string;
  id: string;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -66%' }
    );

    const headingElements = headings.map(({ id }) => document.getElementById(id)).filter(Boolean);
    headingElements.forEach((el) => el && observer.observe(el));

    return () => {
      headingElements.forEach((el) => el && observer.unobserve(el));
    };
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-24 bg-white border border-gray-200 rounded-lg p-6 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
        On This Page
      </h3>
      <ul className="space-y-2">
        {headings.map(({ id, text, level }) => (
          <li
            key={id}
            className={`${level === 3 ? 'ml-4' : ''}`}
          >
            <a
              href={`#${id}`}
              className={`block text-sm transition-colors ${
                activeId === id
                  ? 'text-green-700 font-medium'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
