"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CharacterWithDot {
  char: string;
  showDot: boolean;
}

export default function AppleDemoPage() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const line4Ref = useRef<HTMLDivElement>(null);
  const line5Ref = useRef<HTMLDivElement>(null);
  const line6Ref = useRef<HTMLDivElement>(null);
  const line7Ref = useRef<HTMLDivElement>(null);
  const questionRef = useRef<HTMLDivElement>(null);
  const answer1Ref = useRef<HTMLDivElement>(null);
  const answer2Ref = useRef<HTMLDivElement>(null);
  const answer3Ref = useRef<HTMLDivElement>(null);
  const answer4Ref = useRef<HTMLDivElement>(null);
  const [characters, setCharacters] = useState<CharacterWithDot[]>([]);

  useEffect(() => {
    // const textArray = ["먹", "고", "살", "만"];
    // let typingInterval: NodeJS.Timeout | null = null;

    const ctx = gsap.context(() => {
      // Reset states
      // setCharacters([]);

      // Timeline for precise control
      const tl = gsap.timeline();

      // Line 1: "혹시 지금" - 0.0s Fade-in
      tl.fromTo(
        line1Ref.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
        },
        0
      );

      // Fade in the line 2 container
      tl.fromTo(
        line2Ref.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.3,
          ease: "power1.inOut",
        },
        1.2
      );

      // Line 2: "먹고 살만" typing effect (TEMPORARILY DISABLED)
      // tl.add(() => {
      //   let currentIndex = 0;
      //   typingInterval = setInterval(() => {
      //     if (currentIndex < textArray.length) {
      //       setCharacters((prev) => [
      //         ...prev,
      //         { char: textArray[currentIndex], showDot: true },
      //       ]);
      //       currentIndex++;
      //     } else {
      //       if (typingInterval) clearInterval(typingInterval);
      //     }
      //   }, 450); // 한 글자당 450ms
      // }, 1.2);

      // Line 3: "하십니까?" - 3.8s
      tl.fromTo(
        line3Ref.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
        },
        1.8
      );
    });

    return () => {
      // if (typingInterval) clearInterval(typingInterval);
      ctx.revert();
    };
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section 1 fade out on scroll
      gsap.to(section1Ref.current, {
        opacity: 0,
        scale: 0.95,
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: false,
        },
      });

      // Section 2 fade in on scroll
      gsap.fromTo(
        section2Ref.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section2Ref.current,
            start: "top bottom",
            end: "top center",
            scrub: 1,
          },
        }
      );

      // Section 2 fade out on scroll
      gsap.to(section2Ref.current, {
        opacity: 0,
        scale: 0.95,
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: false,
        },
      });

      // Section 2 text animations
      const section2Timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top center",
          end: "bottom bottom",
          toggleActions: "play none none none",
        },
      });

      section2Timeline
        .fromTo(
          line4Ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          0
        )
        .fromTo(
          line5Ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          0.5
        )
        .fromTo(
          line6Ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          1.0
        )
        .fromTo(
          line7Ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          1.5
        );

      // Section 3 fade in on scroll
      gsap.fromTo(
        section3Ref.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section3Ref.current,
            start: "top bottom",
            end: "top center",
            scrub: 1,
          },
        }
      );

      // Section 3 Q&A animations
      const section3Timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top center",
          end: "bottom bottom",
          toggleActions: "play none none none",
        },
      });

      section3Timeline
        .fromTo(
          questionRef.current,
          { opacity: 0, scale: 0.95, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 1.0, ease: "back.out(1.2)" },
          0
        )
        .fromTo(
          answer1Ref.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
          0.8
        )
        .fromTo(
          answer2Ref.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
          1.3
        )
        .fromTo(
          answer3Ref.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
          1.8
        )
        .fromTo(
          answer4Ref.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
          2.3
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative w-full overflow-x-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100">
      {/* Section 1: 혹시 지금 ~ 하십니까? */}
      <section
        ref={section1Ref}
        className="relative min-h-screen w-full flex items-center justify-center"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 w-full max-w-5xl px-8 py-10 flex flex-col items-center justify-center space-y-16">
          {/* Line 1: "혹시 지금" */}
          <div
            ref={line1Ref}
            className="opacity-0"
            style={{
              letterSpacing: "0.15em",
            }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-700 text-center tracking-widest">
              혹시 지금
            </h2>
          </div>

          {/* Line 2: "먹고 살만" - simple text (typing effect disabled) */}
          <div
            ref={line2Ref}
            className="opacity-0"
            style={{
              letterSpacing: "0.2em",
            }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-700 text-center tracking-wider">
              먹고 살만
            </h2>
          </div>

          {/* Line 3: "하십니까?" */}
          <div
            ref={line3Ref}
            className="opacity-0"
            style={{
              letterSpacing: "0.2em",
            }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-gray-900 text-center tracking-wider">
              하십니까?
            </h1>
          </div>
        </div>
      </section>

      {/* Section 2: 과거부터 현재까지... */}
      <section
        ref={section2Ref}
        className="relative min-h-screen w-full flex items-center justify-center"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        </div>

        {/* Additional content section */}
        <div className="relative z-10 w-full max-w-4xl px-8 space-y-8">
          {/* Line 4 */}
          <div ref={line4Ref} className="opacity-0">
            <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-700 text-center leading-relaxed">
              과거부터 현재까지 수많은 자영업자와 소상공인들이 생겨났지만,
            </p>
          </div>

          {/* Line 5 */}
          <div ref={line5Ref} className="opacity-0">
            <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-700 text-center leading-relaxed">
              반대로 그만큼 많이 망했습니다.
            </p>
          </div>

          {/* Line 6 */}
          <div ref={line6Ref} className="opacity-0 pt-4">
            <p className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-900 text-center leading-relaxed">
              이유가 뭘까요?
            </p>
          </div>

          {/* Line 7 - Speech Bubbles */}
          <div ref={line7Ref} className="opacity-0 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              {/* Bubble 1 */}
              <div className="relative bg-white rounded-3xl px-6 py-4 shadow-lg border border-gray-200 max-w-xs">
                <p className="text-base md:text-lg font-light text-gray-700 text-center">
                  맛이 없는 거 아니야?
                </p>
                {/* Tail */}
                <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white border-b border-r border-gray-200 transform rotate-45"></div>
              </div>

              {/* Bubble 2 */}
              <div className="relative bg-white rounded-3xl px-6 py-4 shadow-lg border border-gray-200 max-w-xs">
                <p className="text-base md:text-lg font-light text-gray-700 text-center">
                  서비스가 별로 아닐까?
                </p>
                {/* Tail */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-gray-200 transform rotate-45"></div>
              </div>

              {/* Bubble 3 */}
              <div className="relative bg-white rounded-3xl px-6 py-4 shadow-lg border border-gray-200 max-w-xs">
                <p className="text-base md:text-lg font-light text-gray-700 text-center">
                  인테리어가 문제 아니야?
                </p>
                {/* Tail */}
                <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-b border-r border-gray-200 transform rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Q&A */}
      <section
        ref={section3Ref}
        className="relative min-h-screen w-full flex items-center justify-center"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-green-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-yellow-200 rounded-full blur-3xl"></div>
        </div>

        {/* Q&A content section */}
        <div className="relative z-10 w-full max-w-5xl px-8 space-y-12">
          {/* Question Box */}
          <div ref={questionRef} className="opacity-0">
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl px-8 md:px-12 py-8 md:py-10 shadow-2xl border-2 border-blue-200">
              <div className="absolute -top-6 left-8 bg-blue-500 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg">
                Q
              </div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 text-center leading-relaxed pt-4">
                대표님! 저희 가게는 왜 사람이 안 올까요?
              </p>
            </div>
          </div>

          {/* Answer Section */}
          <div className="space-y-6 md:space-y-8 pl-0 md:pl-8">
            {/* A Badge */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                A
              </div>
              <div className="flex-1 space-y-6">
                {/* Answer 1 */}
                <div ref={answer1Ref} className="opacity-0">
                  <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-700 leading-relaxed">
                    잘 모르겠습니다..
                  </p>
                </div>

                {/* Answer 2 */}
                <div ref={answer2Ref} className="opacity-0">
                  <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-700 leading-relaxed">
                    정말 몰라서 못 옵니다.
                  </p>
                </div>

                {/* Answer 3 */}
                <div ref={answer3Ref} className="opacity-0">
                  <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-700 leading-relaxed">
                    현시점 모든 가게와 스토어의 제품은 상향 평준화 됐지만
                  </p>
                </div>

                {/* Answer 4 */}
                <div ref={answer4Ref} className="opacity-0">
                  <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-700 leading-relaxed">
                    그만큼 종사자가 너무 많아졌고 인터넷의 발달로
                    <br />
                    잘되는 업체들이 더 잘될 수 밖에 없습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
