import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/sections/footer';
import ThemeToggle from '@/components/theme/theme-toggle';
import { BLOGS } from '@/data/blog-list';
import Breadcrumb from '@/components/sections/breadcrumb';
import { ArrowRight } from 'lucide-react';

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
    <main id="main" className="mx-auto max-w-130 px-4 py-8 md:max-w-2xl">
      <header className="mb-8 flex items-center justify-between">
        <Breadcrumb items={[]} currentLabel="Blog" />
        <ThemeToggle />
      </header>

      <section>
        <h1 className="mb-1 text-lg font-bold md:text-3xl">Blog</h1>
        <p className="mb-6 text-sm font-medium md:text-base">
          Articles, thoughts, and tech stuff.
        </p>
      </section>

      <ul className="flex flex-col gap-4">
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
            imgAlt,
          }) => {
            return (
              <li
                className="border-border/60 border-b pb-4 transition-colors duration-150 ease-in-out last:border-b-0 md:flex md:flex-row md:items-center md:justify-between md:gap-4"
                key={id}
              >
                <div className="border-ring/20 focus-within:border-ring has-hover:border-ring hidden w-55 shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-150 ease-in-out md:block">
                  <Image
                    src={imgUrl}
                    alt={imgAlt}
                    width={800}
                    height={400}
                    loading="eager"
                    className="aspect-video w-full object-cover transition-transform duration-150 hover:scale-105"
                  />
                </div>

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
                      <span>Read More</span>
                      <ArrowRight aria-hidden="true" size={12} />
                    </Link>
                  </div>
                </article>
              </li>
            );
          },
        )}
      </ul>

      <Footer />
    </main>
  );
}
