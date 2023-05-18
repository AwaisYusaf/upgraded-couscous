import Head from "next/head";
export const metadata = {
  title: "Shopping Cart",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex justify-center">
        <div className="w-[96%] md:w-[90%] lg:w-[85%]">{children}</div>
      </main>
    </>
  );
}
