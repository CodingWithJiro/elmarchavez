import { getBlog } from '@/lib/utils';
import { BreadcrumbItem } from '@/types/breadcrumb-item';
import ArticleHeader from '@/components/sections/article-header';
import Image from 'next/image';

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
        <ArticleHeader
          breadcrumbItems={breadcrumbItems}
          currentLabel="Blog Not Found"
        />

        <h1 className="mb-1 text-lg font-bold md:text-3xl">Blog not found.</h1>
      </main>
    );
  }

  const { title, publishDate, readTime, tags, imgUrl, imgAlt } = blog;

  return (
    <main id="main" className="mx-auto max-w-130 px-4 py-8 md:max-w-2xl">
      <ArticleHeader breadcrumbItems={breadcrumbItems} currentLabel={title} />

      <h1 className="mb-1 text-lg font-bold md:text-3xl">{title}</h1>

      <p>{publishDate}</p>

      <p>{readTime}</p>

      <ul className="flex gap-2 text-[0.65rem] font-light">
        {tags.map((tag) => {
          return <li key={tag}>{tag}</li>;
        })}
      </ul>

      <div className="w-100">
        <Image
          src={imgUrl}
          alt={imgAlt}
          width={800}
          height={400}
          className="aspect-video w-full object-cover"
        />
      </div>
    </main>
  );
}
