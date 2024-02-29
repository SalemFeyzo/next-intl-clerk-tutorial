import { getPost, getPosts } from "@/contentful.client";
import { unstable_setRequestLocale } from "next-intl/server";

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

  return (
    <div>
      {slug}/{locale}
      <div>
        <h1>{post.items[0].fields.title[locale] as string}</h1>
      </div>
    </div>
  );
}
