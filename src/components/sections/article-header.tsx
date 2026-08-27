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

        <h1 className="mb-4 text-[36px] leading-10 font-extrabold">
          {blogMeta.title}
        </h1>

        <p className="text-muted-foreground text-base">
          {blogMeta.description}
        </p>
      </header>
    );
  }

  return (
    <header className="mb-8">
      <div className="mb-12 flex items-center justify-between">
        <Breadcrumb items={breadcrumbItems} currentLabel={blogMeta.title} />
        <ThemeToggle />
      </div>

      <section>
        <div className="mb-8 overflow-hidden rounded-xl">
          <Image
            src={blogMeta.imgUrl}
            alt={blogMeta.imgAlt}
            loading="eager"
            width={800}
            height={400}
          />
        </div>

        <ul className="mb-1 flex gap-2 text-[0.65rem] font-light">
          {blogMeta.tags.map((tag) => {
            return <li key={tag}>{tag}</li>;
          })}
        </ul>

        <h1 className="mb-4 text-[24px] font-extrabold md:text-[32px] md:leading-10">
          {blogMeta.title}
        </h1>

        <section>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="size-6 overflow-hidden rounded-full">
                <Image
                  src="/img/author-profile_683x771.png"
                  alt=""
                  width={683}
                  height={771}
                  className="object-cover"
                />
              </div>

              <p className="text-[0.65rem] font-light">Elmar Chavez</p>
            </div>

            <span className="text-[0.65rem] font-light">•</span>

            <p className="text-[0.65rem] font-light">{blogMeta.publishDate}</p>

            <span className="text-[0.65rem] font-light">•</span>

            <p className="text-[0.65rem] font-light">{blogMeta.readTime}</p>
          </div>
        </section>
      </section>
    </header>
  );
};

export default ArticleHeader;
