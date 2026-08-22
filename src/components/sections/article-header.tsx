import Breadcrumb from './breadcrumb';
import ThemeToggle from '../theme/theme-toggle';
import { BreadcrumbItem } from '@/types/breadcrumb-item';
import { BlogType } from '@/types/blog';
import Image from 'next/image';

type ArticleHeaderProps = {
  breadcrumbItems: BreadcrumbItem[];
  blogMeta: BlogType;
};

const ArticleHeader = ({ breadcrumbItems, blogMeta }: ArticleHeaderProps) => {
  if (blogMeta.id === -99) {
    return (
      <header className="mb-12">
        <div className="mb-12 flex items-center justify-between">
          <Breadcrumb items={breadcrumbItems} currentLabel={blogMeta.title} />
          <ThemeToggle />
        </div>

        <h1 className="mb-8 text-[36px] leading-10 font-extrabold">
          {blogMeta.title}
        </h1>
      </header>
    );
  }

  return (
    <header className="mb-12">
      <div className="mb-12 flex items-center justify-between">
        <Breadcrumb items={breadcrumbItems} currentLabel={blogMeta.title} />
        <ThemeToggle />
      </div>

      <section>
        <Image
          src={blogMeta.imgUrl}
          alt={blogMeta.imgAlt}
          width={800}
          height={400}
          className="mb-8"
        />

        <h1 className="mb-8 text-[36px] leading-10 font-extrabold">
          {blogMeta.title}
        </h1>

        <p>Elmar Chavez</p>

        <p className="mb-1 text-[0.65rem] font-light">
          {blogMeta.publishDate} • {blogMeta.readTime}
        </p>

        <ul className="mb-2 flex gap-2 text-[0.65rem] font-light">
          {blogMeta.tags.map((tag) => {
            return <li key={tag}>{tag}</li>;
          })}
        </ul>
      </section>
    </header>
  );
};

export default ArticleHeader;
