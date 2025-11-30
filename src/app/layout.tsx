import React from "react";
import "../../global.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import QueryProvider from "../shared/provider/QueryProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="light" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="format-detection" content="telephone=no" />
        <style>{`html { -webkit-text-size-adjust: 100%; }`}</style>
      </head>
      <body>
        <QueryProvider>
          <SiteNav />
          <main
            className="min-h-screen"
            style={{
              scrollBehavior: "smooth",
              backgroundColor: "#171a52",
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
