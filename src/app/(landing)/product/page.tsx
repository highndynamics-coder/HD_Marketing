"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

export default function ProductPage() {
  const router = useRouter();
  const { data: ProductData, isLoading } = useQuery<any[]>({
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
    <main className="relative w-full min-h-screen overflow-x-hidden">
      {/* Section 1: Our Solution */}
      <section className="relative z-10 min-h-screen flex my-32">
        <div className="w-full lg:w-2/5 flex flex-col justify-center p-8 lg:p-16 border-r border-white/5">
          <div className="mb-12 opacity-100 transform-none">
            <h4 className="text-[#7CB342] text-md block mb-4 tracking-widest ml-6">
              OUR SOLUTION
            </h4>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full mb-6 opacity-100 transform-none">
              <h1 className="text-5xl lg:text-6xl text-white mb-4">
                우리의 <br /> <span className="text-[#7cb342]">솔루션</span>
              </h1>
            </div>
            <p className="text-white/60 text-lg">
              성장을 위한 최선의 마케팅 솔루션
            </p>
          </div>
          <div className="space-y-3 flex flex-col">
            <button className="w-full group opacity-100 transform-none">
              <div className="relative p-6 rounded-2xl border transition-all duration-500 bg-white/10 border-white/20 backdrop-blur-xl">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 rounded-r-full opacity-100 transform-none" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 bg-gradient-to-br from-[#1EC800] via-[#7CB342] to-[#9DD158]">
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
                      className="lucide lucide-trending-up w-6 h-6 text-white"
                      aria-hidden="true"
                    >
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-lg mb-1 transition-colors duration-300 text-white">
                      네이버 마케팅
                    </h3>
                    <p className="text-sm text-white/50">Search Domination</p>
                  </div>
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
                    className="lucide lucide-chevron-right w-5 h-5 transition-all duration-300 text-white translate-x-1"
                    aria-hidden="true"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </div>
              </div>
            </button>
            <button className="w-full group opacity-100 transform-none">
              <div className="relative p-6 rounded-2xl border transition-all duration-500 bg-white/10 border-white/20 backdrop-blur-xl">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 rounded-r-full opacity-100 transform-none" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 bg-gradient-to-br from-[#1EC800] via-[#7CB342] to-[#9DD158]">
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
                      className="lucide lucide-trending-up w-6 h-6 text-white"
                      aria-hidden="true"
                    >
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-lg mb-1 transition-colors duration-300 text-white">
                      META 마케팅
                    </h3>
                    <p className="text-sm text-white/50">Social Excellence</p>
                  </div>
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
                    className="lucide lucide-chevron-right w-5 h-5 transition-all duration-300 text-white translate-x-1"
                    aria-hidden="true"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </div>
              </div>
            </button>
            <button className="w-full group opacity-100 transform-none">
              <div className="relative p-6 rounded-2xl border transition-all duration-500 bg-white/10 border-white/20 backdrop-blur-xl">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 rounded-r-full opacity-100 transform-none" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 bg-gradient-to-br from-[#1EC800] via-[#7CB342] to-[#9DD158]">
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
                      className="lucide lucide-trending-up w-6 h-6 text-white"
                      aria-hidden="true"
                    >
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-lg mb-1 transition-colors duration-300 text-white">
                      MCN
                    </h3>
                    <p className="text-sm text-white/50">Content Creation</p>
                  </div>
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
                    className="lucide lucide-chevron-right w-5 h-5 transition-all duration-300 text-white translate-x-1"
                    aria-hidden="true"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </div>
              </div>
            </button>
            <button className="w-full group opacity-100 transform-none">
              <div className="relative p-6 rounded-2xl border transition-all duration-500 bg-white/10 border-white/20 backdrop-blur-xl">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 rounded-r-full opacity-100 transform-none" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 bg-gradient-to-br from-[#1EC800] via-[#7CB342] to-[#9DD158]">
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
                      className="lucide lucide-trending-up w-6 h-6 text-white"
                      aria-hidden="true"
                    >
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-lg mb-1 transition-colors duration-300 text-white">
                      인플루언서 협찬
                    </h3>
                    <p className="text-sm text-white/50">Authentic Voice</p>
                  </div>
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
                    className="lucide lucide-chevron-right w-5 h-5 transition-all duration-300 text-white translate-x-1"
                    aria-hidden="true"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </div>
              </div>
            </button>
            <button className="w-full group opacity-100 transform-none">
              <div className="relative p-6 rounded-2xl border transition-all duration-500 bg-white/10 border-white/20 backdrop-blur-xl">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 rounded-r-full opacity-100 transform-none" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 bg-gradient-to-br from-[#1EC800] via-[#7CB342] to-[#9DD158]">
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
                      className="lucide lucide-trending-up w-6 h-6 text-white"
                      aria-hidden="true"
                    >
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-lg mb-1 transition-colors duration-300 text-white">
                      당근마켓 마케팅
                    </h3>
                    <p className="text-sm text-white/50">Local Power</p>
                  </div>
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
                    className="lucide lucide-chevron-right w-5 h-5 transition-all duration-300 text-white translate-x-1"
                    aria-hidden="true"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </div>
              </div>
            </button>
          </div>
          <button className="mt-12 w-full py-5 px-8 bg-gradient-to-r from-[#7CB342] to-[#1EC800] text-white rounded-2xl hover:shadow-[0_0_40px_rgba(124,179,66,0.4)] transition-all flex items-center justify-center gap-3 group">
            <span className="text-lg">무료 상담 신청하기</span>
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
              className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex w-3/5 items-center justify-center p-16">
          <div className="w-full max-w-3xl opacity-100 transform-none">
            <div className="relative mb-12 rounded-3xl overflow-hidden opacity-100 transform-none">
              <div className="aspect-[16/10] relative group">
                <img
                  src="https://images.unsplash.com/photo-1762330467019-f38839ad4b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXZlciUyMHNlYXJjaCUyMGVuZ2luZXxlbnwxfHx8fDE3NjQ0MTU4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="네이버 마케팅"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-graident-to-br from-[#1EC800] via-[#7CB342] to-[#9DD158] flex items-center justify-center shadow-2x transform-none">
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
                    className="lucide lucide-trending-up w-8 h-8 text-white"
                    aria-hidden="true"
                  >
                    <path d="M16 7h6v6"></path>
                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                  </svg>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-2xl text-white opacity-100 transform-none">
                    4400만명을 사로잡는 당신의 예술이 시작되는 곳
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-8">
              <div className="opacity-100 transform-none" />
              <p className="text-xl text-white/80 leading-relaxed">
                네이버 검색광고, 파워링크, 브랜드 검색을 통해 고객이 당신을
                찾도록 만듭니다. 검색 의도가 명확한 고객을 타겟팅하여 높은
                전환율을 실현합니다.
              </p>
              <div className="flex flex-col space-y-3 opacity-100 transform-none">
                <div className="flex items-start gap-3 group/feature opacity-100 transform-none">
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
                    className="lucide lucide-circle-check w-6 h-6 flex-shrink-0 mt-0.5 transition-colors duration-300"
                    aria-hidden="true"
                    style={{ color: "rgb(124, 179, 66)" }}
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-white/80 group-hover/feature:text-white transition-colors">
                    네이버 검색광고 전략 수립 및 집행
                  </span>
                </div>
                <div className="flex items-start gap-3 group/feature opacity-100 transform-none">
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
                    className="lucide lucide-circle-check w-6 h-6 flex-shrink-0 mt-0.5 transition-colors duration-300"
                    aria-hidden="true"
                    style={{ color: "rgb(124, 179, 66)" }}
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-white/80 group-hover/feature:text-white transition-colors">
                    네이버 검색광고 전략 수립 및 집행
                  </span>
                </div>
                <div className="flex items-start gap-3 group/feature opacity-100 transform-none">
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
                    className="lucide lucide-circle-check w-6 h-6 flex-shrink-0 mt-0.5 transition-colors duration-300"
                    aria-hidden="true"
                    style={{ color: "rgb(124, 179, 66)" }}
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-white/80 group-hover/feature:text-white transition-colors">
                    키워드 분석 및 입찰 전략
                  </span>
                </div>
                <div className="flex items-start gap-3 group/feature opacity-100 transform-none">
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
                    className="lucide lucide-circle-check w-6 h-6 flex-shrink-0 mt-0.5 transition-colors duration-300"
                    aria-hidden="true"
                    style={{ color: "rgb(124, 179, 66)" }}
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-white/80 group-hover/feature:text-white transition-colors">
                    실시간 성과 분석 및 리포팅
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-32">
        <div className="grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 hidden">
          {!ProductData || ProductData.length === 0 ? (
            <div className="col-span-2 text-center py-20">
              <p className="text-xl text-gray-600">
                아직 등록된 제품이 없습니다.
              </p>
            </div>
          ) : (
            ProductData.map((product, index) => (
              <div
                key={product.id}
                onClick={() => router.push(`/product/${product.id}`)}
              >
                <a className="group block bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg border border-gray-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                  <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {product.title}
                    </h2>
                    <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed">
                      {product.content}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center text-blue-500 font-medium">
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      자세히 보기
                    </span>
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            ))
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 md:mt-32 hidden">
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl px-8 md:px-12 py-12 md:py-16 shadow-lg border border-gray-200">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              어떤 솔루션이 필요하신가요?
            </h2>
            <p className="text-lg md:text-xl font-light text-gray-600 mb-8">
              무료 상담을 통해 맞춤형 솔루션을 제안해드립니다
            </p>
            <a
              href="#"
              className="inline-block px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-medium rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              무료 상담 신청하기
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
