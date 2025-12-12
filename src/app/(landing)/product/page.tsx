"use client";

import React, { useState } from "react";
import Image from "next/image";
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
  const imageList = [
    "/images/NaverLogo.png",
    "/images/InstaLogo.png",
    "/images/Influencer.png",
    "/images/CarrotLogo.png",
    "/images/MCNLogo.png",
  ];

  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const { data: ProductData, isLoading } = useQuery<ProductInfo[]>({
    queryKey: ["product"],
    queryFn: async () => {
      const { data, error } = await supabase.from("product").select("*");

      if (error) throw error;
      console.log("ProductData from Supabase:", data);
      setSelectedProduct({ ...data[0], image: imageList[0] });
      return data;
    },
  });

  if (isLoading) return <div>Loading...</div>;

  console.log("Rendering with ProductData:", ProductData);

  console.log("selectedProduct", selectedProduct);

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

          <div className="w-full flex flex-row items-start justify-center gap-10">
            <div className="flex flex-col gap-6 mx-auto mb-16">
              {ProductData?.sort((a, b) => a.id - b.id).map(
                (product, index) => {
                  const colorList = [
                    "from-[#1EC800] via-[#7CB342] to-[#9DD158]",
                    "from-[#4267B2] via-[#E1306C] to-[#833AB4]",
                    "from-[#FF0000] via-[#FF4444] to-[#FF6666]",
                    "from-[#FF0080] via-[#FF4D94] to-[#FF80B3]",
                    "from-[#FF6F0F] via-[#FF8C3A] to-[#FFA05C]",
                  ];

                  const svgList = [
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
                    </svg>,
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
                    </svg>,
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
                    </svg>,
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
                      className="lucide lucide-sparkles w-8 h-8 text-white"
                      aria-hidden="true"
                    >
                      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                      <path d="M20 2v4"></path>
                      <path d="M22 4h-4"></path>
                      <circle cx="4" cy="20" r="2"></circle>
                    </svg>,
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
                      className="lucide lucide-target w-8 h-8 text-white"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>,
                  ];

                  const imageList = [
                    "/images/NaverLogo.png",
                    "/images/InstaLogo.png",
                    "/images/Influencer.png",
                    "/images/CarrotLogo.png",
                    "/images/MCNLogo.png",
                  ];

                  return (
                    <div
                      className="flex flex-col w-[500px] h-28 opacity-100 transform-none"
                      key={index}
                      onClick={() => {
                        setSelectedProduct({
                          ...product,
                          image: imageList[index],
                        });
                      }}
                    >
                      <div className="flex flex-col w-[450px] h-28 rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20  hover:border-white/40 transition-all duration-500 group-hover:shadow-[0_0_80px_rgba(124,179,66,0.3)]">
                        <div className="h-full flex flex-col items-center justify-center">
                          <div className="flex flex-row items-center w-full p-4 gap-4">
                            <div>
                              <Image src={imageList[index]} alt="Product Logo" width={60} height={60} priority className="object-cover aspect-square" />
                            </div>
                            <div className="flex flex-col gap-2">
                              <h3 className="text-xl lg:text-3xl text-white">
                                {product.title}
                              </h3>
                              <p className="text-md text-white/70 leading-relaxed">
                                {product.content}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
            {selectedProduct && (
              <div className="w-full max-w-[520px] h-[650px] overflow-y-auto flex flex-col border border-white/20 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/5 to-transparent">
                {/* Header Section */}
                <div className="flex items-center gap-4 p-5 border-b border-white/10">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center overflow-hidden shrink-0">
                    <Image
                      src={selectedProduct.image}
                      alt="Product Logo"
                      width={48}
                      height={48}
                      priority
                      className="object-contain mix-blend-luminosity brightness-[1.5] aspect-square"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-xl font-bold text-white">
                      {selectedProduct.title}
                    </h4>
                    <p className="text-sm text-white/60 leading-snug line-clamp-2">
                      {selectedProduct.content}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-5 overflow-y-auto">
                  <div className="grid gap-3">
                    {selectedProduct.product?.map(
                      (product: any, index: number) => (
                        <div
                          key={index}
                          className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#7CB342] to-[#1EC800] flex items-center justify-center shrink-0 mt-0.5">
                              <span className="text-xs font-bold text-white">
                                {index + 1}
                              </span>
                            </div>
                            <div className="flex flex-col gap-1.5">
                              <h5 className="text-base font-semibold text-white">
                                {product.title}
                              </h5>
                              {Array.isArray(product.content) ? (
                                <ul className="space-y-1">
                                  {product.content.map(
                                    (item: string, i: number) => (
                                      <li
                                        key={i}
                                        className="text-sm text-white/60 leading-relaxed flex items-start gap-2"
                                      >
                                        <span className="text-[#7CB342] mt-1">•</span>
                                        <span>{item}</span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              ) : (
                                <p className="text-sm text-white/60 leading-relaxed">
                                  {product.content}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
