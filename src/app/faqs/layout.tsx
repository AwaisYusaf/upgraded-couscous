export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex justify-center">
      <div className="w-[98%] lg:w-[70%]">{children}</div>
    </main>
  );
}
