import MarkdownRender from "@/components/MarkdownRender";
import { getPost, getPosts } from "@/lib/contentful";
import { unstable_setRequestLocale } from "next-intl/server";

export const revalidate = 3600;

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
      <MarkdownRender postBody={postBody} />
    </article>
  );
}
