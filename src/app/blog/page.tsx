import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/sections/footer';
import ThemeToggle from '@/components/theme/theme-toggle';
import { BLOGS } from '@/data/blog-list';

const metaDescription =
  'Blog posts on full stack development and tech from Elmar Chavez.';

export const metadata: Metadata = {
  title: 'Elmar Chavez | Blog',
  description: metaDescription,
  keywords: [
    'Elmar Chavez Blog',
    'Web Development Blog',
    'Tech Articles',
    'Tech Community',
    'Software Engineering Blog',
  ],
  openGraph: {
    title: 'Blog | Elmar Chavez',
    description: metaDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Elmar Chavez',
    description: metaDescription,
  },
};

const blogsLatestOrder = BLOGS.slice().reverse();

export default function BlogPage() {
  return (
    <main id="main" className="mx-auto max-w-130 px-4 py-8 md:max-w-4xl">
      <header className="flex justify-between">
        <div>
          <h1 className="mb-1 text-lg font-bold md:text-3xl">Blog</h1>
          <p className="mb-6 text-sm font-medium md:text-base">
            Articles, thoughts, and tech stuff.
          </p>
        </div>

        <ThemeToggle />
      </header>

      <ul>
        {blogsLatestOrder.map(
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
                  <h2 className="mb-2 text-[0.875rem] font-semibold">
                    {title}
                  </h2>

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

                    <Link
                      className="focus-visible:outline-muted-foreground w-fit rounded-sm text-[0.75rem] font-normal underline-offset-4 outline-2 outline-offset-4 outline-transparent transition-colors duration-150 ease-in-out hover:underline md:text-right"
                      href={blogUrl}
                      target="_blank"
                      aria-label={`Read more about ${title}`}
                    >
                      Read More →
                    </Link>
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

      <Footer />
    </main>
  );
}
