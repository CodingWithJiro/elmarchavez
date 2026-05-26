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
    <section>
      <h2>Blog</h2>

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
                  <h3>{title}</h3>

                  <ul>
                    {tags.map((tag) => {
                      return <li key={tag}>{tag}</li>;
                    })}
                  </ul>

                  <p>{description}</p>

                  <div>
                    <p>
                      {publishDate} • {readTime}
                    </p>

                    <a href={blogUrl} target="_blank">
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
