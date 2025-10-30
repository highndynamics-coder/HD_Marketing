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
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);
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
  const reason1Ref = useRef<HTMLDivElement>(null);
  const reason2Ref = useRef<HTMLDivElement>(null);
  const reason3Ref = useRef<HTMLDivElement>(null);
  const reason4Ref = useRef<HTMLDivElement>(null);
  const emphasisRef = useRef<HTMLDivElement>(null);
  const finalQuestionRef = useRef<HTMLDivElement>(null);
  const doubt1Ref = useRef<HTMLDivElement>(null);
  const doubt2Ref = useRef<HTMLDivElement>(null);
  const doubt3Ref = useRef<HTMLDivElement>(null);
  const marketingTitleRef = useRef<HTMLDivElement>(null);
  const marketingSubRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLDivElement>(null);
  const timeline1Ref = useRef<HTMLDivElement>(null);
  const timeline2Ref = useRef<HTMLDivElement>(null);
  const timeline3Ref = useRef<HTMLDivElement>(null);
  const timeline4Ref = useRef<HTMLDivElement>(null);
  const timeline5Ref = useRef<HTMLDivElement>(null);
  const section6Ref = useRef<HTMLDivElement>(null);
  const storyTitleRef = useRef<HTMLDivElement>(null);
  const story1Ref = useRef<HTMLDivElement>(null);
  const story2Ref = useRef<HTMLDivElement>(null);
  const story3Ref = useRef<HTMLDivElement>(null);
  const story4Ref = useRef<HTMLDivElement>(null);
  const story5Ref = useRef<HTMLDivElement>(null);
  const story6Ref = useRef<HTMLDivElement>(null);
  const story7Ref = useRef<HTMLDivElement>(null);
  const successTitleRef = useRef<HTMLDivElement>(null);
  const section7Ref = useRef<HTMLDivElement>(null);
  const ceoQuestionRef = useRef<HTMLDivElement>(null);
  const ceoGreetingRef = useRef<HTMLDivElement>(null);
  const ceoNameRef = useRef<HTMLDivElement>(null);
  const ceoPhotoRef = useRef<HTMLDivElement>(null);
  const cert1Ref = useRef<HTMLDivElement>(null);
  const cert2Ref = useRef<HTMLDivElement>(null);
  const cert3Ref = useRef<HTMLDivElement>(null);
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

      // Section 3 fade out on scroll
      gsap.to(section3Ref.current, {
        opacity: 0,
        scale: 0.95,
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: false,
        },
      });

      // Section 4 fade in on scroll
      gsap.fromTo(
        section4Ref.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section4Ref.current,
            start: "top bottom",
            end: "top center",
            scrub: 1,
          },
        }
      );

      // Section 4 animations
      const section4Timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section4Ref.current,
          start: "top center",
          end: "bottom bottom",
          toggleActions: "play none none none",
        },
      });

      section4Timeline
        .fromTo(
          reason1Ref.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          0
        )
        .fromTo(
          reason2Ref.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          0.3
        )
        .fromTo(
          reason3Ref.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          0.6
        )
        .fromTo(
          reason4Ref.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          0.9
        )
        .fromTo(
          emphasisRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 1.0, ease: "back.out(1.2)" },
          1.5
        )
        .fromTo(
          finalQuestionRef.current,
          { opacity: 0, scale: 0.95, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power3.out" },
          2.5
        );

      // Section 4 fade out on scroll
      gsap.to(section4Ref.current, {
        opacity: 0,
        scale: 0.95,
        scrollTrigger: {
          trigger: section4Ref.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: false,
        },
      });

      // Section 5 fade in on scroll
      gsap.fromTo(
        section5Ref.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section5Ref.current,
            start: "top bottom",
            end: "top center",
            scrub: 1,
          },
        }
      );

      // Section 5 animations
      const section5Timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section5Ref.current,
          start: "top center",
          end: "bottom bottom",
          toggleActions: "play none none none",
        },
      });

      section5Timeline
        .fromTo(
          doubt1Ref.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          0
        )
        .fromTo(
          doubt2Ref.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          0.3
        )
        .fromTo(
          doubt3Ref.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          0.6
        )
        .fromTo(
          marketingTitleRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1.0, ease: "back.out(1.2)" },
          1.2
        )
        .fromTo(
          marketingSubRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          1.8
        )
        .fromTo(
          valueRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          2.4
        )
        .fromTo(
          timeline1Ref.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
          3.0
        )
        .fromTo(
          timeline2Ref.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
          3.3
        )
        .fromTo(
          timeline3Ref.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
          3.6
        )
        .fromTo(
          timeline4Ref.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
          3.9
        )
        .fromTo(
          timeline5Ref.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
          4.2
        );

      // Section 5 fade out on scroll
      gsap.to(section5Ref.current, {
        opacity: 0,
        scale: 0.95,
        scrollTrigger: {
          trigger: section5Ref.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: false,
        },
      });

      // Section 6 fade in on scroll
      gsap.fromTo(
        section6Ref.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section6Ref.current,
            start: "top bottom",
            end: "top center",
            scrub: 1,
          },
        }
      );

      // Section 6 animations
      const section6Timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section6Ref.current,
          start: "top center",
          end: "bottom bottom",
          toggleActions: "play none none none",
        },
      });

      section6Timeline
        .fromTo(
          storyTitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.0, ease: "power2.out" },
          0
        )
        .fromTo(
          story1Ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          0.5
        )
        .fromTo(
          story2Ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          0.7
        )
        .fromTo(
          story3Ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          0.9
        )
        .fromTo(
          story4Ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          1.1
        )
        .fromTo(
          story5Ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          1.3
        )
        .fromTo(
          story6Ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          1.5
        )
        .fromTo(
          story7Ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          1.7
        )
        .fromTo(
          successTitleRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.2)" },
          2.5
        );

      // Section 6 fade out on scroll
      gsap.to(section6Ref.current, {
        opacity: 0,
        scale: 0.95,
        scrollTrigger: {
          trigger: section6Ref.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: false,
        },
      });

      // Section 7 fade in on scroll
      gsap.fromTo(
        section7Ref.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section7Ref.current,
            start: "top bottom",
            end: "top center",
            scrub: 1,
          },
        }
      );

      // Section 7 animations
      const section7Timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section7Ref.current,
          start: "top center",
          end: "bottom bottom",
          toggleActions: "play none none none",
        },
      });

      section7Timeline
        .fromTo(
          ceoQuestionRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.0, ease: "power2.out" },
          0
        )
        .fromTo(
          ceoPhotoRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 1.0, ease: "back.out(1.2)" },
          0.5
        )
        .fromTo(
          ceoGreetingRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          1.0
        )
        .fromTo(
          ceoNameRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          1.3
        )
        .fromTo(
          cert1Ref.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
          1.8
        )
        .fromTo(
          cert2Ref.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
          2.0
        )
        .fromTo(
          cert3Ref.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
          2.2
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

      {/* Section 4: Marketing Message */}
      <section
        ref={section4Ref}
        className="relative min-h-screen w-full flex items-center justify-center py-20"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-200 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl px-8 space-y-16">
          {/* Reasons - with checkmark style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Reason 1 */}
            <div ref={reason1Ref} className="opacity-0 flex items-start gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-400 mt-3"></div>
              <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-700 leading-relaxed">
                비수기에도 안정적인 매출을 유지하고,
              </p>
            </div>

            {/* Reason 2 */}
            <div ref={reason2Ref} className="opacity-0 flex items-start gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-400 mt-3"></div>
              <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-700 leading-relaxed">
                위기에 대비하기 위해서
              </p>
            </div>

            {/* Reason 3 */}
            <div ref={reason3Ref} className="opacity-0 flex items-start gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-400 mt-3"></div>
              <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-700 leading-relaxed">
                내 가게를 찾고, 기억하게 하기 위해서
              </p>
            </div>

            {/* Reason 4 */}
            <div ref={reason4Ref} className="opacity-0 flex items-start gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-400 mt-3"></div>
              <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-700 leading-relaxed">
                우리 가게만의 특별한 점을 어필하기 위해서
              </p>
            </div>
          </div>

          {/* Marketing emphasis */}
          <div ref={emphasisRef} className="opacity-0 text-center py-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-relaxed">
              마케팅은 필수입니다.
            </h2>
          </div>

          {/* Consumer era statement */}
          <div className="text-center py-8">
            <p className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-800 leading-relaxed">
              이제는 소비자가 선택하는 시대입니다.
            </p>
          </div>

          {/* Final provocative question */}
          <div ref={finalQuestionRef} className="opacity-0 text-center py-16">
            <div className="bg-white/50 backdrop-blur-sm rounded-3xl px-12 md:px-16 py-12 md:py-16 shadow-lg border border-gray-200">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 leading-relaxed">
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
      <section
        ref={section5Ref}
        className="relative min-h-screen w-full flex items-center justify-center py-20"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gray-200 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl px-8 space-y-16">
          {/* Opening question */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-8">
              그럼 마케팅이란 무엇일까요?
            </h2>
          </div>

          {/* Doubts - speech bubble style */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            {/* Doubt 1 */}
            <div ref={doubt1Ref} className="opacity-0">
              <div className="relative bg-white rounded-2xl px-6 py-4 shadow-md border border-gray-200">
                <p className="text-base md:text-lg font-light text-gray-600 text-center">
                  정말 효과 있을까..?
                </p>
              </div>
            </div>

            {/* Doubt 2 */}
            <div ref={doubt2Ref} className="opacity-0">
              <div className="relative bg-white rounded-2xl px-6 py-4 shadow-md border border-gray-200">
                <p className="text-base md:text-lg font-light text-gray-600 text-center">
                  평생 광고비 써야하는거 아니야…?
                </p>
              </div>
            </div>

            {/* Doubt 3 */}
            <div ref={doubt3Ref} className="opacity-0">
              <div className="relative bg-white rounded-2xl px-6 py-4 shadow-md border border-gray-200">
                <p className="text-base md:text-lg font-light text-gray-600 text-center">
                  한다고 정말 달라질까..?
                </p>
              </div>
            </div>
          </div>

          {/* Marketing definition - emphasized */}
          <div className="text-center space-y-6 py-12">
            <div ref={marketingTitleRef} className="opacity-0">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                마케팅,
              </h2>
            </div>
            <div ref={marketingSubRef} className="opacity-0">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800">
                매출 성장의 원동력이 되어야 합니다.
              </h3>
            </div>
          </div>

          {/* Value foundation */}
          <div ref={valueRef} className="opacity-0 text-center py-8">
            <p className="text-xl md:text-2xl font-light text-gray-600">
              기반이 되는 가치
            </p>
          </div>

          {/* 5T Timeline */}
          <div className="relative py-12">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gray-300"></div>

            <div className="space-y-12">
              {/* Timeline 1: Trend */}
              <div
                ref={timeline1Ref}
                className="opacity-0 relative pl-20 md:pl-28"
              >
                <div className="absolute left-6 md:left-9 top-2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-lg"></div>
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Trend
                  </h4>
                  <p className="text-lg md:text-xl font-light text-gray-600">
                    트렌드
                  </p>
                </div>
              </div>

              {/* Timeline 2: Tech */}
              <div
                ref={timeline2Ref}
                className="opacity-0 relative pl-20 md:pl-28"
              >
                <div className="absolute left-6 md:left-9 top-2 w-6 h-6 rounded-full bg-purple-500 border-4 border-white shadow-lg"></div>
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Tech
                  </h4>
                  <p className="text-lg md:text-xl font-light text-gray-600">
                    기술
                  </p>
                </div>
              </div>

              {/* Timeline 3: Tactics */}
              <div
                ref={timeline3Ref}
                className="opacity-0 relative pl-20 md:pl-28"
              >
                <div className="absolute left-6 md:left-9 top-2 w-6 h-6 rounded-full bg-green-500 border-4 border-white shadow-lg"></div>
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Tactics
                  </h4>
                  <p className="text-lg md:text-xl font-light text-gray-600">
                    전략
                  </p>
                </div>
              </div>

              {/* Timeline 4: Target */}
              <div
                ref={timeline4Ref}
                className="opacity-0 relative pl-20 md:pl-28"
              >
                <div className="absolute left-6 md:left-9 top-2 w-6 h-6 rounded-full bg-orange-500 border-4 border-white shadow-lg"></div>
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Target
                  </h4>
                  <p className="text-lg md:text-xl font-light text-gray-600">
                    목표
                  </p>
                </div>
              </div>

              {/* Timeline 5: Talk */}
              <div
                ref={timeline5Ref}
                className="opacity-0 relative pl-20 md:pl-28"
              >
                <div className="absolute left-6 md:left-9 top-2 w-6 h-6 rounded-full bg-pink-500 border-4 border-white shadow-lg"></div>
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Talk
                  </h4>
                  <p className="text-lg md:text-xl font-light text-gray-600">
                    소통
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Success Stories */}
      <section
        ref={section6Ref}
        className="relative min-h-screen w-full flex items-center justify-center py-20"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-yellow-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-orange-200 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl px-8 space-y-16">
          {/* Title */}
          <div ref={storyTitleRef} className="opacity-0 text-center">
            <p className="text-lg md:text-xl text-gray-500 mb-4">
              (*우리의 이야기 입니다)
            </p>
          </div>

          {/* Stories Grid - Masonry style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Story 1 */}
            <div ref={story1Ref} className="opacity-0">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="text-5xl text-gray-300 mb-4">"</div>
                <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed">
                  장사하면서 눈물 쏙 뺀 날도 많았는데, 요즘은 가족들이랑 웃는
                  날이 더 많아요!
                </p>
              </div>
            </div>

            {/* Story 2 */}
            <div ref={story2Ref} className="opacity-0">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="text-5xl text-gray-300 mb-4">"</div>
                <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed">
                  가게 문 닫을까 고민하던 때가 엊그제 같은데, 지금은 매일매일
                  정신없어요.
                </p>
              </div>
            </div>

            {/* Story 3 */}
            <div ref={story3Ref} className="opacity-0">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="text-5xl text-gray-300 mb-4">"</div>
                <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed">
                  부모님에게 걱정만 끼치던 저였는데 이젠 가끔 용돈도
                  드리네요..ㅋㅎㅋㅎ
                  <br />
                  정말 작지만 큰 변화라고 생각합니다!
                  <br />
                  부모님도 응원해주시니 더 힘이 나는 거 같아요!
                </p>
                <p className="text-sm text-gray-400 mt-4 italic">
                  (가게 매출이 올라서 부모님 용돈도 가끔 드립니다..)
                </p>
              </div>
            </div>

            {/* Story 4 */}
            <div ref={story4Ref} className="opacity-0">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="text-5xl text-gray-300 mb-4">"</div>
                <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed">
                  요즘은 매출 오른 걸 핑계 삼아 장난감 하나씩 사주네요ㅎㅎ
                  <br />
                  가족도 분위기가 좋아진거 같아서 너무 행복합니다 ㅎㅎ
                </p>
              </div>
            </div>

            {/* Story 5 */}
            <div ref={story5Ref} className="opacity-0">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="text-5xl text-gray-300 mb-4">"</div>
                <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed">
                  힘들 때마다 가족 생각하면서 버텼는데, 이제는 가족들한테 자랑할
                  수 있는 가게가 됐어요
                </p>
              </div>
            </div>

            {/* Story 6 */}
            <div ref={story6Ref} className="opacity-0">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="text-5xl text-gray-300 mb-4">"</div>
                <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed">
                  작은 가게지만 가족들의 희망이 되어가고 있어요. 대표님 덕에
                  하루하루 감사하며 일하고 있습니다.
                </p>
              </div>
            </div>

            {/* Story 7 */}
            <div ref={story7Ref} className="opacity-0">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="text-5xl text-gray-300 mb-4">"</div>
                <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed">
                  아직 완벽하진 않지만, 그래도 매출 걱정에 밤새던 일은
                  없어졌어요. 조금씩 좋아지고 있다는 게 느껴집니다.
                </p>
              </div>
            </div>
          </div>

          {/* Success statement */}
          <div ref={successTitleRef} className="opacity-0 text-center py-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              실제로 많은 사장님들의
              <br />
              성공을 도왔습니다
            </h2>
          </div>
        </div>
      </section>

      {/* Section 7: CEO Introduction */}
      <section
        ref={section7Ref}
        className="relative min-h-screen w-full flex items-center justify-center py-20"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl px-8 space-y-12">
          {/* Opening question */}
          <div ref={ceoQuestionRef} className="opacity-0 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-600 italic">
              그래서 제가 누구냐고요?
            </h2>
          </div>

          {/* Main content card */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl border border-gray-200">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Profile photo placeholder */}
              <div ref={ceoPhotoRef} className="opacity-0 flex-shrink-0">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 border-4 border-white shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-6xl text-gray-400">👤</p>
                  </div>
                </div>
              </div>

              {/* Text content */}
              <div className="flex-1 text-center md:text-left space-y-6">
                {/* Greeting */}
                <div ref={ceoGreetingRef} className="opacity-0">
                  <p className="text-2xl md:text-3xl font-light text-gray-700">
                    반갑습니다.
                  </p>
                </div>

                {/* Name and title */}
                <div ref={ceoNameRef} className="opacity-0 space-y-2">
                  <h3 className="text-xl md:text-2xl font-normal text-gray-600">
                    종합광고대행사 HD 컴퍼니
                  </h3>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                    대표 홍도현
                  </h2>
                  <p className="text-lg md:text-xl text-gray-500">입니다.</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {/* Cert 1 */}
                <div ref={cert1Ref} className="opacity-0">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold shadow-md">
                        ✓
                      </div>
                      <h4 className="text-lg md:text-xl font-bold text-gray-900">
                        검색광고 마케터
                      </h4>
                    </div>
                    <p className="text-2xl font-bold text-blue-600 text-right">
                      1급
                    </p>
                  </div>
                </div>

                {/* Cert 2 */}
                <div ref={cert2Ref} className="opacity-0">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold shadow-md">
                        ✓
                      </div>
                      <h4 className="text-lg md:text-xl font-bold text-gray-900">
                        SNS광고마케터
                      </h4>
                    </div>
                    <p className="text-2xl font-bold text-purple-600 text-right">
                      1급
                    </p>
                  </div>
                </div>

                {/* Cert 3 */}
                <div ref={cert3Ref} className="opacity-0">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold shadow-md">
                        ✓
                      </div>
                      <h4 className="text-lg md:text-xl font-bold text-gray-900">
                        마케팅 대행
                      </h4>
                    </div>
                    <p className="text-2xl font-bold text-green-600 text-right">
                      250+
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
