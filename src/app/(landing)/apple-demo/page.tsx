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
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const line4Ref = useRef<HTMLDivElement>(null);
  const line5Ref = useRef<HTMLDivElement>(null);
  const line6Ref = useRef<HTMLDivElement>(null);
  const line7Ref = useRef<HTMLDivElement>(null);
  const [characters, setCharacters] = useState<CharacterWithDot[]>([]);

  useEffect(() => {
    const textArray = ["먹", "고", "살", "만"];
    let typingInterval: NodeJS.Timeout | null = null;

    const ctx = gsap.context(() => {
      // Reset states
      setCharacters([]);

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

      // Line 2: "먹고 살만" typing effect
      tl.add(() => {
        let currentIndex = 0;
        typingInterval = setInterval(() => {
          if (currentIndex < textArray.length) {
            setCharacters((prev) => [
              ...prev,
              { char: textArray[currentIndex], showDot: true },
            ]);
            currentIndex++;
          } else {
            if (typingInterval) clearInterval(typingInterval);
          }
        }, 450); // 한 글자당 450ms
      }, 1.2);

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
        3.8
      );
    });

    return () => {
      if (typingInterval) clearInterval(typingInterval);
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

          {/* Line 2: "먹고 살만" with typing effect and dots */}
          <div
            ref={line2Ref}
            className="opacity-0 min-h-[120px] flex flex-col items-center justify-center space-y-8"
            style={{
              letterSpacing: "0.2em",
            }}
          >
            <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8">
              {characters.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {/* Dot above character with bounce animation */}
                  <span
                    className="text-3xl md:text-4xl lg:text-5xl text-gray-500 mb-2 animate-bounceDot"
                    style={{
                      animationDelay: `${index * 0.05}s`,
                    }}
                  >
                    ·
                  </span>
                  {/* Character with slide up animation */}
                  <span
                    className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-700 animate-slideUp"
                    style={{
                      animationDelay: `${index * 0.05 + 0.2}s`,
                    }}
                  >
                    {item.char}
                  </span>
                </div>
              ))}
              {/* Typing cursor */}
              {characters.length > 0 && characters.length < 4 && (
                <span className="inline-block w-1 h-16 md:h-20 lg:h-24 bg-gray-700 ml-2 animate-pulse"></span>
              )}
            </div>

            {/* Line 3: "하십니까?" */}
            <div
              ref={line3Ref}
              className="opacity-0 pt-4"
              style={{
                letterSpacing: "0.2em",
              }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-gray-900 text-center tracking-wider">
                하십니까?
              </h1>
            </div>
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

          {/* Line 7 */}
          <div ref={line7Ref} className="opacity-0 pt-8">
            <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-500 text-center leading-relaxed italic">
              (맛이 없는 거 아니야? , 서비스가 별로 아닐까? , 인테리어가 문제
              아니야?)
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
