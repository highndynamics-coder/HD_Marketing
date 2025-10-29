"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useResponsive } from "../../lib/useResponsive";

export default function LandingPage() {
  const { isMobile, isTablet } = useResponsive();
  const heroTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add any animations here if needed
  }, []);

  if (isMobile || isTablet) {
    return (
      <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20">
        {/* Hero Section */}
        <div className="w-full max-w-4xl space-y-8 text-center">
          {/* Repeated Text */}
          <div ref={heroTextRef} className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">
              성과를 만드는 디지털 마케팅
            </h1>
          </div>

          {/* Main Tagline */}
          <div className="pt-8">
            <h3 className="text-2xl font-bold text-gray-900 leading-relaxed">
              # High & Dynamic
              <br />
              모두의 성장이 시작되는 곳
            </h3>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-black text-white text-lg font-medium rounded-full hover:bg-gray-800 transition-colors duration-200"
            >
              문의하기
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-16 py-32"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, #3355b8 0%, #232b40 50%, #1f1f1f 100%)",
      }}
    >
      {/* Hero Section */}
      <div className="w-full space-y-12 text-center flex flex-col items-center justify-center">
        {/* Repeated Text with gradient effect */}
        <div
          ref={heroTextRef}
          className="space-y-4 rounded-3xl bg-white/10 p-2 w-1/6"
        >
          <h4 className="text-lg font-bold text-white leading-tight">
            성과를 만드는 디지털 마케팅
          </h4>
        </div>

        {/* Main Tagline */}
        <div className="pt-12 space-y-12">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-relaxed">
            High & Dynamic
          </h3>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-relaxed">
            모두의 성장이 시작되는 곳
          </h3>
        </div>

        {/* CTA Button */}
        <div className="pt-16">
          <Link
            href="/contact"
            className="inline-block px-12 py-5 bg-blue-500 text-white text-xl font-medium rounded-md hover:bg-gray-800 transition-colors duration-200"
          >
            문의하기
          </Link>
        </div>
      </div>
    </main>
  );
}
