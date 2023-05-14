export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex justify-center">
      <div className="w-[85%]">
        <h1 className="text-4xl my-10">Sale 🔥</h1>
        {children}
      </div>
    </main>
  );
}
