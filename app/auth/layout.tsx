export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" flex justify-center items-center h-screen pb-16">
      {children}
    </main>
  );
}
