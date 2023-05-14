import ExclusiveAccess from "@/components/ExclusiveAccess";
import HomeSectionOne from "@/components/HomeSectionOne";
import Footer from "@/components/Footer";
import HomeSectionTwo from "@/components/HomeSectionTwo";
import ReadMore from "@/components/ReadMore";
import Slider from "@/components/Slider";
import { createClient } from "contentful";
import { Suspense } from "react";

export const metadata = {
  title: "Home",
};
export const dynamic = "force-dynamic";

const space: string = process.env.CONTENTFUL_SPACE_ID!;
const accessToken: string = process.env.CONTENTFUL_ACCESS_TOKEN!;

const contentfulClient = createClient({
  space,
  accessToken,
});

async function getProducts(condition: any) {
  const data = await contentfulClient.getEntries({
    content_type: "title",
  });
  const sales = data.items.filter((entry: any) => {
    const {
      fields: {
        inventoryType: {
          fields: { slug },
        },
      },
    } = entry;
    return slug == "sale";
  });

  const newArrival = data.items.filter((entry: any) => {
    const {
      fields: {
        inventoryType: {
          fields: { slug },
        },
      },
    } = entry;
    return slug == "new-arrival";
  });

  const all = data.items.filter((entry: any) => {
    const {
      fields: {
        inventoryType: {
          fields: { slug },
        },
      },
    } = entry;
    return slug == "normal-collection";
  });

  const videoGameInspired = data.items.filter((entry: any) => {
    const {
      fields: {
        category: {
          fields: { slug },
        },
      },
    } = entry;
    return slug == "video-game-inspired";
  });

  const bookishInspired = data.items.filter((entry: any) => {
    const {
      fields: {
        category: {
          fields: { slug },
        },
      },
    } = entry;
    return slug == "bookish-inspired";
  });

  const moviesInspired = data.items.filter((entry: any) => {
    const {
      fields: {
        category: {
          fields: { slug },
        },
      },
    } = entry;
    return slug == "movie-inspired";
  });

  return {
    sales,
    newArrival,
    all,
    moviesInspired,
    videoGameInspired,
    bookishInspired,
  };
}

export default async function Home() {
  const products = await getProducts({});

  return (
    <>
      <main className="mt-8">
        <Slider />
        <Suspense fallback={<h1>Loading</h1>}>
          <HomeSectionOne data={products.videoGameInspired} />
        </Suspense>

        <Suspense fallback={<h1>Loading</h1>}>
          <HomeSectionTwo data={products.bookishInspired} />
        </Suspense>
        <ExclusiveAccess />
        <ReadMore />
      </main>
    </>
  );
}
