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
    <main className="relative w-full min-h-screen overflow-x-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-32">
        {/* Title Section */}
        <div className="text-center mb-16 md:mb-24 space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              우리의 솔루션
            </h1>
          </div>
          <div>
            <p className="text-xl md:text-2xl font-light text-gray-600">
              성장을 위한 최적의 마케팅 솔루션을 만나보세요
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
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
        <div className="text-center mt-20 md:mt-32">
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
