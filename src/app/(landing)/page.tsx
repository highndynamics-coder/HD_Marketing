"use client";

import React, { forwardRef, RefObject, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContactBanner } from "@/components/ContactBanner";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const firstSectionRef = useRef<HTMLDivElement>(null);
  const firstSectionTitleRefs = useRef<HTMLHeadingElement[]>([]);
  const firstSectionCurveRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const section = firstSectionRef.current;
    const titles = firstSectionTitleRefs.current;
    const curve = firstSectionCurveRef.current;

    if (!section || titles.length < 2 || !curve) return;

    const curveLength = curve.getTotalLength();

    gsap.set(curve, {
      strokeDasharray: curveLength,
      strokeDashoffset: curveLength,
      opacity: 0,
    });

    gsap.set(titles, {
      opacity: 0,
      y: 24,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        once: true,
      },
    });

    tl.fromTo(
      section,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      }
    );

    tl.to(titles, {
      opacity: 1,
      y: 0,
      duration: 0.45,
      ease: "power3.out",
      stagger: 0.12,
    });

    tl.to(
      curve,
      {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 0.45,
        ease: "cubic-bezier(.43,1.14,.53,-0.51)",
      },
      "-=0.15"
    );

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    const section = firstSectionRef.current;
    const curve = firstSectionCurveRef.current;

    if (!section || !curve) return;

    gsap.to(curve, {
      y: -260,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "bottom center",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  const secondSectionRef = useRef<HTMLDivElement>(null);
  const secondSectionTextGroupRef = useRef<HTMLDivElement>(null);
  const secondSectionQuestionRef = useRef<HTMLParagraphElement>(null);
  const secondSectionCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textGroup = secondSectionTextGroupRef.current;
    const question = secondSectionQuestionRef.current;
    const cards = secondSectionCardsRef.current;

    if (!textGroup || !question || !cards) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textGroup,
        start: "top 75%",
        once: true,
      },
    });

    tl.fromTo(
      textGroup,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      }
    );

    tl.fromTo(
      question,
      {
        scale: 0.96,
        opacity: 0,
      },
      {
        scale: 1.3,
        opacity: 1,
        duration: 0.45,
        ease: "power2.out",
      },
      "-=0.15"
    );

    const cardElements = cards.children;

    tl.fromTo(
      cardElements,
      {
        y: 24,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.45,
        ease: "power2.out",
        stagger: 0.1,
      },
      "-=0.1"
    );
    gsap.to(cardElements, {
      y: -6,
      duration: 1.8,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: {
        each: 0.2,
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  const isReason = [
    "맛이 없는 거 아니야?",
    "서비스가 별로 아닐까?",
    "인테리어가 문제 아니야?",
  ];

  const isMarketingComponent = [
    "정말 효과가 있을까?",
    "평생 광고비 써야하는거 아니야..?",
    "한다고 정말 달라질까..?",
  ];

  const stories = [
    {
      emoji: "👩‍🍳",
      gradientFrom: "from-pink-400",
      gradientTo: "to-pink-500",
      title: "35세 치킨집 사장님",
      content:
        "장사하면서 눈물 쏙 뺀 날도 많았는데, 요즘은 가족들이랑 웃는 날이 더 많아요!",
    },
    {
      emoji: "☕",
      gradientFrom: "from-blue-400",
      gradientTo: "to-blue-500",
      title: "28세 카페 사장님",
      content:
        "가게 문 닫을까 고민하던 때가 엊그제 같은데, 지금은 매일매일 정신없어요.",
    },
    {
      emoji: "🍜",
      gradientFrom: "from-green-400",
      gradientTo: "to-green-500",
      title: "42세 분식집 사장님",
      content: (
        <>
          부모님에게 걱정만 끼치던 저였는데 이젠 가끔 용돈도 드리네요..ㅋㅎㅋㅎ
          <br />
          정말 작지만 큰 변화라고 생각합니다!
          <br />
          부모님도 응원해주시니 더 힘이 나는 거 같아요!
        </>
      ),
      subContent: "(가게 매출이 올라서 부모님 용돈도 가끔 드립니다..)",
    },
    {
      emoji: "🍕",
      gradientFrom: "from-purple-400",
      gradientTo: "to-purple-500",
      title: "31세 피자집 사장님",
      content: (
        <>
          요즘은 매출 오른 걸 핑계 삼아 장난감 하나씩 사주네요ㅎㅎ
          <br />
          가족도 분위기가 좋아진거 같아서 너무 행복합니다 ㅎㅎ
        </>
      ),
    },
    {
      emoji: "🥘",
      gradientFrom: "from-orange-400",
      gradientTo: "to-orange-500",
      title: "39세 한식당 사장님",
      content:
        "힘들 때마다 가족 생각하면서 버텼는데, 이제는 가족들한테 자랑할 수 있는 가게가 됐어요",
    },
    {
      emoji: "🍰",
      gradientFrom: "from-red-400",
      gradientTo: "to-red-500",
      title: "26세 베이커리 사장님",
      content:
        "작은 가게지만 가족들의 희망이 되어가고 있어요. 대표님 덕에 하루하루 감사하며 일하고 있습니다.",
    },
    {
      emoji: "🍗",
      gradientFrom: "from-yellow-400",
      gradientTo: "to-yellow-500",
      title: "44세 호프집 사장님",
      content:
        "아직 완벽하진 않지만, 그래도 매출 걱정에 밤새던 일은 없어졌어요. 조금씩 좋아지고 있다는 게 느껴집니다.",
    },
  ];

  const BasicCurve = forwardRef<
    SVGPathElement,
    { ref: RefObject<SVGPathElement> }
  >((props, ref) => {
    return (
      <div className="flex flex-row items-center justify-center mt-48">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background wave */}
          <path
            ref={ref}
            d="M0 600 Q300 550 600 580 T1200 600"
            stroke="rgba(124, 179, 66, 0.15)"
            strokeWidth="2"
            fill="none"
          />

          {/* Animated curve */}
          <path
            d="M100 650 C450 -450 700 1400 1100 -300"
            stroke="url(#curveGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            style={{
              strokeDasharray: 2000,
              strokeDashoffset: 2000,
              animation: "draw-curve 0.25s ease-out forwards",
            }}
          />
          <defs>
            <linearGradient
              id="curveGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#7CB342" />
              <stop offset="100%" stopColor="#9DD65D" />
            </linearGradient>
          </defs>

          <style>
            {`@keyframes draw-curve {
              to {
                stroke-dashoffset: 0;
              }
            }`}
          </style>
        </svg>
      </div>
    );
  });

  return (
    <main className="relative w-full overflow-x-hidden bg-graident-to-b from-black/70 via-black/60 to-black">
      <section
        ref={firstSectionRef}
        className="relative min-h-screen w-full flex flex-col items-center justify-center mt-24 bg-gradient-to-br from-[#001A4d] via-[#002D66] to-[#001A33]"
      >
        <div className="relative z-10 container px-6 mx-auto lg:px-12 opacity-100 transform-none">
          <div className="max-w-6xl mx-auto">
            <div className="mb-32 opacity-100 transform-none">
              <div className="relative">
                <div className="h-1 bg-gradient-to-r from-[#7CB342] to-transparent mb-12 w-28" />
                <h2
                  ref={(el) => {
                    if (el) firstSectionTitleRefs.current[0] = el;
                  }}
                  className="text-4xl md:text-6xl lg:text-7xl font-medium text-white/90 mb-6 min-h-[1.2em]"
                >
                  오늘도 버티셨다면,
                </h2>
                <h2
                  ref={(el) => {
                    if (el) firstSectionTitleRefs.current[1] = el;
                  }}
                  className="text-4xl md:text-6xl lg:text-7xl font-medium mb-4 min-h-[1.2em]"
                >
                  <span className="bg-gradient-to-r from-[#7CB342] via-[#9DD65D] to-[#7CB342] bg-clip-text text-transparent">
                    내일은 우리가 함께 합니다.
                  </span>
                </h2>
              </div>
            </div>
            <BasicCurve ref={firstSectionCurveRef} />
          </div>
        </div>
      </section>

      {/* Section 2: 과거부터 현재까지... */}
      <section
        ref={secondSectionRef}
        className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#001A4D] via-[#000000] to-[#001529]"
      >
        <div className="container mx-auto px-6 lg:px-12 py-24">
          <div className="max-w-5xl mx-auto">
            <div
              ref={secondSectionTextGroupRef}
              className="opacity-100 mb-24 flex flex-col gap-4"
            >
              <p className="text-3xl md:text-5xl font-medium text-white/80 leading-relaxed mb-8">
                과거부터 현재까지
              </p>
              <p className="text-3xl md:text-5xl font-medium text-white/80 leading-relaxed mb-8">
                수 많은 자영업자와 소상공인들이 <span>생겨났지만</span>
              </p>
              <p className="text-3xl md:text-5xl font-medium text-white/80 leading-relaxed mb-8">
                반대로 그만큼 많이{" "}
                <span className="realtive z-10 text-red-400">망했습니다.</span>
              </p>
            </div>

            <p
              ref={secondSectionQuestionRef}
              className="text-3xl md:text-4xl lg:text-5xl font-normal text-white text-center leading-relaxed"
            >
              이유가 뭘까요?
            </p>

            <div
              className="flex flex-row items-center justify-center gap-6 my-16"
              ref={secondSectionCardsRef}
            >
              {isReason.map((reason, index) => (
                <div
                  className="relative bg-white rounded-3xl px-6 py-4 shadow-lg border border-gray-200 max-w-xs mb-8"
                  key={index}
                >
                  <h4 className="text-base md:text-lg font-light text-gray-700 text-center">
                    {reason}
                  </h4>
                  <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white border-b border-r border-gray-200 transform rotate-45"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Q&A - Chat Style */}
      <section className="flex flex-col space-y-16 opacity-100 container mx-auto">
        {/* Question - 사장님들 (Left) */}
        <div className="flex items-start gap-4 text-black">
          <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center shadow-lg ">
            <span className="text-2xl">👨‍👩‍👦</span>
          </div>
          <div className="flex-1 max-w-xl">
            <div className="bg-white rounded-3xl rounded-tl-none px-6 py-4 shadow-md border border-gray-200">
              <p className="text-2xl md:text-3xl font-normal text-gray-800 leading-relaxed">
                대표님! 저희 가게는 왜 사람이 안 올까요?
              </p>
            </div>
          </div>
        </div>

        {/* Final Answer - HD (Right) */}
        <div>
          <div className="flex items-start gap-4 justify-end">
            <div className="flex-1 max-w-3xl flex flex-col gap-4">
              <div className="bg-gradient-to-br from-[#1A3A5C]/20 to-[#7CB342]/10 rounded-3xl p-12 border border-[#7CB342]/20 opacity-100 transform-none flex flex-col gap-4">
                <h2 className="text-2xl font-semibold text-white">
                  잘 모르겠습니다..
                </h2>
              </div>
              <div className="bg-gradient-to-br from-[#1A3A5C]/20 to-[#7CB342]/10 rounded-3xl p-12 border border-[#7CB342]/20 opacity-100 transform-none flex flex-col gap-4">
                <h2 className="text-2xl font-semibold text-white">
                  정말 몰라서 못 옵니다.
                </h2>
              </div>
              <div className="bg-gradient-to-br from-[#1A3A5C]/20 to-[#7CB342]/10 rounded-3xl p-12 border border-[#7CB342]/20 opacity-100 transform-none flex flex-col gap-4">
                <p className="text-xl md:text-2xl font-normal text-white/80 leading-relaxed">
                  현시점 모든 가게와 스토어의 제품은 상향 평준화 됐지만 그만큼
                  종사자가 너무 많아졌고 인터넷의 발달로 잘 되는 업체들이 더
                  잘될 수 밖에 없습니다.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center shadow-lg">
              <span className="text-2xl">👨‍💼</span>
            </div>
          </div>
        </div>

        <div className="opacity-100 transform-none text-center">
          <div className="flex flex-col gap-8 my-16">
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl p-8 border border-white/5 opacity-100 transform-none">
              <p className="text-lg text-white">
                내 가게를 찾고, 기억하게 하기 위해서
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl p-8 border border-white/5 opacity-100 transform-none">
              <p className="text-lg text-white">
                우리 가게만의 특별한 점을 어필하기 위해서
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl p-8 border border-white/5 opacity-100 transform-none">
              <p className="text-lg text-white">
                손님이 뜸한 시기에도 안정적인 매출을 유지하고,
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl p-8 border border-white/5 opacity-100 transform-none">
              <p className="text-lg text-white">위기에 대비하기 위해서</p>
            </div>
          </div>
        </div>

        <div className="opacity-100 transform-none mt-8 flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-7xl mb-6">
            <span className="text-white">마케팅은</span>
            <span className="text-[#7CB342] ml-2 mr-2">필수</span>
            <span className="text-white">입니다.</span>
          </h2>
        </div>
      </section>

      {/* Section 4: Marketing Message */}
      <section className="relative w-full flex items-center justify-center">
        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl px-8 space-y-16">
          {/* Final provocative question */}
          <div className="opacity-0 text-center py-16">
            <div className="rounded-3xl px-12 md:px-16 py-12 md:py-16 shadow-lg border border-gray-200">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-loose">
                정말 사장님 가게가
                <br />
                맛이 없어서
                <br />
                손님이 없는 걸까요?
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: 5T Timeline */}
      <section className="container mx-auto px-6 lg:px-12">
        <p className="text-3xl md:text-4xl lg:text-5xl font-normal text-white text-center leading-relaxed">
          그럼 마케팅이란 무엇일까요?
        </p>

        <div className="flex flex-row items-center justify-center gap-6 my-12">
          {isMarketingComponent.map((reason, index) => (
            <div
              className="relative bg-white rounded-3xl px-6 py-4 shadow-lg border border-gray-200 max-w-xs mb-8"
              key={index}
            >
              <h4 className="text-base md:text-lg font-light text-gray-700 text-center">
                {reason}
              </h4>
              <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white border-b border-r border-gray-200 transform rotate-45"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Marketing definition - emphasized */}
      <div className="text-center space-y-6 py-12 bg-gradient-to-br from-[#1A3A5C]/40 to-[#0A0A0A]/40 backdrop-blur-sm rounded-3xl p-12 md:p-16 border border-[#7CB342]/30 mt-16 container mx-auto px-6 lg:px-12">
        <div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight text-white">
            마케팅,
          </h2>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white">
            <span className="text-[#7CB342]">매출 성장의 원동력</span>이 되어야
            합니다.
          </h3>
        </div>
      </div>

      {/* Section 6: Success Stories */}
      <section className="relative min-h-screen w-full flex items-center justify-center py-20">
        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl px-8 space-y-16">
          {/* Title */}
          <div className="opacity-0 text-center">
            <p className="text-white/40 text-sm tracking-[0.3em] mb-6">
              OUR STORY
            </p>
            <p className="text-4xl md:text-6xl text-white mb-6">
              <span className="text-white/60">(</span>
              <span className="text-white">우리의 이야기입니다</span>
              <span className="text-white/60">)</span>
            </p>
          </div>

          {/* Stories Grid - Unified height with floating effect */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
            {stories.map((story, index) => (
              <div key={index} className={`opacity-0 float-${index + 1}`}>
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-3xl p-8 border border-white/5 hover:border-[#7CB342]/30 transition-all duration-500 h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7CB342]/0 to-[#7CB342]/0 group-hover:from-[#7CB342]/5 group-hover:to-[#7CB342]/10 rounded-3xl transition-all duration-500" />
                  <div className="flex flex-col">
                    <span className="text-6xl mb-6">{story.emoji}</span>
                    <p className="mb-6 text-white/60">{story.title}</p>
                  </div>
                  <div className="flex-1 overflow-y-auto scrollbar-hidden">
                    <blockquote className="text-lg text-white/80 leading-relaxed">
                      {story.content}
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Success statement */}
          <div className="opacity-100 text-center py-16">
            <div className="text-4xl md:text-6xl text-white flex flex-col gap-4">
              <span className="text-white">실제로 많은 사장님들의</span>
              <span className="text-[#7CB342]">성공을 도왔습니다</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: CEO Introduction */}
      <section className="relative min-h-screen w-full flex items-center justify-center py-32">
        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Founder"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <div className="text-5xl mb-4">👤</div>
                <div className="text-white text-sm mb-2">
                  종합광고대행사 HD 컴퍼니
                </div>
                <div className="text-2xl text-white font-medium mb-4">
                  대표 홍도현
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-8 opacity-100 transform-none">
              <h3 className="text-3xl md:text-5xl text-white mb-8 leading-tight">
                반갑습니다.
              </h3>
              <div className="space-y-3 hidden">
                {/* Cert 1 */}
                <div className="flex items-center gap-4 group opacity-100 transform-none">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7CB342] to-[#6A9C37] flex items-center justify-center group-hover:scale-110 transition-transform">
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
                      className="lucide lucide-circle-check text-white"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <span className="text-xl text-white group-hover:text-white transition-colors">
                    검색광고 마케터 1급
                  </span>
                </div>

                {/* Cert 2 */}
                <div className="flex items-center gap-4 group opacity-100 transform-none">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7CB342] to-[#6A9C37] flex items-center justify-center group-hover:scale-110 transition-transform">
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
                      className="lucide lucide-circle-check text-white"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <span className="text-xl text-white group-hover:text-white transition-colors">
                    SNS광고마케터 1급
                  </span>
                </div>

                {/* Cert 3 */}
                <div className="flex items-center gap-4 group opacity-100 transform-none">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7CB342] to-[#6A9C37] flex items-center justify-center group-hover:scale-110 transition-transform">
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
                      className="lucide lucide-circle-check text-white"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <span className="text-xl text-white group-hover:text-white transition-colors">
                    마케팅 대행 250+
                  </span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#1A3A5C]/50 to-[#7CB342]/10 rounded-2xl p-8 border border-[#&CB342]/20 opacity-100 transform-none">
                <p className="text-lg text-white leading-relaxed italic">
                  수많은 소상공인과 자영업자분들의 성공을 돕는 것이 저의
                  사명입니다. 단순한 광고가 아닌, 진정한 성장을 함께
                  만들어갑니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Section : High and Dynamics*/}
      <section className="container mx-auto px-6 lg:px-12 flex flex-col gap-8">
        <div className="text-center mb-20 opacity-100 transform-none">
          <h2 className="text-5xl md:text-7xl mb-6">
            <span className="text-white">High </span>
            <span className="text-white/40">그리고, </span>
            <span className="text-[#7CB342]">Dynamics</span>
            <span className="text-white">의 시작</span>
          </h2>
        </div>

        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-3xl p-12 md:p-16 border border-white/10">
          <p className="text-2xl md:text-3xl text-white leading-relaxed mb-8">
            단순히 빠르고 크게 성장하는 것만이 목표가 아닙니다.
          </p>
          <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">
            성장하는 과정에 있어 서로의 이야기를 듣고, 진심으로 공감하며, 정확한
            해결방안을 찾고, 신속히 적용시키는 것에 대해 진짜 의미가 있습니다.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-3xl p-12 md:p-16 border border-white/10">
          <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">
            이렇듯 소비자의 대한 존중과 가치를 바라며 함께 감에 있어 공존된
            성장을 추구하고 지금 이 순간도 여전히 우리는 성장하고 있습니다.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#1A3A5C]/40 to-[#0A0A0A] backdrop-blur-sm rounded-3xl p-12 md:p-20 border border-[#7CB342]/30 text-center">
          <div className="text-2xl md:text-4xl text-white leading-relaxed mb-8 flex flex-col gap-4">
            <span>이어서 우리의 문제가 나의 삶, 나의 가족에게</span>
            <span className="text-[#7CB342]">행복을 가져다주기 위해</span>
            <span>HD컴퍼니는 존재합니다.</span>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-[#7CB342]/50 to-transparent my-12" />
          <div className="space-y-6 text-lg md:text-xl text-white leading-relaxed">
            <p className="text-white/60">
              단순한 광고상품과 혜택을 제공하는 것이 아닌,
            </p>
            <p className="text-[#7CB342]">
              힘들 때 한번이라도 이겨낼 수 있는 힘을 부여하고,
            </p>
            <p className="text-white/60">
              그럼에도 웃을 수 있는 행복을 판매하는 것이며,
            </p>
            <p className="text-white text-2xl md:text-3xl mt-8">
              그동안 여러분의 힘들고 우울했던 날들은
              <br />
              <span className="text-[#7CB342]">HD컴퍼니가 구매합니다.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="relative w-full flex items-center justify-center py-20">
        <div className="relative z-10 w-full max-w-7xl px-8 space-y-16">
          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Result 1 */}
            <div className="opacity-0 border border-white/10 rounded-2xl p-4">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center">
                  <span className="text-5xl">🏆</span>
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-white">
                  플레이스 1 페이지
                </h3>
              </div>
            </div>

            {/* Result 2 */}
            <div className="opacity-0 border border-white/10 rounded-2xl p-4">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-5xl">📈</span>
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-white">
                  꾸준한 매출 상승
                </h3>
              </div>
            </div>

            {/* Result 3 */}
            <div className="opacity-0 border border-white/10 rounded-2xl p-4">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-5xl">👥</span>
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-white">
                  끊이지 않는 손님들
                </h3>
              </div>
            </div>

            {/* Result 4 */}
            <div className="opacity-0 border border-white/10 rounded-2xl p-4">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-5xl">⏰</span>
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-white">
                  끝이 안보이는 웨이팅
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Final Closing */}
      <section className="relative min-h-screen w-full flex items-center justify-center py-20">
        <div className="relative z-10 w-full max-w-6xl px-8 space-y-16 text-center">
          <div className="text-center mb-16 opacity-100 transform-none">
            <h2 className="text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight">
              이제 더이상
              <br />
              <span className="bg-graident-to-r from-[#7CB342] to-[#9DD65D] bg-clip-text text-[#7CB342]">
                남 이야기가 아닙니다
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16 opacity-100">
            <div className="text-5xl md:text-6xl cursor-pointer opacity-100 transform-none">
              👨‍👩‍👧‍👦
            </div>
            <div className="text-5xl md:text-6xl cursor-pointer opacity-100 transform-none">
              👨‍🍳
            </div>
            <div className="text-5xl md:text-6xl cursor-pointer opacity-100 transform-none">
              👨‍⚕️
            </div>
            <div className="text-5xl md:text-6xl cursor-pointer opacity-100 transform-none">
              👨‍⚖️
            </div>
            <div className="text-5xl md:text-6xl cursor-pointer opacity-100 transform-none">
              👨‍💼
            </div>
            <div className="text-5xl md:text-6xl cursor-pointer opacity-100 transform-none">
              👨‍🔧
            </div>
            <div className="text-5xl md:text-6xl cursor-pointer opacity-100 transform-none">
              👨‍🏫
            </div>
            <div className="text-5xl md:text-6xl cursor-pointer opacity-100 transform-none">
              👨‍🌾
            </div>
            <div className="text-5xl md:text-6xl cursor-pointer opacity-100 transform-none">
              👨‍💻
            </div>
            <div className="text-5xl md:text-6xl cursor-pointer opacity-100 transform-none">
              👨‍🎨
            </div>
          </div>
          <div className="opacity-100 py-12">
            <p className="text-3xl md:text-5xl text-white/90 leading-relaxed mb-4">
              우리는 모두가 사랑하는
              <br />
              <span className="text-[#7CB342]">방식으로 성장합니다.</span>
            </p>
          </div>
          <button className="bg-gradient-to-r from-[#7CB342] to-[#1EC800] text-white text-xl font-medium rounded-full hover:shadow-[0_0_40px_rgba(124,179,66,0.4)] transition-all duration-300 px-8 py-4">
            더 알아보기
          </button>
        </div>
      </section>

      {/* Contact Banner - Fixed at bottom */}
      <ContactBanner />
    </main>
  );
}
