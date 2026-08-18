import Breadcrumb from './breadcrumb';
import ThemeToggle from '../theme/theme-toggle';
import { BreadcrumbItem } from '@/types/breadcrumb-item';

type ArticleHeaderProps = {
  breadcrumbItems: BreadcrumbItem[];
  currentLabel: string;
};

const ArticleHeader = ({
  breadcrumbItems,
  currentLabel,
}: ArticleHeaderProps) => {
  return (
    <header className="mb-12 flex items-center justify-between">
      <Breadcrumb items={breadcrumbItems} currentLabel={currentLabel} />

      <ThemeToggle />
    </header>
  );
};

export default ArticleHeader;
