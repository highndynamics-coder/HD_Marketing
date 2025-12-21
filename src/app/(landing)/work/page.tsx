"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SquareChevronDown, SquareChevronUp } from "lucide-react";
import { useResponsive } from "@/lib/useResponsive";

gsap.registerPlugin(ScrollTrigger);

export default function WorkPage() {
  const router = useRouter();
  const imageList = [
    "/images/SelfWork.png",
    "/images/OnlineCommerce.png",
    "/images/Influencer.png",
  ];

  const { isMobile, isTablet } = useResponsive();

  const [selectedWork, setSelectedWork] = useState<any | null>(null);
  const { data: WorkData, isLoading } = useQuery<any[]>({
    queryKey: ["work"],
    queryFn: async () => {
      const { data, error } = await supabase.from("process").select("*");

      if (error) throw error;
      console.log("WorkData from Supabase:", data);
      setSelectedWork({ ...data[0], image: imageList[0] });
      return data;
    },
  });

  const [expandedProcessIndex, setExpandedProcessIndex] = useState<
    number | null
  >(null);

  if (isLoading) return <div>Loading...</div>;

  if (isMobile || isTablet) {
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

            <h1 className="text-3xl font-medium text-white mb-6">
              업종별 맞춤 <span className="text-[#7CB342]">전략</span>
            </h1>
            <p className="text-md font-light text-white max-w-3xl mx-auto">
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
        <section className="relative w-full">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
            <div className="flex flex-col gap-6 mb-16 max-w-6xl mx-auto opacity-100 transform-none">
              {WorkData?.sort((a, b) => a.id - b.id).map((work, index) => {
                const workIndex = index;
                const isSelected = selectedWork?.title === work.title;

                const colorList = ["[#FF6F0F]", "[#7CB342]", "[#0066CC]"];

                const borderColorList = [
                  "border-[#FF6F0F]",
                  "border-[#7CB342]",
                  "border-[#0066CC]",
                ];

                const imageList = [
                  "/images/SelfWork.png",
                  "/images/OnlineCommerce.png",
                  "/images/Professional.png",
                ];

                return (
                  <div
                    key={work.id || index}
                    className="flex flex-col w-full"
                    onClick={() => {
                      if (isSelected) {
                        setSelectedWork(null);
                        setExpandedProcessIndex(null);
                      } else {
                        setSelectedWork({
                          ...work,
                          image: imageList[workIndex],
                        });
                        setExpandedProcessIndex(null);
                      }
                    }}
                  >
                    <button
                      className={clsx(
                        "relative w-full h-full p-8 rounded-3xl backdrop-blur-xl transition-all overflow-hidden",
                        isSelected
                          ? `border-${colorList[workIndex]} border-2 shadow-[0_8px_32px_rgba(0,0,0,0.3)]`
                          : "border-white border"
                      )}
                    >
                      <div
                        className={clsx(
                          "relative w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center transform-none",
                          {
                            "w-32 h-32": workIndex === 0 || workIndex === 2,
                            "w-24 h-24": workIndex === 1,
                          }
                        )}
                      >
                        <Image
                          src={imageList[workIndex]}
                          alt="Work Image"
                          width={700}
                          height={700}
                          priority
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="relative">
                        <h2 className="text-xl lg:text-2xl mb-2 transition-colors duration-300 text-white/80 group-hover:text-white">
                          {work.title}
                        </h2>
                        <p className="text-sm text-white/50 mb-4">
                          {work.sub_title}
                        </p>
                      </div>
                    </button>

                    {/* Accordion Detail Section */}
                    {isSelected && (
                      <div
                        className="mt-4 flex flex-col gap-6 transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* Work Image & Description */}
                        <div className="relative rounded-3xl group opacity-100 transform-none min-h-80">
                          <div className="aspect-[21/9] relative">
                            <Image
                              src={selectedWork?.image}
                              alt="Work Image"
                              width={700}
                              height={700}
                              priority
                              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 top-2/3 transform-y-1/2 items-center justify-center text-center">
                              <div className="flex gap-2 opacity-100 transform-none text-center">
                                <div className="w-20 h-20 rounded-2xl bg-graident-to-br from-[#7CB342] to-[#6A9C37] flex items-center justify-center group-hover:scale-110 transition-transform"></div>
                              </div>
                              <div className="flex-1">
                                <h2 className="text-xl text-white mb-4">
                                  {selectedWork?.title}
                                </h2>
                                <p className="text-md text-white/80 mb-6">
                                  {selectedWork?.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Process Section */}
                        <div className="relative rounded-3xl overflow-hidden group opacity-100 transform-none">
                          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-12 opacity-100 transform-none">
                            <div className="text-center mb-8">
                              <h3 className="text-xl text-white mb-4">
                                진행 프로세스
                              </h3>
                              <p className="text-lg text-white/60">
                                체계적인 5단계 프로세스로 확실한 성과를
                                만들어냅니다
                              </p>
                            </div>

                            <div className="flex flex-col space-y-4">
                              {selectedWork?.process.map(
                                (p: any, idx: number) => {
                                  const { title, description, content } = p;
                                  const isExpanded =
                                    expandedProcessIndex === idx;

                                  return (
                                    <div key={idx}>
                                      <button
                                        className="w-full text-left"
                                        onClick={() => {
                                          setExpandedProcessIndex(
                                            isExpanded ? null : idx
                                          );
                                        }}
                                      >
                                        <div className="relative p-6 lg:p-8 rounded-3xl border backdrop-blur-xl transition-all duration-500 oveflow-y-auto bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:from-white/15 hover:to-white/10 hover:border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                                          <div className="absolute inset-0 bg-graident-to-r from-transparent via-white/10 to-transparent rounded-3xl pointer-events-none" />
                                          <div className="relative flex items-center gap-4">
                                            <div className="flex flex-col items-center gap-4">
                                              <div className="flex flex-row items-center w-full">
                                                <div className="relative w-6 h-6 rounded-2xl flex items-center justify-start flex-shrink-0 transition-all duration-500 bg-graident-to-br from-white/20 to-white/10 group-hover/card:from-white/25 group-hover/card:to-white/15">
                                                  <span className="relative text-base transition-all duration-300 text-white/90">
                                                    {idx + 1}
                                                  </span>
                                                </div>
                                                <h4 className="text-md transition-all duration-300 text-white/90 group-hover/card:text-white">
                                                  {title}
                                                </h4>
                                              </div>

                                              <div className="flex-1 mb-8">
                                                <p className="text-md text-white/70 group-hover/card:text-white/80 transition-colors">
                                                  {description}
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="absolute bottom-2 right-3">
                                            <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300">
                                              <span className="text-white/80 text-lg lg:text-xl font-medium">
                                                {isExpanded ? (
                                                  <SquareChevronUp className="w-6 h-6 transition-transform duration-300 bg-transparent" />
                                                ) : (
                                                  <SquareChevronDown className="w-6 h-6 transition-transform duration-300" />
                                                )}
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </button>

                                      {/* Process Accordion Content */}
                                      <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                          isExpanded
                                            ? "max-h-[1000px] opacity-100 mt-4"
                                            : "max-h-0 opacity-0"
                                        }`}
                                      >
                                        <div className="p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl">
                                          <div className="space-y-3">
                                            {Array.isArray(content) &&
                                              content.map(
                                                (
                                                  contentItem:
                                                    | string
                                                    | string[],
                                                  itemIdx: number
                                                ) => {
                                                  if (
                                                    typeof contentItem ===
                                                    "string"
                                                  ) {
                                                    return (
                                                      <div
                                                        key={itemIdx}
                                                        className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-gradient-to-r before:from-[#7CB342] before:to-[#6A9C37]"
                                                      >
                                                        <p className="text-base lg:text-lg text-white/80 leading-relaxed">
                                                          {contentItem}
                                                        </p>
                                                      </div>
                                                    );
                                                  } else if (
                                                    typeof contentItem !==
                                                    "string"
                                                  ) {
                                                    return (
                                                      <div
                                                        key={itemIdx}
                                                        className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-gradient-to-r before:from-[#7CB342] before:to-[#6A9C37]"
                                                      >
                                                        {contentItem.map(
                                                          (
                                                            subItem: string,
                                                            subIdx: number
                                                          ) => {
                                                            return (
                                                              <div key={subIdx}>
                                                                <p className="text-base lg:text-lg text-white/80 leading-relaxed">
                                                                  {subItem}
                                                                </p>
                                                              </div>
                                                            );
                                                          }
                                                        )}
                                                      </div>
                                                    );
                                                  }
                                                }
                                              )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="text-center opacity-100 transform-none">
              <div className="relative inline-block">
                <button
                  className="relative px-16 py-6 bg-gradient-to-r from-[#001A4D] via-[#003D7A] to-[#0066CC] text-white rounded-full text-xl hover:shadow-2xl transition-all flex items-center gap-4 mx-auto group overflow-hidden"
                  onClick={() => router.push("/inquiry")}
                >
                  <span className="relative z-10">무료 상담 신청하기</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

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
              const workIndex = index;
              const isSelected = selectedWork?.title === work.title;

              const colorList = ["[#FF6F0F]", "[#7CB342]", "[#0066CC]"];

              const borderColorList = [
                "border-[#FF6F0F]",
                "border-[#7CB342]",
                "border-[#0066CC]",
              ];

              const imageList = [
                "/images/SelfWork.png",
                "/images/OnlineCommerce.png",
                "/images/Professional.png",
              ];

              console.log("colorList", colorList[workIndex]);

              return (
                <div
                  key={work.id || index}
                  onClick={() => {
                    setSelectedWork({ ...work, image: imageList[workIndex] });
                  }}
                >
                  <button
                    className={clsx(
                      "relative w-full h-full p-8 rounded-3xl backdrop-blur-xl transition-all overflow-hidden hover:scale-110",
                      isSelected
                        ? `border-${colorList[workIndex]} border-2 shadow-[0_8px_32px_rgba(0,0,0,0.3)]`
                        : "border-white border"
                    )}
                  >
                    <div
                      className={clsx(
                        "relative w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center transform-none",
                        {
                          "w-32 h-32": workIndex === 0 || workIndex === 2,
                          "w-24 h-24": workIndex === 1,
                        }
                      )}
                    >
                      <Image
                        src={imageList[workIndex]}
                        alt="Work Image"
                        width={700}
                        height={700}
                        priority
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
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
            <div className="max-w-6xl mx-auto opacity-100 transform-none -mt-20 mb-24">
              <div className="relative rounded-3xl group opacity-100 transform-none">
                <div className="aspect-[21/9] relative">
                  <Image
                    src={selectedWork?.image}
                    alt="Work Image"
                    width={700}
                    height={700}
                    priority
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 top-2/3 transform-y-1/2 items-center justify-center p-8 lg:p-12 text-center">
                    <div className="flex gap-6 opacity-100 transform-none text-center">
                      <div className="w-20 h-20 rounded-2xl bg-graident-to-br from-[#7CB342] to-[#6A9C37] flex items-center justify-center group-hover:scale-110 transition-transform"></div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-4xl lg:text-5xl text-white mb-4">
                        {selectedWork?.title}
                      </h2>
                      <p className="text-xl lg:text-2xl text-white/80 mb-6">
                        {selectedWork?.description}
                      </p>
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
                      const isExpanded = expandedProcessIndex === idx;

                      return (
                        <div key={idx}>
                          <button
                            className="w-full text-left"
                            onClick={() => {
                              setExpandedProcessIndex(isExpanded ? null : idx);
                            }}
                          >
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
                                      {isExpanded ? (
                                        <SquareChevronUp className="w-6 h-6 transition-transform duration-300" />
                                      ) : (
                                        <SquareChevronDown className="w-6 h-6 transition-transform duration-300" />
                                      )}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </button>

                          {/* Accordion Content */}
                          <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                              isExpanded
                                ? "max-h-[1000px] opacity-100 mt-4"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl">
                              <div className="space-y-3">
                                {Array.isArray(content) &&
                                  content.map(
                                    (
                                      item: string | string[],
                                      itemIdx: number
                                    ) => {
                                      if (typeof item === "string") {
                                        return (
                                          <div
                                            key={itemIdx}
                                            className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-gradient-to-r before:from-[#7CB342] before:to-[#6A9C37]"
                                          >
                                            <p className="text-base lg:text-lg text-white/80 leading-relaxed">
                                              {item}
                                            </p>
                                          </div>
                                        );
                                      } else if (typeof item !== "string") {
                                        return (
                                          <div
                                            key={itemIdx}
                                            className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-gradient-to-r before:from-[#7CB342] before:to-[#6A9C37]"
                                          >
                                            {item.map(
                                              (
                                                item: string,
                                                itemIdx: number
                                              ) => {
                                                return (
                                                  <div key={itemIdx}>
                                                    <p className="text-base lg:text-lg text-white/80 leading-relaxed">
                                                      {item}
                                                    </p>
                                                  </div>
                                                );
                                              }
                                            )}
                                          </div>
                                        );
                                      }
                                    }
                                  )}
                              </div>
                            </div>
                          </div>
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
              <button
                className="relative px-16 py-6 bg-gradient-to-r from-[#001A4D] via-[#003D7A] to-[#0066CC] text-white rounded-full text-xl hover:shadow-2xl transition-all flex items-center gap-4 mx-auto group overflow-hidden"
                onClick={() => router.push("/inquiry")}
              >
                <span className="relative z-10">무료 상담 신청하기</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
