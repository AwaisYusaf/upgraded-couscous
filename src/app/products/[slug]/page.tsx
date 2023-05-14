import React from "react";
import Image from "next/image";
type Props = {};
import Details from "@/components/Details";
import { createClient } from "contentful";

//Nextjs config
export const dynamic = "force-dynamic";
export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  let title = slug
    .split("-")
    .map((word: string) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  return {
    title,
  };
}

const space: string = process.env.CONTENTFUL_SPACE_ID!;
const accessToken: string = process.env.CONTENTFUL_ACCESS_TOKEN!;

const contentfulClient = createClient({
  space,
  accessToken,
});

async function fetchProductBySlug(targetSlug: string) {
  const data = await contentfulClient.getEntries({ content_type: "title" });

  const targetData = data.items.filter((entry: any) => {
    const {
      fields: { slug },
    } = entry;
    return slug == targetSlug;
  });
  if (targetData.length > 0) {
    return targetData[0];
  }
  return false;
}

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const data = await fetchProductBySlug(slug);
  if (!data) {
    return <h1>No product found!</h1>;
  }
  return <Details data={data} />;
}
