export async function generateStaticParams() {
  const paths = [
    "washi-tapes",
    "prints",
    "earrings",
    "paper-products",
    "stickers",
  ];

  return paths.map((obj) => ({
    id: obj,
  }));
}

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  let name = params.id;
  if (name.split("-").length > 1) {
    name = name.split("-").join(" ");
  }
  return (
    <main className="flex justify-center">
      <div className="w-[85%]">
        <h1 className="text-4xl my-10">{name}</h1>
        {children}
      </div>
    </main>
  );
}
