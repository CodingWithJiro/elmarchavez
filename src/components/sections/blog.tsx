type BlogType = {
  id: number;
  title: string;
  description: string;
  publishDate: string;
  readTime: string;
  tags: string[];
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
  },
];

const Blog = () => {
  return (
    <section>
      <h2>Blog</h2>
    </section>
  );
};

export default Blog;
