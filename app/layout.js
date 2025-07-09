import { Playpen_Sans, Lato } from "next/font/google";
import "./globals.css";

const playpenSans = Playpen_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const lato = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Sleep Lab - Better Sleep, Better Life",
  description:
    "Sleep like your ancestors. Wake up healthier, happier, and more energized every day. Professional sleep coaching services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${playpenSans.variable} ${lato.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
