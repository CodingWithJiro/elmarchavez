import { BreadcrumbItem } from '@/types/breadcrumb-item';
import Link from 'next/link';

type BreadCrumbProps = {
  items: BreadcrumbItem[];
  currentLabel: string;
};

const Breadcrumb = ({ items, currentLabel }: BreadCrumbProps) => {
  return (
    <nav className="select-none" aria-label="Breadcrumb">
      <ol className="flex items-center gap-1">
        <li>
          <Link
            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            href="/"
          >
            Home
          </Link>
        </li>

        {items.map(({ label, href }) => {
          return (
            <li key={href} className="flex items-center gap-1">
              <span className="text-muted-foreground" aria-hidden="true">
                /
              </span>

              <Link
                className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
                href={href}
              >
                {label}
              </Link>
            </li>
          );
        })}

        <li className="flex items-center gap-1">
          <span className="text-muted-foreground" aria-hidden="true">
            /
          </span>

          <p
            className="text-muted-foreground hover:text-foreground max-w-32 truncate text-sm font-medium transition-colors hover:cursor-pointer md:max-w-62"
            aria-current="page"
          >
            {currentLabel}
          </p>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
