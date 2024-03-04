import { getPosts } from "@/lib/contentful";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.SITE_URL;
  const { items } = await getPosts();
  const postsUrls = items.flatMap((item) => {
    return [
      {
        url: `${siteUrl}/${item.fields.slug.en as string}`,
        lastModified: item.sys.updatedAt,
      },
      {
        url: `${siteUrl}/ar/${item.fields.slug.en as string}`,
        lastModified: item.sys.updatedAt,
      },
    ];
  });

  return [
    {
      url: `${siteUrl}/`,
    },
    {
      url: `${siteUrl}/ar`,
    },
    {
      url: `${siteUrl}/about`,
    },
    {
      url: `${siteUrl}/ar/${encodeURIComponent("حول")}`,
    },
    {
      url: `${siteUrl}/blog`,
    },
    {
      url: `${siteUrl}/ar/blog`,
    },
    ...postsUrls,
  ];
}
