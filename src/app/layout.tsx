import "./globals.css";
import { Open_Sans } from "next/font/google";
import Nav from "./nav/nav";
import Footer from "./footer/page";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "My Blog",
    template: "My Blog | %s",
  },
  description: "This is my Blog",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        <header>
          <Nav />
        </header>
        <main className="grow">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
