import Link from 'next/link';

interface CategoryBadgeProps {
  category: string;
  clickable?: boolean;
}

const categoryColors: Record<string, string> = {
  'Kitchen Remodeling': 'bg-blue-100 text-blue-800 hover:bg-blue-200',
  'Bathroom Remodeling': 'bg-purple-100 text-purple-800 hover:bg-purple-200',
  'Basement Finishing': 'bg-green-100 text-green-800 hover:bg-green-200',
  'Flooring': 'bg-amber-100 text-amber-800 hover:bg-amber-200',
  'General Tips': 'bg-gray-100 text-gray-800 hover:bg-gray-200',
  'Home Improvement': 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200',
  'Contractor Tips': 'bg-teal-100 text-teal-800 hover:bg-teal-200',
};

export default function CategoryBadge({ category, clickable = false }: CategoryBadgeProps) {
  const colorClass = categoryColors[category] || 'bg-gray-100 text-gray-800 hover:bg-gray-200';
  const baseClasses = `inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors ${colorClass}`;

  if (clickable) {
    return (
      <Link href={`/blog?category=${encodeURIComponent(category)}`} className={baseClasses}>
        {category}
      </Link>
    );
  }

  return <span className={baseClasses}>{category}</span>;
}
