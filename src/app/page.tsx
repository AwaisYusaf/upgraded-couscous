import ExclusiveAccess from "@/components/ExclusiveAccess";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import PatreonProducts from "@/components/PatreonProducts";
import ReadMore from "@/components/ReadMore";
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
        <ExclusiveAccess />
        <ReadMore />
      </main>
    </>
  );
}
