import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Crunch Assignment",
  description: "Assignment done by Alexey Smolyaninov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
