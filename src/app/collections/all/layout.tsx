export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex justify-center">
      <div className="w-[96%] md:w-[90%] lg:w-[85%]">
        <h1 className="text-4xl my-10">All Products</h1>
        {children}
      </div>
    </main>
  );
}
