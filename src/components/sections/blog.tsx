import Image from 'next/image';
import Link from 'next/link';
import { blogList } from '@/data/blog-list';
import ViewAllLink from '../ui/view-all-link';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  return (
    <section className="border-border/40 bg-card relative rounded-lg border p-4 transition-colors duration-150 ease-in-out">
      <header className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-bold">Blog</h2>
        <ViewAllLink href="/blog" />
      </header>

      <ul className="flex flex-col gap-4">
        {blogList.map(
          ({
            id,
            title,
            description,
            publishDate,
            readTime,
            tags,
            blogUrl,
            imgUrl,
            imgAlt,
          }) => {
            return (
              <li
                className="border-border/60 border-b pb-4 last:border-b-0 md:flex md:flex-row md:items-center md:justify-between md:gap-4"
                key={id}
              >
                <article>
                  <h3 className="mb-2 text-[0.875rem] font-semibold">
                    {title}
                  </h3>

                  <p className="mb-1 text-[0.65rem] font-light">
                    {publishDate} • {readTime}
                  </p>

                  <p className="mb-2 text-[0.75rem] font-normal">
                    {description}
                  </p>

                  <div className="flex flex-col gap-4 pr-4 min-[425px]:flex-row min-[425px]:items-center min-[425px]:justify-between">
                    <ul className="hidden gap-2 text-[0.65rem] font-light min-[425px]:flex">
                      {tags.map((tag) => {
                        return <li key={tag}>{tag}</li>;
                      })}
                    </ul>

                    <Link
                      className="focus-visible:outline-muted-foreground flex w-fit items-center justify-center gap-1 self-end rounded-sm text-[0.75rem] font-normal underline-offset-4 outline-2 outline-offset-4 outline-transparent transition-colors duration-150 ease-in-out hover:underline min-[425px]:self-auto md:text-right"
                      href={blogUrl}
                      aria-label={`Read more about ${title}`}
                    >
                      <span>Read more</span>
                      <ArrowRight aria-hidden="true" size={12} />
                    </Link>
                  </div>
                </article>

                <div className="border-ring/20 focus-within:border-ring has-hover:border-ring hidden w-55 shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-150 ease-in-out md:block">
                  <Image
                    src={imgUrl}
                    alt={imgAlt}
                    width={800}
                    height={400}
                    className="aspect-video w-full object-cover"
                  />
                </div>
              </li>
            );
          },
        )}
      </ul>
    </section>
  );
};

export default Blog;
