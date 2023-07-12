import "@/assets/styling/globals.css";
import { Navbar } from "@/components/Common";
import Footer from "@/components/Common/Footer";
import { twclsx } from "@/libs/twclsx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abyditya",
  description: "Hey! im Abyditya, I'm from Indonesia, as a FE developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twclsx("bg-black text-gray-100 font-_19289u1029dash mx-3")}
      >
        <Navbar />
        <main className={twclsx("max-w-xl mx-auto")}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
