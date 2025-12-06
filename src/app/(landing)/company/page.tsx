"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const fiveTItems = [
  { label: "Trend", description: "트렌드" },
  { label: "Tech", description: "기술" },
  { label: "Tactics", description: "전략" },
  { label: "Target", description: "목표" },
  { label: "Talk", description: "소통" },
];

export default function CompanyPage() {
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
    <main className="relative w-full overflow-x-hidden bg-black my-24">
      <section className="relative min-h-screen w-full flex items-center justify-center py-20">
        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl px-8 space-y-8">
          <div ref={para1Ref} className="opacity-0">
            <p className="text-xl md:text-2xl lg:text-3xl font-normal text-white/80 leading-relaxed">
              HD컴퍼니의 시작은
            </p>
          </div>

          <div ref={para2Ref} className="opacity-0">
            <p className="text-xl md:text-2xl lg:text-3xl font-normal text-white/80  leading-relaxed">
              성장하는 과정에 있어 서로의 이야기를 듣고,
            </p>
          </div>

          <div ref={para3Ref} className="opacity-0">
            <p className="text-xl md:text-2xl lg:text-3xl font-normal text-white/80  leading-relaxed">
              진심으로 공감하며, 정확한 해결 방안을 찾고,
            </p>
          </div>

          <div ref={para4Ref} className="opacity-0">
            <p className="text-xl md:text-2xl lg:text-3xl font-normal text-white/80  leading-relaxed">
              그 답을 행동으로 옮기는 것에서부터 출발했습니다.
            </p>
          </div>

          <div ref={para5Ref} className="opacity-0 pt-8">
            <p className="text-xl md:text-2xl lg:text-3xl font-normal text-white/80 leading-relaxed flex flex-col gap-4">
              <span>이어서 소비자의 대한 존중과 가치를 바라며</span>
              <span>함께 감에 있어 공존된 성장을 추구하고,</span>
              <span>지금 이 순간도 여전히 우리는 성장하고 있습니다.</span>
            </p>
          </div>

          <div ref={para6Ref} className="opacity-0 pt-8">
            <p className="text-xl md:text-2xl lg:text-3xl font-normal text-white/80 flex flex-col gap-4 leading-relaxed">
              <span>이렇듯 우리의 문제가 나의 삶, 나의 가족에게</span>
              <span>행복을 가져다주기 위해 HD컴퍼니는 존재합니다.</span>
            </p>
          </div>

          <div ref={para7Ref} className="opacity-0 pt-8">
            <p className="text-xl md:text-2xl lg:text-3xl font-normal text-white/80 flex flex-col gap-4 leading-relaxed">
              <span>단순한 광고상품과 혜택을 판매하는 것이 아닌,</span>
              <span>힘들 때 한번이라도 이겨낼 수 있는 힘을 부여하고,</span>
              <span>그럼에도 웃을 수 있는 행복을 제공하는 것이며,</span>
              <span>그동안 여러분의 힘들고 우울했던 날들은</span>
              <span className="font-bold text-white/80 mt-12">
                HD컴퍼니가 구매합니다.
              </span>
            </p>
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
