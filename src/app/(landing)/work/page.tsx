"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WorkPage() {
  const router = useRouter();
  const { data: WorkData, isLoading } = useQuery<any[]>({
    queryKey: ["work"],
    queryFn: async () => {
      const { data, error } = await supabase.from("process").select("*");

      if (error) throw error;
      console.log("WorkData from Supabase:", data);
      return data;
    },
  });

  console.log("Rendering with WorkData:", WorkData);

  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="relative w-full overflow-x-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] w-full flex items-center justify-center py-20">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl px-8 text-center space-y-6">
          <div className="flex flex-col">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                종류/단계별 진행 프로세스
              </h1>
              <p className="text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto">
                우리는 모두가 사랑하는 방식으로 성장합니다.
              </p>
            </div>
            <p className="text-md font-light text-gray-600 max-w-3xl mx-auto mt-8">
              당사는 「네이버 플레이스 정책 규정」, 「의료광고 사전심의 기준」,
              「화장품 표시·광고에 관한 법률」 및 관련 법을 준수하며
            </p>
            <p className="text-md font-light text-gray-600 max-w-3xl mx-auto">
              당사 귀책으로 심의 기준을 위반한 사항이 발생할 시, 책임 있는
              태도로 즉각적인 수정 및 조치를 진행할 것을 약속드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* Work Cards Section */}
      <section className="relative w-full py-10">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 gap-8">
            {WorkData?.map((work, index) => (
              <div
                key={work.id}
                onClick={() => router.push(`/work/${work.id}`)}
              >
                <a className="group block bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg border border-gray-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                  <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {work.title}
                    </h2>
                    <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed">
                      {work.content}
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
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="relative z-10 w-full max-w-4xl mx-auto px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-relaxed">
            함께 성장할 준비가 되셨나요?
          </h2>
          <p className="text-xl md:text-2xl font-light text-gray-600">
            지금 바로 프로젝트를 시작하세요
          </p>

          <div className="pt-8">
            <Link
              href="/inquiry"
              className="inline-block px-12 py-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xl font-medium rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              문의하기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
