"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HdAcronym } from "@/components/HdAcronym";

gsap.registerPlugin(ScrollTrigger);

const fiveTItems = [
  { label: "Trend", description: "트렌드" },
  { label: "Tech", description: "기술" },
  { label: "Tactics", description: "전략" },
  { label: "Target", description: "목표" },
  { label: "Talk", description: "소통" },
];

export default function CompanyPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const openingQuoteRef = useRef<HTMLDivElement>(null);
  const openingSubQuoteRef = useRef<HTMLDivElement>(null);
  const mainTitleRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const para1Ref = useRef<HTMLDivElement>(null);
  const para2Ref = useRef<HTMLDivElement>(null);
  const para3Ref = useRef<HTMLDivElement>(null);
  const para4Ref = useRef<HTMLDivElement>(null);
  const para5Ref = useRef<HTMLDivElement>(null);
  const para6Ref = useRef<HTMLDivElement>(null);
  const para7Ref = useRef<HTMLDivElement>(null);
  const diamondSectionRef = useRef<HTMLDivElement>(null);
  const fiveTSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      const heroTimeline = gsap.timeline();

      heroTimeline
        .fromTo(
          openingQuoteRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
          0
        )
        .fromTo(
          openingSubQuoteRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.0, ease: "power2.out" },
          0.5
        )
        .fromTo(
          mainTitleRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.2)" },
          1.2
        );

      // Section 1 scroll trigger
      gsap.fromTo(
        section1Ref.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section1Ref.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

      // Section 1 paragraph animations
      const section1Timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top 60%",
          end: "bottom bottom",
          toggleActions: "play none none none",
        },
      });

      const paragraphRefs = [
        para1Ref,
        para2Ref,
        para3Ref,
        para4Ref,
        para5Ref,
        para6Ref,
        para7Ref,
      ];

      paragraphRefs.forEach((ref, index) => {
        section1Timeline.fromTo(
          ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          index * 0.2
        );
      });

      // Diamond section animation
      gsap.fromTo(
        diamondSectionRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: diamondSectionRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

      // 5T section animation
      gsap.fromTo(
        fiveTSectionRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: fiveTSectionRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative w-full overflow-x-hidden bg-black">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen w-full flex flex-col"
      >
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center mt-24">
            <div>
              <h4 className="text-[#7CB342] text-md block mb-4 tracking-widest ml-1">
                ABOUT US
              </h4>
              <h2 className="text-4xl md:text-6xl text-white mb-2">
                성장을 만드는
              </h2>
              <h2 className="text-4xl md:text-6xl text-[#7CB342] mb-8">
                마케팅 파트너
              </h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                "High & Dynamics는 브랜드의 잠재력을 발견하고 극대화하는 마케팅
                에이전시입니다. 데이터 기반의 전략적 사고와 창의적인 실행력으로
                고객사의 비즈니스 목표 달성을 돕습니다."
              </p>
              <div className="flex flex-col space-y-4 mb-12">
                <div className="flex items-center gap-4 group opacity-100 transform-none">
                  <div className="w-2 h-2 bg-[#7CB342] rounded-full group-hover:scale-150 transition-transform" />
                  <span className="text-white/80 group-hover:text-white transition-colors">
                    데이터 기반 의사결정으로 ROI 극대화
                  </span>
                </div>
                <div className="flex items-center gap-4 group opacity-100 transform-none">
                  <div className="w-2 h-2 bg-[#7CB342] rounded-full group-hover:scale-150 transition-transform" />
                  <span className="text-white/80 group-hover:text-white transition-colors">
                    통합 마케팅 솔루션으로 시너지 창출
                  </span>
                </div>
                <div className="flex items-center gap-4 group opacity-100 transform-none">
                  <div className="w-2 h-2 bg-[#7CB342] rounded-full group-hover:scale-150 transition-transform" />
                  <span className="text-white/80 group-hover:text-white transition-colors">
                    각 분야 전문가들의 협업으로 최상의 결과 도출
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative opacity-100 transform-none">
                <div className="relative rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                    alt="TEAM"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-graident-to-br from-[#1A3A5C] to-[#0D1F33] p-6 rounded-2xl border border-white/5 relative overflow-hidden group cursor-pointer opacity-100 transform-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7CB342]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
                      className="lucide lucide-target text-[#7cb342] mb-3"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                    <div className="text-3xl text-white mb-1">200+</div>
                    <div className="text-white/50 text-sm">성공 프로젝트</div>
                  </div>
                  <div className="bg-graident-to-br from-[#1A3A5C] to-[#0D1F33] p-6 rounded-2xl border border-white/5 relative overflow-hidden group cursor-pointer opacity-100 transform-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7CB342]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
                      className="lucide lucide-target text-[#7cb342] mb-3"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                    <div className="text-3xl text-white mb-1">150+</div>
                    <div className="text-white/50 text-sm">파트너 기업</div>
                  </div>
                  <div className="bg-graident-to-br from-[#1A3A5C] to-[#0D1F33] p-6 rounded-2xl border border-white/5 relative overflow-hidden group cursor-pointer opacity-100 transform-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7CB342]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
                      className="lucide lucide-target text-[#7cb342] mb-3"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                    <div className="text-3xl text-white mb-1">98%</div>
                    <div className="text-white/50 text-sm">고객 만족도</div>
                  </div>
                  <div className="bg-graident-to-br from-[#1A3A5C] to-[#0D1F33] p-6 rounded-2xl border border-white/5 relative overflow-hidden group cursor-pointer opacity-100 transform-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7CB342]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
                      className="lucide lucide-target text-[#7cb342] mb-3"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                    <div className="text-3xl text-white mb-1">10년+</div>
                    <div className="text-white/50 text-sm">평균 경력</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative min-h-screen w-full flex items-center justify-center py-20">
        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl px-8 space-y-8">
          <div ref={para1Ref} className="opacity-0">
            <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-700 leading-relaxed">
              HD컴퍼니의 시작은
            </p>
          </div>

          <div ref={para2Ref} className="opacity-0">
            <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-700 leading-relaxed">
              성장하는 과정에 있어 서로의 이야기를 듣고,
            </p>
          </div>

          <div ref={para3Ref} className="opacity-0">
            <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-700 leading-relaxed">
              진심으로 공감하며, 정확한 해결 방안을 찾고,
            </p>
          </div>

          <div ref={para4Ref} className="opacity-0">
            <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-700 leading-relaxed">
              그 답을 행동으로 옮기는 것에서부터 출발했습니다.
            </p>
          </div>

          <div ref={para5Ref} className="opacity-0 pt-8">
            <p className="text-xl md:text-2xl lg:text-3xl font-normal text-gray-800 leading-relaxed">
              이어서 소비자의 대한 존중과 가치를 바라며
              <br />
              함께 감에 있어 공존된 성장을 추구하고,
              <br />
              지금 이 순간도 여전히 우리는 성장하고 있습니다.
            </p>
          </div>

          <div ref={para6Ref} className="opacity-0 pt-8">
            <p className="text-xl md:text-2xl lg:text-3xl font-normal text-gray-800 leading-relaxed">
              이렇듯 우리의 문제가 나의 삶, 나의 가족에게
              <br />
              행복을 가져다주기 위해 HD컴퍼니는 존재합니다.
            </p>
          </div>

          <div ref={para7Ref} className="opacity-0 pt-8">
            <p className="text-xl md:text-2xl lg:text-3xl font-normal text-gray-800 leading-relaxed">
              단순한 광고상품과 혜택을 판매하는 것이 아닌,
              <br />
              힘들 때 한번이라도 이겨낼 수 있는 힘을 부여하고,
              <br />
              그럼에도 웃을 수 있는 행복을 제공하는 것이며,
              <br />
              그동안 여러분의 힘들고 우울했던 날들은
              <br />
              <span className="font-bold text-gray-900">
                HD컴퍼니가 구매합니다.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Diamond Section */}
      <section
        ref={diamondSectionRef}
        className="relative min-h-screen w-full flex items-center justify-center py-32"
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-2xl border border-gray-200">
            {/* Diamond Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-45">
                <span className="text-5xl transform -rotate-45">💎</span>
              </div>
            </div>

            {/* Main Message */}
            <div className="text-center space-y-6">
              <p className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-800 leading-relaxed">
                다이아몬드처럼 가장 아름답고 원초적인 가치는
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 leading-relaxed">
                끊임없는 변화 속에서도 마침내 완성된다는 것 입니다.
              </p>
            </div>

            {/* Description */}
            <div className="mt-12 text-center space-y-4">
              <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-700 leading-relaxed">
                이 가치는 HD컴퍼니가 세상의 흐름을 읽게 하고,
              </p>
              <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-700 leading-relaxed">
                빠르게 변하는 세상 속에서 가장 빛나는 방식입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5T Section */}
      <section
        ref={fiveTSectionRef}
        className="relative min-h-screen w-full flex items-center justify-center py-32"
      >
        {/* Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl px-8">
          {/* Title */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              5T
            </h2>
            <p className="text-xl md:text-2xl font-light text-gray-600">
              우리의 핵심 가치
            </p>
          </div>

          {/* 5T Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {fiveTItems.map((item, index) => (
              <div
                key={item.label}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="text-center space-y-4">
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>

                  {/* Label */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {item.label}
                  </h3>

                  {/* Description */}
                  <p className="text-lg md:text-xl font-light text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="text-center mt-20">
            <div className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-1 shadow-2xl">
              <div className="bg-white rounded-3xl px-12 py-8">
                <p className="text-xl md:text-2xl lg:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  우리는 이 가치들로 여러분과 함께 성장합니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="relative w-full py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="relative z-10 w-full max-w-4xl mx-auto px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-relaxed">
            HD컴퍼니와 함께
            <br />
            새로운 내일을 만들어가세요
          </h2>
          <p className="text-xl md:text-2xl font-light text-gray-600">
            여러분의 성공이 우리의 목표입니다
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <a
              href="/inquiry"
              className="inline-block px-12 py-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xl font-medium rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              지금 시작하기
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
