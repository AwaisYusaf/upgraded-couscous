import FeaturedProducts from "@/components/FeaturedProducts";
import PatreonProducts from "@/components/PatreonProducts";
import Slider from "@/components/Slider";

export const metadata = {
  title: "Home page",
};

export default function Home() {
  return (
    <>
      <main>
        {/* <Slider /> */}
        <FeaturedProducts />
        <PatreonProducts />
      </main>
    </>
  );
}
