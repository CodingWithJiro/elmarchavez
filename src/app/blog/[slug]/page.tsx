type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  return (
    <main>
      <h1>Blog Article</h1>
      <p>Slug: {slug}</p>
    </main>
  );
}
