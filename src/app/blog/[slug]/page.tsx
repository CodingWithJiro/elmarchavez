import ThemeToggle from '@/components/theme/theme-toggle';
import Link from 'next/link';
import { getBlog } from '@/lib/utils';

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const blog = getBlog(slug);

  if (!blog) {
    return (
      <main id="main" className="mx-auto max-w-130 px-4 py-8 md:max-w-4xl">
        <header className="mb-8 flex items-center justify-between">
          <nav className="select-none">
            <ol className="flex items-center gap-1">
              <li>
                <Link
                  className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
                  href="/"
                >
                  Home
                </Link>
              </li>

              <li className="flex items-center gap-1">
                <span className="text-muted-foreground">/</span>

                <Link
                  className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>

              <li className="flex items-center gap-1">
                <span className="text-muted-foreground">/</span>

                <p className="text-muted-foreground hover:text-foreground max-w-32 truncate text-sm font-medium transition-colors hover:cursor-pointer md:max-w-62">
                  Blog Not Found
                </p>
              </li>
            </ol>
          </nav>

          <ThemeToggle />
        </header>

        <h1 className="mb-1 text-lg font-bold md:text-3xl">Blog not found.</h1>
      </main>
    );
  }

  const { title, publishDate, readTime, tags, imgUrl, imgAlt } = blog;

  return (
    <main id="main" className="mx-auto max-w-130 px-4 py-8 md:max-w-4xl">
      <header className="flex justify-between">
        <Link href="/blog">← Blog</Link>

        <ThemeToggle />
      </header>

      <h1 className="mb-1 text-lg font-bold md:text-3xl">{title}</h1>
    </main>
  );
}
