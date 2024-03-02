import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";

import Code from "@/components/Code";
import CopyCode from "@/components/CopyCode";

export default function MarkdownRender({ postBody }: { postBody: string }) {
  return (
    <Markdown
      remarkPlugins={[
        [remarkGfm],
        [remarkToc, { tight: true, maxDepth: 5, ordered: true, prefix: "" }],
      ]}
      rehypePlugins={[rehypeSlug]}
      className="scroll-smooth mt-5 mx-auto prose prose-zinc prose-pre:bg-transparent dark:prose-invert"
      components={{
        code({ className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              className="scrollbar-thin scrollbar-track-base-content/5 scrollbar-thumb-base-content/40 scrollbar-track-rounded-md scrollbar-thumb-rounded"
              language={match[1]}
              style={materialOceanic}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <Code className={className} {...props}>
              {children}
            </Code>
          );
        },
        pre: (pre) => <CopyCode pre={pre} />,
      }}
    >
      {postBody}
    </Markdown>
  );
}
