import { unstable_setRequestLocale } from "next-intl/server";

import { getPosts } from "@/lib/contentful";
import PostCard from "@/components/PostCard";

export default async function Blogs({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const { items } = await getPosts();
  return (
    <div>
      {items.map((item) => (
        <PostCard
          key={item.fields.slug.en as string}
          title={item.fields.title[locale] as string}
          slug={item.fields.slug.en as string}
          excerpt={item.fields.excerpt[locale] as string}
          // @ts-ignore
          image={item.fields.image.en?.fields.file.en.url}
        />
      ))}
    </div>
  );
}
