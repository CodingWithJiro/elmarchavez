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
        <li className="flex items-center">
          <Link
            className="text-muted-foreground hover:text-foreground focus-visible:text-foreground text-[12px] font-medium outline-transparent transition-colors focus-visible:underline focus-visible:underline-offset-4 md:text-sm"
            href="/"
          >
            Home
          </Link>
        </li>

        {items.map(({ label, href }) => {
          return (
            <li key={href} className="flex items-center gap-1">
              <span
                className="text-muted-foreground text-[12px] md:text-sm"
                aria-hidden="true"
              >
                /
              </span>

              <Link
                className="text-muted-foreground hover:text-foreground focus-visible:text-foreground text-[12px] font-medium outline-transparent transition-colors focus-visible:underline focus-visible:underline-offset-4 md:text-sm"
                href={href}
              >
                {label}
              </Link>
            </li>
          );
        })}

        <li className="flex items-center gap-1">
          <span
            className="text-muted-foreground text-[12px] md:text-sm"
            aria-hidden="true"
          >
            /
          </span>

          <div className="group relative">
            <p
              className="text-muted-foreground group-hover:text-foreground max-w-32 truncate text-[12px] font-medium transition-colors hover:cursor-pointer md:max-w-62 md:text-sm"
              aria-current="page"
            >
              {currentLabel}
            </p>

            <span className="bg-foreground text-background after:bg-foreground absolute bottom-full left-[75%] hidden rounded-md rounded-bl-none px-2 py-1 text-xs whitespace-nowrap group-hover:block">
              You are here!
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
