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
      {/* Section 1: Our Solution */}
      <section className="relative z-10 min-h-screen flex">
        <div className="w-full lg:w-2/5 flex flex-col justify-center p-8 lg:p-16 border-r border-white/5">
          <div className="mb-12 opacity-100 transform-none">
            <h4 className="text-[#7CB342] text-md block mb-4 tracking-widest ml-6">
              OUR SOLUTION
            </h4>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6 opacity-100 transform-none">
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
