import { getBlogMeta, getBlogArticle } from '@/lib/utils';
import { BreadcrumbItem } from '@/types/breadcrumb-item';
import ArticleHeader from '@/components/sections/article-header';

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const blog = getBlogMeta(slug);
  const breadcrumbItems: BreadcrumbItem[] = [
    {
      label: 'Blog',
      href: '/blog',
    },
  ];

  if (!blog) {
    return (
      <main id="main" className="mx-auto max-w-130 px-4 py-8 md:max-w-2xl">
        <ArticleHeader
          breadcrumbItems={breadcrumbItems}
          currentLabel="Blog Not Found"
        />

        <h1 className="mb-1 text-lg font-bold md:text-3xl">Blog not found.</h1>
      </main>
    );
  }

  const Article = await getBlogArticle(blog.id);

  return (
    <main id="main" className="mx-auto max-w-130 px-4 py-8 md:max-w-2xl">
      <ArticleHeader
        breadcrumbItems={breadcrumbItems}
        currentLabel={blog.title}
      />

      <article className="prose prose-invert max-w-none">
        <Article />
      </article>
    </main>
  );
}
