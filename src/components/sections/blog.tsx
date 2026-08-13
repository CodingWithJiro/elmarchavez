import Image from 'next/image';
import { blogList } from '@/data/blog-list';

const Blog = () => {
  return (
    <section className="border-border/40 bg-card relative rounded-lg border p-4 transition-colors duration-150 ease-in-out">
      <h2 className="mb-3 text-lg font-bold">Blog</h2>

      <a
        className="group absolute top-4 right-4 flex items-center gap-1 text-[1rem] font-normal transition-all duration-150 ease-in-out"
        href="/blog"
      >
        <span className="max-w-0 overflow-hidden text-[0.75rem] whitespace-nowrap opacity-0 transition-all duration-150 group-hover:max-w-xs group-hover:opacity-100">
          View all
        </span>
        <span className="group-hover:hidden">↗</span>
        <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-xs group-hover:opacity-100">
          →
        </span>
      </a>

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
                    <ul className="flex gap-2 text-[0.65rem] font-light">
                      {tags.map((tag) => {
                        return <li key={tag}>{tag}</li>;
                      })}
                    </ul>

                    <a
                      className="focus-visible:outline-muted-foreground rounded-sm text-[0.75rem] font-normal underline-offset-4 outline-2 outline-offset-4 outline-transparent transition-colors duration-150 ease-in-out hover:underline md:text-right"
                      href={blogUrl}
                      target="_blank"
                      aria-label={`Read more about ${title}`}
                    >
                      Read More →
                    </a>
                  </div>
                </article>

                <div className="hidden w-67.5 shrink-0 md:block">
                  <Image src={imgUrl} alt="" width={800} height={400} />
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
