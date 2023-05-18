import PageNotFound from "@/components/PageNotFound";
import CheckoutSuccess from "@/components/CheckoutSuccess";
import CheckoutFailed from "@/components/CheckoutFailed";
type Props = any;

function Page({ searchParams }: Props) {
  if (searchParams) {
    if (searchParams.status == "success") {
      return <CheckoutSuccess />;
    } else if (searchParams.status == "failed") {
      return <CheckoutFailed />;
    }
  }
  return <PageNotFound />;
}

export default Page;
