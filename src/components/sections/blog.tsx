type BlogType = {
  id: number;
  title: string;
  description: string;
  publishDate: string;
  readTime: string;
  tags: string[];
  blogUrl: string;
};

const blogList: BlogType[] = [
  {
    id: 1,
    title:
      'Should you use Gemma 4 for your Development? A Multiversal Analysis to Determine if Gemma 4 is Right for You!',
    description:
      "AI tools are becoming increasingly common in modern development workflows. In this article, we share our experience using Google's Gemma 4 through local setup with Ollama, hallucination testing, output evaluation, and AI-agent experimentation.",
    publishDate: 'May 2026',
    readTime: '19 min read',
    tags: ['#llm', '#ollama', '#gemma4'],
    blogUrl:
      'https://dev.to/devengers/should-you-use-gemma-4-for-your-development-a-multiversal-analysis-to-determine-if-gemma-4-is-2iol',
  },
];

const Blog = () => {
  return (
    <section className="border-border/40 bg-card rounded-lg border p-4 transition-colors duration-150 ease-in-out">
      <h2 className="mb-3 text-lg font-bold">Blog</h2>

      <ul>
        {blogList.map(
          ({
            id,
            title,
            description,
            publishDate,
            readTime,
            tags,
            blogUrl,
          }) => {
            return (
              <li key={id}>
                <article>
                  <h3 className="mb-2 text-[0.875rem] font-semibold">
                    {title}
                  </h3>

                  <p className="mb-1 text-[0.65rem] font-light">
                    {publishDate} • {readTime}
                  </p>

                  <p className="mb-2 text-[0.75rem] font-normal">
                    {description}
                  </p>

                  <div className="flex items-center justify-between pr-4">
                    <ul className="flex gap-2 text-[0.65rem] font-light">
                      {tags.map((tag) => {
                        return <li key={tag}>{tag}</li>;
                      })}
                    </ul>

                    <a
                      className="rounded-sm text-right text-[0.75rem] font-normal underline-offset-4 outline-offset-4 hover:underline"
                      href={blogUrl}
                      target="_blank"
                    >
                      Read More →
                    </a>
                  </div>
                </article>
              </li>
            );
          },
        )}
      </ul>
    </section>
  );
};

export default Blog;
