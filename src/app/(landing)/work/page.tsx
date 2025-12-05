"use client";

import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WorkPage() {
  const { data: WorkData, isLoading } = useQuery<any[]>({
    queryKey: ["work"],
    queryFn: async () => {
      const { data, error } = await supabase.from("process").select("*");

      if (error) throw error;
      console.log("WorkData from Supabase:", data);
      return data;
    },
  });

  const [selectedWork, setSelectedWork] = useState<any | null>(null);

  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="relative min-h-screen overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-[#001A4D] via-[#001529] to-[#000000]" />

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
            {WorkData?.sort((a, b) => a.id - b.id).map((work, index) => {
              const isSelected = selectedWork?.title === work.title;

              return (
                <div
                  key={work.id || index}
                  onClick={() => {
                    setSelectedWork(work);
                  }}
                >
                  <button className="relative w-full h-full p-8 rounded-3xl border backdrop-blur-xl transition-all duration-500 oveflow-hidden bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20">
                    {isSelected && (
                      <div className="absolute top-4 right-4 w-24 flex items-center justify-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 opacity-100 transform-none">
                        <div className="flex flex-row items-center gap-1.5">
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
                          <span className="text-sm text-white/80">Active</span>
                        </div>
                      </div>
                    )}
                    <div className="relative w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-white/10 group-hover:bg-white/15 transform-none"></div>
                    <div className="relative">
                      <h2 className="text-xl lg:text-2xl mb-2 transition-colors duration-300 text-white/80 group-hover:text-white">
                        {work.title}
                      </h2>
                      <p className="text-sm text-white/50 mb-4">
                        {work.sub_title}
                      </p>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
          {selectedWork && (
            <div className="max-w-6xl mx-auto opacity-100 transform-none">
              <div className="relative rounded-3xl overflow-hidden mb-12 group opacity-100 transform-none">
                <div className="aspect-[21/9] relative">
                  <img
                    src="https://images.unsplash.com/photo-1758887261865-a2b89c0f7ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwcmVzdGF1cmFudCUyMG93bmVyfGVufDF8fHx8MTc2NDQ3MDkwMHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Work Image"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  <div className="absolute inset-0 bg-graident-to-r from-transparent via-white/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                    <div className="flex items-start gap-6 opacity-100 transform-none mt-36">
                      <div className="w-20 h-20 rounded-2xl bg-graident-to-br from-[#7CB342] to-[#6A9C37] flex items-center justify-center group-hover:scale-110 transition-transform"></div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-4xl lg:text-5xl text-white mb-4">
                        {selectedWork?.title}
                      </h2>
                      <p className="text-xl lg:text-2xl text-white/80 mb-6">
                        {selectedWork?.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <div className="px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center gap-2 opacity-100 transform-none">
                          A
                        </div>
                        <div className="px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center gap-2 opacity-100 transform-none">
                          B
                        </div>
                        <div className="px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center gap-2 opacity-100 transform-none">
                          C
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {selectedWork && (
            <div className="max-w-6xl mx-auto opacity-100 transform-none">
              <div className="relative rounded-3xl overflow-hidden mb-12 group opacity-100 transform-none">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-12 mb-12 opacity-100 transform-none">
                  <div className="text-center mb-12">
                    <h3 className="text-3xl lg:text-4xl text-white mb-4">
                      진행 프로세스
                    </h3>
                    <p className="text-lg text-white/60">
                      체계적인 5단계 프로세스로 확실한 성과를 만들어냅니다
                    </p>
                  </div>

                  <div className="flex flex-col space-y-4">
                    {selectedWork?.process.map((p: any, idx: number) => {
                      const { title, description, content } = p;
                      return (
                        <div key={idx}>
                          <button className="w-full text-left">
                            <div className="relative p-6 lg:p-8 rounded-3xl border backdrop-blur-xl transition-all duration-500 oveflow-hidden bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:from-white/15 hover:to-white/10 hover:border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                              <div
                                className="absolute inset-0 bg-graident-to-r from-transparent via-white/10 to-transparent rounded-3xl pointer-events-none"
                                style={{}}
                              />
                              {/* <div /> */}
                              <div className="relative flex items-center justify-between gap-4 lg:gap-6">
                                <div className="flex items-center gap-4 lg:gap-6 flex-1">
                                  <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 bg-graident-to-br from-white/20 to-white/10 group-hover/card:from-white/25 group-hover/card:to-white/15">
                                    <span className="relative text-2xl lg:text-3xl transition-all duration-300 text-white/90">
                                      {idx + 1}
                                    </span>
                                    <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-white/40 transition-opacity opacity-0" />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="text-xl lg:text-2xl mb-2 transition-all duration-300 text-white/90 group-hover/card:text-white">
                                      {title}
                                    </h4>
                                    <p className="text-sm lg:text-base text-white/70 group-hover/card:text-white/80 transition-colors">
                                      {description}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex-shrink-0 transform-none">
                                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center transition-all duration-300 bg-white/10 group-hover/card:bg-white/15">
                                    <span className="text-white/80 text-lg lg:text-xl font-medium">
                                      {idx + 1}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="text-center opacity-100 transform-none">
            <div className="relative inline-block">
              <button className="relative px-16 py-6 bg-gradient-to-r from-[#001A4D] via-[#003D7A] to-[#0066CC] text-white rounded-full text-xl hover:shadow-2xl transition-all flex items-center gap-4 mx-auto group overflow-hidden">
                <span className="relative z-10">무료 상담 신청하기</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
