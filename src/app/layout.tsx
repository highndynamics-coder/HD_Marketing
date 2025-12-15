"use client";

import React from "react";
import clsx from "clsx";
import "../../global.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import QueryProvider from "../shared/provider/QueryProvider";
import { usePathname } from "next/navigation";

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
