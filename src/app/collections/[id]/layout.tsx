export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  let title = params.id
    .split("-")
    .map((word: string) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  return (
    <main className="flex justify-center">
      <div className="w-[96%] md:w-[90%] lg:w-[85%]">
        <h1 className="text-4xl my-10">{title}</h1>
        {children}
      </div>
    </main>
  );
}
