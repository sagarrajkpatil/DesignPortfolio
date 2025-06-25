import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="mb-6">
      <div className="flex items-center space-x-2 text-sm">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            {item.href && !item.active ? (
              <Link href={item.href}>
                <span className="bg-bpf-blue text-white px-3 py-1 rounded hover:bg-bpf-blue-light cursor-pointer">
                  {item.label}
                </span>
              </Link>
            ) : (
              <span className="bg-bpf-blue text-white px-3 py-1 rounded">
                {item.label}
              </span>
            )}
            {index < items.length - 1 && (
              <ChevronRight size={16} className="text-gray-400" />
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
