"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

interface ProductInfo {
  id: number;
  created_at?: string;
  title: string;
  sub_title?: string;
  content?: string;
  metrics?: Array<{ name: string; number: string }>;
  product?: Array<{ title: string; content?: string[] }>;
  description?: string[];
}

export default function ProductPage() {
  const router = useRouter();
  const { data: ProductData, isLoading } = useQuery<ProductInfo[]>({
    queryKey: ["product"],
    queryFn: async () => {
      const { data, error } = await supabase.from("product").select("*");

      if (error) throw error;
      console.log("ProductData from Supabase:", data);
      return data;
    },
  });

  if (isLoading) return <div>Loading...</div>;

  console.log("Rendering with ProductData:", ProductData);

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-[#001A4D] via-[#001529] to-[#000000]" />
      <section className="relative z-10 container mx-auto px-6 lg:px-16">
        <div className="w-full flex flex-col items-center justify-center p-8 lg:p-16 border-r border-white/5">
          <div className="text-center mb-16 opacity-100 transform-none">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6 opacity-100 transform-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles w-4 h-4 text-[#7cb342]"
                aria-hidden="true"
              >
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                <path d="M20 2v4"></path>
                <path d="M22 4h-4"></path>
                <circle cx="4" cy="20" r="2"></circle>
              </svg>
              <h4 className="text-[#7CB342] text-sm tracking-wider uppercase">
                OUR SOLUTION
              </h4>
            </div>

            <h1 className="text-5xl lg:text-7xl text-white mb-6">
              우리의{" "}
              <span className="bg-gradient-to-r from-[#7CB342] to-[#1EC800] bg-clip-text text-transparent">
                솔루션
              </span>
            </h1>

            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              성장을 위한 최선의 마케팅 솔루션으로 당신의 브랜드를 다음 레벨로
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
            <div className="md:col-span-2 md:row-span-2 group opacity-100 transform-none">
              <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 hover:border-white/40 transition-all duration-500 group-hover:shadow-[0_0_80px_rgba(124,179,66,0.3)]">
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1EC800] via-[#7CB342] to-[#9DD158] flex items-center justify-center shadow-2xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-trending-up w-10 h-10 text-white"
                        aria-hidden="true"
                      >
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                      </svg>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-zap w-3 h-3 text-[#7cb342]"
                        aria-hidden="true"
                      >
                        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                      </svg>
                      <span className="text-xs text-white/80">Live</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-4xl lg:text-5xl mb-3 text-white">
                      {ProductData?.[0]?.title}
                    </h3>
                    <p className="text-lg text-white/60">
                      {ProductData?.[0]?.sub_title}
                    </p>
                  </div>

                  <p className="text-lg text-white/70 mb-6 leading-relaxed">
                    {ProductData?.[0]?.content}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6 mt-auto">
                    {ProductData?.[0]?.metrics?.map((metric, index) => (
                      <div
                        key={index}
                        className="bg-black/30 backdrop-blur-sm rounded-xl p-3 border border-white/10"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chart-column w-3 h-3"
                            aria-hidden="true"
                            style={{ color: "#7cb342" }}
                          >
                            <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                            <path d="M18 17V9"></path>
                            <path d="M13 17V5"></path>
                            <path d="M8 17v-3"></path>
                          </svg>
                          <div className="text-2xl bg-gradient-to-r from-[#1EC800] via-[#7CB342] to-[#9DD158] bg-clip-text text-transparent">
                            {metric.number}
                          </div>
                        </div>
                        <div className="text-xs text-white/50">
                          {metric.name}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="mt-6 py-4 px-8 text-lg w-full bg-gradient-to-r from-[#1EC800] via-[#7CB342] to-[#9DD158] text-white rounded-2xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 relative overflow-hidden">
                    <span className="relative z-10">자세히 보기</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right relative z-10 w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  </button>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 md:row-span-2 group opacity-100 transform-none">
              <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 hover:border-white/40 transition-all duration-500 group-hover:shadow-[0_0_80px_rgba(124,179,66,0.3)]">
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4267B2] via-[#E1306C] to-[#833AB4] flex items-center justify-center shadow-2xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-users w-10 h-10 text-white"
                        aria-hidden="true"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                      </svg>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-zap w-3 h-3 text-[#7cb342]"
                        aria-hidden="true"
                      >
                        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                      </svg>
                      <span className="text-xs text-white/80">Live</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-4xl lg:text-5xl mb-3 text-white">
                      {ProductData?.[1]?.title}
                    </h3>
                    <p className="text-lg text-white/60">
                      {ProductData?.[1]?.sub_title}
                    </p>
                  </div>

                  <p className="text-lg text-white/70 mb-6 leading-relaxed">
                    {ProductData?.[1]?.content}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6 mt-auto">
                    {ProductData?.[1]?.metrics?.map((metric, index) => (
                      <div
                        key={index}
                        className="bg-black/30 backdrop-blur-sm rounded-xl p-3 border border-white/10"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chart-column w-3 h-3"
                            aria-hidden="true"
                            style={{ color: "#E1306C" }}
                          >
                            <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                            <path d="M18 17V9"></path>
                            <path d="M13 17V5"></path>
                            <path d="M8 17v-3"></path>
                          </svg>
                          <div className="text-2xl bg-gradient-to-r from-[#4267B2] via-[#E1306C] to-[#833AB4] bg-clip-text text-transparent">
                            {metric.number}
                          </div>
                        </div>
                        <div className="text-xs text-white/50">
                          {metric.name}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="mt-6 py-4 px-8 text-lg w-full bg-gradient-to-r from-[#4267B2] via-[#E1306C] to-[#833AB4] text-white rounded-2xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 relative overflow-hidden">
                    <span className="relative z-10">자세히 보기</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right relative z-10 w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  </button>
                </div>
              </div>
            </div>

            {ProductData?.slice(2).map((product, index) => (
              <div className="col-span-1 group opacity-100 transform-none">
                <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 hover:border-white/40 transition-all duration-500 group-hover:shadow-[0_0_80px_rgba(124,179,66,0.3)]">
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4267B2] via-[#E1306C] to-[#833AB4] flex items-center justify-center shadow-2xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-users w-8 h-8 text-white"
                          aria-hidden="true"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                      </div>

                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-zap w-3 h-3 text-[#7cb342]"
                          aria-hidden="true"
                        >
                          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                        </svg>
                        <span className="text-xs text-white/80">Live</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-xl lg:text-3xl mb-3 text-white">
                        {product.title}
                      </h3>
                      <p className="text-lg text-white/60">
                        {product.sub_title}
                      </p>
                    </div>

                    <p className="text-lg text-white/70 mb-6 leading-relaxed">
                      {product.content}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-6 mt-auto">
                      {product.metrics?.map((metric, index) => (
                        <div
                          key={index}
                          className="bg-black/30 backdrop-blur-sm rounded-xl p-3 border border-white/10 min-w-24"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-chart-column w-3 h-3"
                              aria-hidden="true"
                              style={{ color: "#E1306C" }}
                            >
                              <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                              <path d="M18 17V9"></path>
                              <path d="M13 17V5"></path>
                              <path d="M8 17v-3"></path>
                            </svg>
                            <div className="text-xl bg-gradient-to-r from-[#4267B2] via-[#E1306C] to-[#833AB4] bg-clip-text text-transparent">
                              {metric.number}
                            </div>
                          </div>
                          <div className="text-xs text-white/50">
                            {metric.name}
                          </div>
                        </div>
                      ))}
                    </div>

                    <button className="mt-6 py-4 px-8 text-lg w-full bg-gradient-to-r from-[#4267B2] via-[#E1306C] to-[#833AB4] text-white rounded-2xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 relative overflow-hidden">
                      <span className="relative z-10">자세히 보기</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right relative z-10 w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
