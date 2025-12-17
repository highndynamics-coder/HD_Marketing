"use client";

import React from "react";
import clsx from "clsx";
import { useResponsive } from "@/lib/useResponsive";
import MaintenancePage from "@/components/Maintenance";
import { Noto_Sans, Noto_Sans_KR } from "next/font/google";
import "../../global.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import QueryProvider from "../shared/provider/QueryProvider";
import { usePathname } from "next/navigation";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  return (
    <html lang="ko" className="light" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body>
        <QueryProvider>
          <SiteNav />
          <main
            className={clsx(
              "min-h-screen",
              isMainPage &&
                "bg-gradient-to-br from-[#001A4d] via-[#002D66] to-[#001A33]",
              !isMainPage && "bg-black"
            )}
            style={{
              scrollBehavior: "smooth",
            }}
          >
            {children}
          </main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
