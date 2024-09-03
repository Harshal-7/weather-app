import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });
const poppin = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weather App",
  description: "Weather App created by Harshal Shinde using WeatherAPI.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-[#1d1d1d] relative", poppin.className)}>
        <img
          src="/wp1.jpg"
          alt="bg"
          className="absolute top-0 left-0 w-full max-h-full object-cover blur-sm"
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
