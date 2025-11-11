"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface WorkItem {
  id: number;
  title: string;
  description: string;
  category: string;
  imageGradient: string;
  slug: string;
}

const workItems: WorkItem[] = [
  {
    id: 1,
    title: "브랜드 전략 컨설팅",
    description:
      "데이터 기반의 체계적인 브랜드 전략 수립과 시장 분석을 통해 성공적인 브랜드를 구축합니다.",
    category: "Strategy",
    imageGradient: "from-blue-500 to-purple-600",
    slug: "brand-strategy",
  },
  {
    id: 2,
    title: "디지털 마케팅",
    description:
      "SNS, 검색광고, 콘텐츠 마케팅 등 다양한 디지털 채널을 활용한 통합 마케팅 솔루션을 제공합니다.",
    category: "Marketing",
    imageGradient: "from-purple-500 to-pink-600",
    slug: "digital-marketing",
  },
  {
    id: 3,
    title: "크리에이티브 제작",
    description:
      "브랜드의 가치를 효과적으로 전달하는 차별화된 크리에이티브 콘텐츠를 제작합니다.",
    category: "Creative",
    imageGradient: "from-pink-500 to-orange-600",
    slug: "creative-production",
  },
];

export default function WorkPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
      );

      // Cards animation
      gsap.fromTo(
        ".work-card",
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative w-full overflow-x-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] w-full flex items-center justify-center py-20"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl px-8 text-center space-y-6">
          <div ref={titleRef} className="opacity-0 flex flex-col">
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
        <div
          ref={cardsRef}
          className="relative z-10 w-full max-w-7xl mx-auto px-8"
        >
          <div className="grid grid-cols-1 gap-8">
            {workItems.map((item) => (
              <Link
                key={item.id}
                href={`/work/${item.slug}`}
                className="work-card group opacity-0"
              >
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-row">
                  <div className="p-8 space-y-4">
                    <div className="inline-block">
                      <span className="px-4 py-1.5 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 text-sm font-medium rounded-full">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {item.title}
                    </h3>

                    <p className="text-base text-gray-600 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-4 flex items-center text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
                      <span className="text-sm font-medium mr-2">
                        자세히 보기
                      </span>
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
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
