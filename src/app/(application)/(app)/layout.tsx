export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <aside>Dashboard Aside</aside>
      <main>{children}</main>
    </div>
  );
}
