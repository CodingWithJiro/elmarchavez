import ThemeToggle from '@/components/theme/theme-toggle';
import { getBlog } from '@/lib/utils';
import Breadcrumb from '@/components/sections/breadcrumb';
import { BreadcrumbItem } from '@/types/breadcrumb-item';

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const blog = getBlog(slug);
  const breadcrumbItems: BreadcrumbItem[] = [
    {
      label: 'Blog',
      href: '/blog',
    },
  ];

  if (!blog) {
    return (
      <main id="main" className="mx-auto max-w-130 px-4 py-8 md:max-w-2xl">
        <header className="mb-12 flex items-center justify-between">
          <Breadcrumb items={breadcrumbItems} currentLabel="Blog Not Found." />

          <ThemeToggle />
        </header>

        <h1 className="mb-1 text-lg font-bold md:text-3xl">Blog not found.</h1>
      </main>
    );
  }

  const { title, publishDate, readTime, tags, imgUrl, imgAlt } = blog;

  return (
    <main id="main" className="mx-auto max-w-130 px-4 py-8 md:max-w-2xl">
      <header className="mb-12 flex justify-between">
        <Breadcrumb items={breadcrumbItems} currentLabel={title} />

        <ThemeToggle />
      </header>

      <h1 className="mb-1 text-lg font-bold md:text-3xl">{title}</h1>
    </main>
  );
}
