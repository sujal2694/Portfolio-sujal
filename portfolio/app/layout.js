import { Outfit, Ovo, Amaranth } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

const amaranth = Amaranth({
  subsets:["latin"],
  weight:["400","700"]
})

export const metadata = {
  title: "Portfolio - Sujal",
  description: "My personal portfolio showcasing my projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
    >
      <body className={`${outfit.className} ${ovo.className} ${amaranth.className} antialiased leading-8 overflow-x-hidden`}>{children}</body>
    </html>
  );
}
