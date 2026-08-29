import { getBlogMeta, getBlogArticle } from '@/lib/utils';
import { BreadcrumbItem } from '@/types/breadcrumb-item';
import ArticleHeader from '@/components/sections/article-header';
import Footer from '@/components/sections/footer';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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
      <main
        id="main"
        className="mx-auto flex min-h-screen max-w-130 flex-col justify-between px-4 py-8 md:max-w-2xl"
      >
        <ArticleHeader breadcrumbItems={breadcrumbItems} blogMeta={blog} />

        <Footer />
      </main>
    );
  }

  const Article = await getBlogArticle(blog.id);

  return (
    <main
      id="main"
      className="mx-auto min-h-screen max-w-130 px-4 py-8 md:max-w-2xl"
    >
      <ArticleHeader breadcrumbItems={breadcrumbItems} blogMeta={blog} />

      <article className="prose prose-img:mx-auto mb-4 max-w-none">
        <Article />
      </article>

      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="focus-visible:outline-muted-foreground flex w-fit items-center gap-1 rounded-sm text-[0.875rem] font-normal underline-offset-4 outline-2 outline-offset-4 outline-transparent hover:underline"
        >
          <ArrowLeft aria-hidden="true" size={16} />
          <span>Back to homepage</span>
        </Link>

        <Link
          href="/blog"
          className="focus-visible:outline-muted-foreground flex w-fit items-center gap-1 rounded-sm text-[0.875rem] font-normal underline-offset-4 outline-2 outline-offset-4 outline-transparent hover:underline"
        >
          <span>Read more articles</span>
          <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>

      <Footer />
    </main>
  );
}
