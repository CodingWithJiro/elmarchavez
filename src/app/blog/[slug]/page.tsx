import ThemeToggle from '@/components/theme/theme-toggle';
import { BLOGS } from '@/data/blog-list';
import { getSlug } from '@/lib/utils';

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const blog = BLOGS.find(({ blogUrl }) => blogUrl.endsWith(getSlug(slug)))!;
  const { title, publishDate, readTime, tags, imgUrl, imgAlt } = blog;

  return (
    <main id="main" className="mx-auto max-w-130 px-4 py-8 md:max-w-4xl">
      <header className="flex justify-between">
        <div>
          <h1 className="mb-1 text-lg font-bold md:text-3xl">{title}</h1>
        </div>

        <ThemeToggle />
      </header>
    </main>
  );
}
