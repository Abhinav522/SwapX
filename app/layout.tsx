import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "SwapX",
  description: "Simple, Secure Swap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative m-0 w-full min-h-screen overflow-x-hidden overflow-y-hidden">
        <div className="fixed inset-0 z-10"
          style={{
            background: "rgba(22, 42, 58, 0.5)",
          }}
        >

        </div>
        {/* Circle on the top-left corner */}
        <div
          className="absolute -top-[186px] -left-[186px] w-[372px] h-[372px] rounded-full"
          style={{
            background: "rgba(29, 224, 177, 1)",
            filter: "blur(150px)",
          }}
        />
        {/* Circle on the top-right corner */}
        <div
          className="absolute -top-[100px] -right-[50px] w-[602px] h-[602px] rounded-full"
          style={{
            background: "#162A3A",
            filter: "blur(150px)",
          }}
        />
        {/* Third circle (half visible on screen) */}
        <div
          className="absolute top-0 -right-[186px] w-[372px] h-[372px] rounded-full border-2 border-black"
          style={{
            background: "#1DE0B1",
            filter: "blur(150px)",
          }}
        />
        <Navbar />
        <main className="relative z-20 min-h-screen overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
