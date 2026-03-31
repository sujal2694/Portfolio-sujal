import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio - Sujal",
  description: "My personal portfolio showcasing my projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.className} ${ovo.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
