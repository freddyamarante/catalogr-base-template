import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Studio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
          <main>
            {children}
          </main>
      </body>
    </html>
  );
}
