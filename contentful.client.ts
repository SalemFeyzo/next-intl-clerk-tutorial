import { createClient } from "contentful";
import { cache } from "react";

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
});

export const contentfulPreviewClient = createClient({
  host: "preview.contentful.com",
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
});

export const getPost = cache(async (slug: string) => {
  const post = await contentfulClient.withAllLocales.getEntries({
    content_type: "post",
    "fields.slug[match]": slug,
  });
  return post;
});

export const getPosts = cache(async () => {
  const posts = await contentfulClient.withAllLocales.getEntries({
    content_type: "post",
  });
  return posts;
});
