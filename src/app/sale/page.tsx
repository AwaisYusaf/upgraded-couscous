import Filter from "@/components/Filter";
import ProductCard from "@/components/ProductCard";
import React from "react";
import { createClient } from "contentful";

type Props = {};
const sampleData = { imgUrl: "", soldOut: true, title: "", price: "" };

//Nextjs config
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Sale🔥",
};

const space: string = process.env.CONTENTFUL_SPACE_ID!;
const accessToken: string = process.env.CONTENTFUL_ACCESS_TOKEN!;

const contentfulClient = createClient({
  space,
  accessToken,
});

const filterData = (data: any[]) =>
  data.map((entry: any) => {
    const {
      fields: {
        primaryImage: {
          fields: {
            file: { url },
          },
        },
        title,
        price,
        slug,
      },
    } = entry;
    return { imgUrl: "https:" + url, title, price, slug };
  });

async function getProducts(targetSlug: string) {
  const data = await contentfulClient.getEntries({
    content_type: "title",
  });

  const targetData = data.items.filter((entry: any) => {
    const {
      fields: {
        inventoryType: {
          fields: { slug },
        },
      },
    } = entry;
    return slug == targetSlug;
  });

  return targetData;
}

async function Page() {
  const data = await getProducts("sale");
  const filteredData = filterData(data);

  if (filteredData.length == 0) {
    return (
      <h1 className="my-12 text-center text-4xl opacity-70">
        No products available.
      </h1>
    );
  }

  return (
    <>
      <Filter data={{ productsCount: filteredData.length }} />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8 my-10">
        {filteredData.map((entry: any, index: number) => {
          return <ProductCard key={index} data={entry} />;
        })}
      </div>
    </>
  );
}

export default Page;
