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
    <main className="relative w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-6 lg:px-16 relative z-10 my-32">
        {/* Content */}
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
            <span className="text-[#7CB342] text-sm tracking-wider uppercase">
              Customized Strategy
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-6">
            업종별 맞춤 <span className="text-[#7CB342]">전략</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-white max-w-3xl mx-auto">
            우리는 업종의 특성을 이해하고, 단계별 프로세스로 성과를
            만들어냅니다.
          </p>
        </div>
        <p className="text-md font-light text-gray-600 max-w-3xl mx-auto mt-8">
          당사는 「네이버 플레이스 정책 규정」, 「의료광고 사전심의 기준」,
          「화장품 표시·광고에 관한 법률」 및 관련 법을 준수하며
        </p>
        <p className="text-md font-light text-gray-600 max-w-3xl mx-auto">
          당사 귀책으로 심의 기준을 위반한 사항이 발생할 시, 책임 있는 태도로
          즉각적인 수정 및 조치를 진행할 것을 약속드립니다.
        </p>
      </section>

      {/* Work Cards Section */}
      <section className="relative w-full py-10">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 max-w-6xl mx-auto opacity-100 transform-none">
            {WorkData?.map((work, index) => (
              <div
                key={work.id}
                onClick={() => router.push(`/work/${work.id}`)}
              >
                <button className="group relative opacity-100 transform-cpu min-w-96">
                  <div className="relative h-full p-8 max-w-2xl rounded-3xl border backdrop-blur-xl transition-all duration-500 bg-white/70 border-white/30 shadow-2xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-4">
                      {work.title}
                    </h2>
                    <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed">
                      {work.content}
                    </p>
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
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
