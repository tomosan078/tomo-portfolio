import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tomo Portfolio",
  description: "Web Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
<body>
  {/* 背景装飾 */}
  <div className="bg-circle one" />
  <div className="bg-circle two" />
  {children}
</body>
{children}</body>
    </html>
  );
}
