import Image from 'next/image';
import { BlogType } from '@/types/blog';

const blogList: BlogType[] = [
  {
    id: 1,
    title:
      'Two Devs and a Copilot Created ClassifierAI: A Prototype Chrome Extension that Automatically Detects AI-Generated Content on DEV!',
    description:
      'We revived an unfinished project and turned it into ClassifierAI, a prototype Chrome extension that detects AI-generated content on DEV using machine learning.',
    publishDate: 'June 2026',
    readTime: '15 min read',
    tags: ['#opensource', '#machinelearning', '#copilot'],
    blogUrl:
      'https://dev.to/devengers/two-devs-and-a-copilot-created-classifierai-a-prototype-chrome-extension-that-automatically-4fge',
    imgUrl: '/img/blog-2.webp',
  },
  {
    id: 2,
    title:
      'Should you use Gemma 4 for your Development? A Multiversal Analysis to Determine if Gemma 4 is Right for You!',
    description:
      "AI tools are becoming increasingly common in modern development workflows. In this article, we share our experience using Google's Gemma 4 through local setup with Ollama, hallucination testing, output evaluation, and AI-agent experimentation.",
    publishDate: 'May 2026',
    readTime: '19 min read',
    tags: ['#llm', '#ollama', '#gemma4'],
    blogUrl:
      'https://dev.to/devengers/should-you-use-gemma-4-for-your-development-a-multiversal-analysis-to-determine-if-gemma-4-is-2iol',
    imgUrl: '/img/blog-1.webp',
  },
];

const Blog = () => {
  return (
    <section className="border-border/40 bg-card rounded-lg border p-4 transition-colors duration-150 ease-in-out">
      <h2 className="mb-3 text-lg font-bold">Blog</h2>

      <ul className="flex flex-col gap-4">
        {blogList.map(
          ({
            id,
            title,
            description,
            publishDate,
            readTime,
            tags,
            blogUrl,
            imgUrl,
          }) => {
            return (
              <li
                className="border-border/60 border-b pb-4 last:border-b-0 md:flex md:flex-row md:items-center md:justify-between md:gap-4"
                key={id}
              >
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
                      className="focus-visible:outline-muted-foreground rounded-sm text-right text-[0.75rem] font-normal underline-offset-4 outline-2 outline-offset-4 outline-transparent transition-colors duration-150 ease-in-out hover:underline"
                      href={blogUrl}
                      target="_blank"
                    >
                      Read More →
                    </a>
                  </div>
                </article>

                <div className="hidden w-67.5 shrink-0 md:block">
                  <Image src={imgUrl} alt="" width={800} height={400} />
                </div>
              </li>
            );
          },
        )}
      </ul>
    </section>
  );
};

export default Blog;
