"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContactBanner } from "@/components/ContactBanner";

gsap.registerPlugin(ScrollTrigger);

interface Reason {
  emoji: string;
  text: string;
  gradient: string;
}

const reasons: Reason[] = [
  {
    emoji: "📊",
    text: "손님이 뜸한 시기에도 안정적인 매출을 유지하고,",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    emoji: "🛡️",
    text: "위기에 대비하기 위해서",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    emoji: "🔍",
    text: "내 가게를 찾고, 기억하게 하기 위해서",
    gradient: "from-green-500 to-green-600",
  },
  {
    emoji: "⭐",
    text: "우리 가게만의 특별한 점을 어필하기 위해서",
    gradient: "from-orange-500 to-orange-600",
  },
];

function WheelPickerReasons() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollOffset((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Create an extended array for infinite circular effect based on current scrollOffset
  const getExtendedReasons = () => {
    // Show 3 items before and after current scrollOffset
    const extended = [];
    for (let i = scrollOffset - 3; i <= scrollOffset + 3; i++) {
      const actualIndex =
        ((i % reasons.length) + reasons.length) % reasons.length;
      extended.push({
        ...reasons[actualIndex],
        displayIndex: i,
      });
    }
    return extended;
  };

  function getItemStyle(displayIndex: number) {
    const diff = displayIndex - scrollOffset;
    const isCenter = diff === 0;

    // Center item
    if (isCenter) {
      return {
        scale: 1,
        opacity: 1,
        translateY: 0,
        zIndex: 10,
      };
    }

    // Items above and below
    if (Math.abs(diff) === 1) {
      return {
        scale: 0.75,
        opacity: 0.4,
        translateY: diff * 80,
        zIndex: 5,
      };
    }

    // Far items
    return {
      scale: 0.6,
      opacity: 0.2,
      translateY: diff * 120,
      zIndex: 1,
    };
  }

  const extendedReasons = getExtendedReasons();

  return (
    <div className="relative w-full max-w-3xl mx-auto py-20">
      <div
        ref={containerRef}
        className="relative h-[400px] flex items-center justify-center overflow-hidden"
      >
        {extendedReasons.map((reason, idx) => {
          const style = getItemStyle(reason.displayIndex);
          const isCenter = reason.displayIndex === scrollOffset;

          // Only render visible items for performance
          if (Math.abs(reason.displayIndex - scrollOffset) > 2) {
            return null;
          }

          return (
            <div
              key={`${reason.displayIndex}-${idx}`}
              className="absolute w-full transition-all duration-700 ease-out"
              style={{
                transform: `translateY(${style.translateY}px) scale(${style.scale})`,
                opacity: style.opacity,
                zIndex: style.zIndex,
              }}
            >
              <div className="flex items-center justify-center gap-6 px-8">
                <div
                  className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center shadow-lg transition-all duration-700`}
                >
                  <span className="text-3xl">{reason.emoji}</span>
                </div>
                <p
                  className={`text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed transition-all duration-700 ${
                    isCenter
                      ? "text-gray-900 font-bold"
                      : "text-gray-400 font-normal"
                  }`}
                >
                  {reason.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation dots */}
      <div className="justify-center gap-2 mt-8 hidden">
        {reasons.map((_, index) => (
          <button
            key={index}
            onClick={() => setScrollOffset(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              scrollOffset % reasons.length === index
                ? "bg-gray-900 w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to reason ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function LandingPage() {
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
  const section8Ref = useRef<HTMLDivElement>(null);
  const result1Ref = useRef<HTMLDivElement>(null);
  const result2Ref = useRef<HTMLDivElement>(null);
  const result3Ref = useRef<HTMLDivElement>(null);
  const result4Ref = useRef<HTMLDivElement>(null);
  const finalMessageRef = useRef<HTMLDivElement>(null);
  const section9Ref = useRef<HTMLDivElement>(null);
  const closingLine1Ref = useRef<HTMLDivElement>(null);
  const closingLine2Ref = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

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

      // Fade in the line 2 container with slide from right to left
      tl.fromTo(
        line2Ref.current,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.0,
          ease: "power2.out",
        },
        1.2
      );

      // line3Ref - 타이핑 애니메이션은 별도로 처리
      tl.fromTo(
        line3Ref.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        1.8
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    const fullText = "내일은 우리가 함께합니다";
    let currentIndex = 0;

    const startDelay = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 200);

      return () => clearInterval(typingInterval);
    }, 2300);

    return () => {
      clearTimeout(startDelay);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 1.0, ease: "power2.out" },
          0.8
        )
        .fromTo(
          answer2Ref.current,
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 2.0, ease: "power2.out" },
          0.8
        )
        .fromTo(
          answer3Ref.current,
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 3.0, ease: "power2.out" },
          0.8
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
          emphasisRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 1.0, ease: "back.out(1.2)" },
          0
        )
        .fromTo(
          finalQuestionRef.current,
          { opacity: 0, scale: 0.95, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power3.out" },
          1.0
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

      // Section 7 fade out on scroll
      gsap.to(section7Ref.current, {
        opacity: 0,
        scale: 0.95,
        scrollTrigger: {
          trigger: section7Ref.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: false,
        },
      });

      // Section 8 fade in on scroll
      gsap.fromTo(
        section8Ref.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section8Ref.current,
            start: "top bottom",
            end: "top center",
            scrub: 1,
          },
        }
      );

      // Section 8 animations
      const section8Timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section8Ref.current,
          start: "top center",
          end: "bottom bottom",
          toggleActions: "play none none none",
        },
      });

      section8Timeline
        .fromTo(
          result1Ref.current,
          { opacity: 0, scale: 0.8, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.5)" },
          0
        )
        .fromTo(
          result2Ref.current,
          { opacity: 0, scale: 0.8, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.5)" },
          0.3
        )
        .fromTo(
          result3Ref.current,
          { opacity: 0, scale: 0.8, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.5)" },
          0.6
        )
        .fromTo(
          result4Ref.current,
          { opacity: 0, scale: 0.8, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.5)" },
          0.9
        )
        .fromTo(
          finalMessageRef.current,
          { opacity: 0, scale: 0.9, y: 50 },
          { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: "power3.out" },
          1.8
        );

      // Section 8 fade out on scroll
      gsap.to(section8Ref.current, {
        opacity: 0,
        scale: 0.95,
        scrollTrigger: {
          trigger: section8Ref.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: false,
        },
      });

      // Section 9 fade in on scroll
      gsap.fromTo(
        section9Ref.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section9Ref.current,
            start: "top bottom",
            end: "top center",
            scrub: 1,
          },
        }
      );

      // Section 9 animations
      const section9Timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section9Ref.current,
          start: "top center",
          end: "bottom bottom",
          toggleActions: "play none none none",
        },
      });

      section9Timeline
        .fromTo(
          closingLine1Ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.0, ease: "power2.out" },
          0
        )
        .fromTo(
          closingLine2Ref.current,
          { opacity: 0, scale: 0.95, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: "power3.out" },
          0.8
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative w-full overflow-x-hidden">
      <section
        ref={section1Ref}
        className="relative min-h-screen w-full flex items-center justify-center"
      >
        <div className="relative z-10 w-full max-w-5xl px-8 py-10 flex flex-col items-center justify-center space-y-16">
          <div className="flex flex-row items-center justify-center gap-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-700 text-center tracking-widest">
              오늘도
            </h2>
            <div
              ref={line2Ref}
              className="opacity-0"
              style={{
                letterSpacing: "0.2em",
              }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-700 text-center tracking-wider">
                버티셨다면,
              </h2>
            </div>
          </div>

          <div
            ref={line3Ref}
            className="opacity-0"
            style={{
              letterSpacing: "0.2em",
            }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-gray-900 text-center tracking-wider min-h-[1.2em]">
              {typedText}
              {typedText.length > 0 && typedText.length < 12 && (
                <span className="animate-pulse">|</span>
              )}
            </h1>
          </div>
        </div>
      </section>

      {/* Section 2: 과거부터 현재까지... */}
      <section
        ref={section2Ref}
        className="relative min-h-screen w-full flex items-center justify-center"
      >
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

      {/* Section 3: Q&A - Chat Style */}
      <section
        ref={section3Ref}
        className="relative min-h-screen w-full flex items-center justify-center py-20"
      >
        {/* Chat content section */}
        <div className="relative z-10 w-full max-w-4xl px-8 space-y-8">
          {/* Question - 사장님들 (Left) */}
          <div ref={questionRef} className="opacity-0 flex items-start gap-4">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center shadow-lg">
              <span className="text-2xl">👨‍👩‍👦</span>
            </div>
            <div className="flex-1 max-w-md">
              <div className="bg-white rounded-3xl rounded-tl-none px-6 py-4 shadow-md border border-gray-200">
                <p className="text-lg md:text-xl font-normal text-gray-800 leading-relaxed">
                  대표님! 저희 가게는 왜 사람이 안 올까요?
                </p>
              </div>
            </div>
          </div>

          {/* TODO: FIX */}
          <div className="hidden">
            <div className="flex items-center gap-4 justify-center">
              <div className="flex-1 max-w-md">
                <div>
                  <h2 className="text-2xl font-semibold text-black">.</h2>
                  <h2 className="text-2xl font-semibold text-black">.</h2>
                  <h2 className="text-2xl font-semibold text-black">.</h2>
                  <h2 className="text-2xl font-semibold text-black">🧐</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Final Answer - HD (Right) */}
          <div ref={answer1Ref} className="opacity-0">
            <div className="flex items-start gap-4 justify-end">
              <div className="flex-1 max-w-md">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl rounded-tr-none px-6 py-4 shadow-md ml-auto flex flex-col gap-4">
                  <h2 className="text-2xl font-semibold text-white">
                    잘 모르겠습니다..
                  </h2>
                </div>
              </div>
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center shadow-lg">
                <span className="text-2xl">👨‍💼</span>
              </div>
            </div>
          </div>
          <div ref={answer2Ref} className="opacity-0">
            <div className="flex items-start gap-4 justify-end">
              <div className="flex-1 max-w-md">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl rounded-tr-none px-6 py-4 shadow-md ml-auto flex flex-col gap-4">
                  <h2 className="text-2xl font-semibold text-white">
                    정말 몰라서 못 옵니다.
                  </h2>
                </div>
              </div>
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center shadow-lg">
                <span className="text-2xl">👨‍💼</span>
              </div>
            </div>
          </div>
          <div ref={answer3Ref} className="opacity-0">
            <div className="flex items-start gap-4 justify-end">
              <div className="flex-1 max-w-md">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl rounded-tr-none px-6 py-4 shadow-md ml-auto flex flex-col gap-4">
                  <p className="text-lg md:text-xl font-normal text-white leading-relaxed">
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
        </div>
      </section>

      {/* Section 4: Marketing Message */}
      <section
        ref={section4Ref}
        className="relative min-h-screen w-full flex items-center justify-center py-20"
      >
        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl px-8 space-y-16">
          {/* WheelPicker Style Reasons */}
          <WheelPickerReasons />

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
            <div ref={doubt1Ref} className="opacity-0 animate-float-1">
              <div className="relative bg-white rounded-2xl px-6 py-4 shadow-md border border-gray-200">
                <p className="text-base md:text-lg font-semibold text-gray-600 text-center">
                  정말 효과 있을까..?
                </p>
              </div>
            </div>

            {/* Doubt 2 */}
            <div ref={doubt2Ref} className="opacity-0 animate-float-2">
              <div className="relative bg-white rounded-2xl px-6 py-4 shadow-md border border-gray-200">
                <p className="text-base md:text-lg font-semibold text-gray-600 text-center">
                  평생 광고비 써야하는거 아니야…?
                </p>
              </div>
            </div>

            {/* Doubt 3 */}
            <div ref={doubt3Ref} className="opacity-0 animate-float-3">
              <div className="relative bg-white rounded-2xl px-6 py-4 shadow-md border border-gray-200">
                <p className="text-base md:text-lg font-semibold text-gray-600 text-center">
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
        </div>
      </section>

      {/* Section 6: Success Stories */}
      <section
        ref={section6Ref}
        className="relative min-h-screen w-full flex items-center justify-center py-20"
      >
        {/* Floating animation styles */}
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          .float-1 {
            animation: float 6s ease-in-out infinite;
          }

          .float-2 {
            animation: float 7s ease-in-out infinite;
            animation-delay: 0.5s;
          }

          .float-3 {
            animation: float 8s ease-in-out infinite;
            animation-delay: 1s;
          }

          .float-4 {
            animation: float 6.5s ease-in-out infinite;
            animation-delay: 1.5s;
          }

          .float-5 {
            animation: float 7.5s ease-in-out infinite;
            animation-delay: 2s;
          }

          .float-6 {
            animation: float 8.5s ease-in-out infinite;
            animation-delay: 2.5s;
          }

          .float-7 {
            animation: float 7s ease-in-out infinite;
            animation-delay: 3s;
          }

          .scrollbar-hidden::-webkit-scrollbar {
            display: none;
          }

          .scrollbar-hidden {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl px-8 space-y-16">
          {/* Title */}
          <div ref={storyTitleRef} className="opacity-0 text-center">
            <p className="text-lg md:text-xl text-gray-500 mb-4">
              (*우리의 이야기 입니다)
            </p>
          </div>

          {/* Stories Grid - Unified height with floating effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Story 1 */}
            <div ref={story1Ref} className="opacity-0 float-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-[400px] flex flex-col">
                {/* Avatar and Info */}
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center shadow-lg mb-2">
                    <span className="text-3xl">👩‍🍳</span>
                  </div>
                  <p className="text-sm font-medium text-gray-600">
                    35세 치킨집 사장님
                  </p>
                </div>
                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto scrollbar-hidden">
                  <div className="text-4xl text-gray-300 mb-3">"</div>
                  <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed">
                    장사하면서 눈물 쏙 뺀 날도 많았는데, 요즘은 가족들이랑 웃는
                    날이 더 많아요!
                  </p>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div ref={story2Ref} className="opacity-0 float-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-[400px] flex flex-col">
                {/* Avatar and Info */}
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center shadow-lg mb-2">
                    <span className="text-3xl">☕</span>
                  </div>
                  <p className="text-sm font-medium text-gray-600">
                    28세 카페 사장님
                  </p>
                </div>
                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto scrollbar-hidden">
                  <div className="text-4xl text-gray-300 mb-3">"</div>
                  <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed">
                    가게 문 닫을까 고민하던 때가 엊그제 같은데, 지금은 매일매일
                    정신없어요.
                  </p>
                </div>
              </div>
            </div>

            {/* Story 3 */}
            <div ref={story3Ref} className="opacity-0 float-3">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-[400px] flex flex-col">
                {/* Avatar and Info */}
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shadow-lg mb-2">
                    <span className="text-3xl">🍜</span>
                  </div>
                  <p className="text-sm font-medium text-gray-600">
                    42세 분식집 사장님
                  </p>
                </div>
                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto scrollbar-hidden">
                  <div className="text-4xl text-gray-300 mb-3">"</div>
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
            </div>

            {/* Story 4 */}
            <div ref={story4Ref} className="opacity-0 float-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-[400px] flex flex-col">
                {/* Avatar and Info */}
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center shadow-lg mb-2">
                    <span className="text-3xl">🍕</span>
                  </div>
                  <p className="text-sm font-medium text-gray-600">
                    31세 피자집 사장님
                  </p>
                </div>
                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto scrollbar-hidden">
                  <div className="text-4xl text-gray-300 mb-3">"</div>
                  <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed">
                    요즘은 매출 오른 걸 핑계 삼아 장난감 하나씩 사주네요ㅎㅎ
                    <br />
                    가족도 분위기가 좋아진거 같아서 너무 행복합니다 ㅎㅎ
                  </p>
                </div>
              </div>
            </div>

            {/* Story 5 */}
            <div ref={story5Ref} className="opacity-0 float-5">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-[400px] flex flex-col">
                {/* Avatar and Info */}
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-lg mb-2">
                    <span className="text-3xl">🥘</span>
                  </div>
                  <p className="text-sm font-medium text-gray-600">
                    39세 한식당 사장님
                  </p>
                </div>
                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto scrollbar-hidden">
                  <div className="text-4xl text-gray-300 mb-3">"</div>
                  <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed">
                    힘들 때마다 가족 생각하면서 버텼는데, 이제는 가족들한테
                    자랑할 수 있는 가게가 됐어요
                  </p>
                </div>
              </div>
            </div>

            {/* Story 6 */}
            <div ref={story6Ref} className="opacity-0 float-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-[400px] flex flex-col">
                {/* Avatar and Info */}
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-400 to-red-500 flex items-center justify-center shadow-lg mb-2">
                    <span className="text-3xl">🍰</span>
                  </div>
                  <p className="text-sm font-medium text-gray-600">
                    26세 베이커리 사장님
                  </p>
                </div>
                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto scrollbar-hidden">
                  <div className="text-4xl text-gray-300 mb-3">"</div>
                  <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed">
                    작은 가게지만 가족들의 희망이 되어가고 있어요. 대표님 덕에
                    하루하루 감사하며 일하고 있습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Story 7 */}
            <div ref={story7Ref} className="opacity-0 float-7">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-[400px] flex flex-col">
                {/* Avatar and Info */}
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg mb-2">
                    <span className="text-3xl">🍗</span>
                  </div>
                  <p className="text-sm font-medium text-gray-600">
                    44세 호프집 사장님
                  </p>
                </div>
                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto scrollbar-hidden">
                  <div className="text-4xl text-gray-300 mb-3">"</div>
                  <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed">
                    아직 완벽하진 않지만, 그래도 매출 걱정에 밤새던 일은
                    없어졌어요. 조금씩 좋아지고 있다는 게 느껴집니다.
                  </p>
                </div>
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
        className="relative min-h-screen w-full flex items-center justify-center py-32 bg-gradient-to-b from-gray-50 to-white"
      >
        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl px-6 md:px-8">
          {/* Opening question */}
          <div ref={ceoQuestionRef} className="opacity-0 text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-400 italic tracking-wide">
              이 모든 이야기의 시작점, 누구였을까요?
            </h2>
          </div>

          {/* Greeting Section */}
          <div
            ref={ceoGreetingRef}
            className="opacity-0 text-center mb-20 space-y-3"
          >
            <h3 className="text-xl md:text-2xl font-light text-gray-600">
              반갑습니다.
            </h3>
            <h4 className="text-lg md:text-xl font-normal text-gray-500">
              종합광고대행사 HD 컴퍼니
            </h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-2">
              대표 홍도현입니다.
            </h2>
          </div>

          {/* Main content - Two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column: CEO Info */}
            <div className="space-y-6">
              {/* CEO Profile Photo */}
              <div
                ref={ceoPhotoRef}
                className="opacity-0 flex justify-center lg:justify-start mb-8"
              >
                <div className="relative group">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-lg ring-4 ring-white ring-offset-4 ring-offset-gray-50 group-hover:shadow-xl transition-all duration-300">
                    <span className="text-7xl">👤</span>
                  </div>
                </div>
              </div>

              {/* Certifications - Vertical Layout */}
              <div className="space-y-3">
                {/* Cert 1 */}
                <div ref={cert1Ref} className="opacity-0">
                  <div className="bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg shadow-sm">
                          ✓
                        </div>
                        <h4 className="text-lg md:text-xl font-semibold text-gray-800">
                          검색광고 마케터
                        </h4>
                      </div>
                      <p className="text-2xl md:text-3xl font-bold text-blue-500">
                        1급
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cert 2 */}
                <div ref={cert2Ref} className="opacity-0">
                  <div className="bg-white rounded-xl p-5 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white text-lg shadow-sm">
                          ✓
                        </div>
                        <h4 className="text-lg md:text-xl font-semibold text-gray-800">
                          SNS광고마케터
                        </h4>
                      </div>
                      <p className="text-2xl md:text-3xl font-bold text-purple-500">
                        1급
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cert 3 */}
                <div ref={cert3Ref} className="opacity-0">
                  <div className="bg-white rounded-xl p-5 border border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white text-lg shadow-sm">
                          ✓
                        </div>
                        <h4 className="text-lg md:text-xl font-semibold text-gray-800">
                          마케팅 대행
                        </h4>
                      </div>
                      <p className="text-2xl md:text-3xl font-bold text-green-500">
                        250+
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: CEO Message Preview with Hover Effect */}
            <div ref={ceoNameRef} className="opacity-0">
              <div className="relative bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200 h-full group hover:shadow-xl transition-all duration-300">
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">
                  High 그리고, dynamics의 시작
                </h3>

                {/* Scrollable Message Content */}
                <div className="h-[400px] overflow-y-auto scrollbar-hidden pr-4 text-gray-700 leading-relaxed space-y-5">
                  <p className="text-base md:text-lg">
                    단순히 빠르고 크게 성장하는 것만이 목표가 아닙니다.
                  </p>
                  <p className="text-base md:text-lg">
                    성장하는 과정에 있어 서로의 이야기를 듣고,
                    <br />
                    진심으로 공감하며, 정확한 해결방안을 찾고,
                    <br />
                    신속히 적용시키는 것에 대해 진짜 의미가 있습니다.
                  </p>
                  <p className="text-base md:text-lg">
                    이렇듯 소비자의 대한 존중과 가치를 바라며
                    <br />
                    함께 감에 있어 공존된 성장을 추구하고
                    <br />
                    지금 이 순간도 여전히 우리는 성장하고 있습니다.
                  </p>
                  <p className="text-base md:text-lg">
                    이어서 우리의 문제가 나의 삶, 나의 가족에게
                    <br />
                    행복을 가져다주기 위해 HD컴퍼니는 존재합니다.
                  </p>
                  <p className="text-base md:text-lg">
                    단순한 광고상품과 혜택을 제공하는 것이 아닌,
                    <br />
                    힘들 때 한번이라도 이겨낼 수 있는 힘을 부여하고,
                    <br />
                    그럼에도 웃을 수 있는 행복을 판매하는 것이며,
                    <br />
                    그동안 여러분의 힘들고 우울했던 날들은
                    <br />
                    HD컴퍼니가 구매합니다.
                  </p>
                </div>

                {/* Hover overlay with "더 보기" button */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl flex items-end justify-center pb-10">
                  <button className="bg-white text-gray-900 font-semibold px-10 py-4 rounded-full shadow-2xl hover:bg-gray-50 transition-all duration-300 transform translate-y-6 group-hover:translate-y-0">
                    더 보기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section
        ref={section8Ref}
        className="relative min-h-screen w-full flex items-center justify-center py-20"
      >
        {/* Dynamic background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl px-8 space-y-16">
          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Result 1 */}
            <div ref={result1Ref} className="opacity-0">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-2xl">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                  플레이스 1 페이지
                </h3>
              </div>
            </div>

            {/* Result 2 */}
            <div ref={result2Ref} className="opacity-0">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-2xl">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                  꾸준한 매출 상승
                </h3>
              </div>
            </div>

            {/* Result 3 */}
            <div ref={result3Ref} className="opacity-0">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-2xl">
                  <span className="text-3xl">👥</span>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                  끊이지 않는 손님들
                </h3>
              </div>
            </div>

            {/* Result 4 */}
            <div ref={result4Ref} className="opacity-0">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-2xl">
                  <span className="text-3xl">⏰</span>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                  끝이 안보이는 웨이팅
                </h3>
              </div>
            </div>
          </div>

          {/* Final strong message */}
          <div ref={finalMessageRef} className="opacity-0 text-center py-16">
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-1 shadow-2xl">
              <div className="relative bg-gray-900 rounded-3xl px-12 md:px-16 py-12 md:py-16 overflow-hidden">
                {/* Background icons - diverse professions */}
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                  <div
                    className="absolute top-[10%] left-[5%] text-6xl animate-pulse"
                    style={{ animationDelay: "0s" }}
                  >
                    👨‍👩‍👧‍👦
                  </div>
                  <div
                    className="absolute top-[20%] right-[8%] text-5xl animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  >
                    👨‍🍳
                  </div>
                  <div
                    className="absolute top-[60%] left-[10%] text-5xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                  >
                    👨‍⚕️
                  </div>
                  <div
                    className="absolute bottom-[15%] right-[12%] text-6xl animate-pulse"
                    style={{ animationDelay: "1.5s" }}
                  >
                    👨‍⚖️
                  </div>
                  <div
                    className="absolute top-[40%] right-[5%] text-5xl animate-pulse"
                    style={{ animationDelay: "2s" }}
                  >
                    👨‍💼
                  </div>
                  <div
                    className="absolute bottom-[20%] left-[8%] text-5xl animate-pulse"
                    style={{ animationDelay: "2.5s" }}
                  >
                    👨‍🔧
                  </div>
                  <div
                    className="absolute top-[15%] left-[50%] text-5xl animate-pulse"
                    style={{ animationDelay: "3s" }}
                  >
                    👨‍🏫
                  </div>
                  <div
                    className="absolute bottom-[40%] left-[15%] text-6xl animate-pulse"
                    style={{ animationDelay: "3.5s" }}
                  >
                    👨‍🌾
                  </div>
                  <div
                    className="absolute top-[50%] right-[18%] text-5xl animate-pulse"
                    style={{ animationDelay: "4s" }}
                  >
                    👨‍💻
                  </div>
                  <div
                    className="absolute bottom-[10%] left-[40%] text-5xl animate-pulse"
                    style={{ animationDelay: "4.5s" }}
                  >
                    👨‍🎨
                  </div>
                </div>

                {/* Text with enhanced visibility */}
                <div className="relative z-10 bg-transparent backdrop-blur-xs rounded-2xl py-8 px-6">
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 leading-tight drop-shadow-[0_0_40px_rgba(147,51,234,0.8)]">
                    이제 더 이상
                    <br />남 이야기가 아닙니다
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Final Closing */}
      <section
        ref={section9Ref}
        className="relative min-h-screen w-full flex items-center justify-center py-20"
      >
        {/* Warm background */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50 via-yellow-50 to-white">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-orange-200 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-yellow-200 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl px-8 space-y-16 text-center">
          {/* Second line - strong emphasis */}
          <div ref={closingLine2Ref} className="opacity-0 py-12">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              우리는 모두가 사랑하는
              <br />
              방식으로 성장합니다.
            </h1>
          </div>

          {/* Subtle accent */}
          <div className="pt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Contact Banner - Fixed at bottom */}
      <ContactBanner />
    </main>
  );
}
