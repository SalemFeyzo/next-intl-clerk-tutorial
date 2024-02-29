import { unstable_setRequestLocale } from "next-intl/server";

import { Link } from "@/navigation";
import { getPosts } from "@/contentful.client";

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
        <div key={item.fields.slug.en as string}>
          <h1>{item.fields.title[locale] as string}</h1>
          <p>{item.fields.excerpt[locale] as string}</p>
          <Link
            href={{
              pathname: "/blog/[slug]",
              params: {
                slug: encodeURIComponent(item.fields.slug.en as string),
              },
            }}
          >
            Read more...
          </Link>
        </div>
      ))}
    </div>
  );
}
