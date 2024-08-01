export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-3xl">PomodoroPal</h1>
      {children}
    </main>
  );
}