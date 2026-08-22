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

  if (blog.id === -99) {
    return (
      <main id="main" className="mx-auto max-w-130 px-4 py-8 md:max-w-2xl">
        <ArticleHeader breadcrumbItems={breadcrumbItems} blogMeta={blog} />
      </main>
    );
  }

  const Article = await getBlogArticle(blog.id);

  return (
    <main id="main" className="mx-auto max-w-130 px-4 py-8 md:max-w-2xl">
      <ArticleHeader breadcrumbItems={breadcrumbItems} blogMeta={blog} />

      <article className="prose prose-img:mx-auto max-w-none">
        <Article />
      </article>
    </main>
  );
}
