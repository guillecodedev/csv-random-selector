import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "CSV Random Selector",
  description: "This application allows you to upload a CSV file, select random records, and display the information of each record in a modal.",
  keywords: ["csv", "random", "selector"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
