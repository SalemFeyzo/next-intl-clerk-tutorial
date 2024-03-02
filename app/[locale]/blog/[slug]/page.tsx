import { getPost, getPosts } from "@/lib/contentful";
import { unstable_setRequestLocale } from "next-intl/server";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";

// export const revalidate = 1000;

export async function generateStaticParams() {
  const { items } = await getPosts();

  return items.map((item) => ({ slug: item.fields.slug.en }));
}

export default async function Post({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}) {
  unstable_setRequestLocale(locale);
  const post = await getPost(slug);
  const postBody = post.items[0].fields.body[locale] as string;
  return (
    <article>
      <Markdown
        remarkPlugins={[
          [remarkGfm],
          [remarkToc, { tight: true, maxDepth: 5, ordered: true, prefix: "" }],
        ]}
        rehypePlugins={[rehypeSlug]}
        className="mt-5 mx-auto prose prose-zinc dark:prose-invert"
      >
        {postBody}
      </Markdown>
    </article>
  );
}
