"use client";

import { useState } from "react";

interface HdItem {
  letter: string;
  word: string;
  description: string;
  highlightWord: string;
}

const hdItems: HdItem[] = [
  {
    letter: "H",
    word: "HIGH",
    description: "마케팅의 궁극적인 목표인 성장에 집중합니다.",
    highlightWord: "성장",
  },
  {
    letter: "D",
    word: "DYNAMICS",
    description: "마케팅의 궁극적인 목표인 동적성에 집중합니다.",
    highlightWord: "동적성",
  },
];

export function HdAcronym() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const selectedItem = hdItems[selectedIndex];

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center py-20 overflow-hidden">
      {/* Background with starry texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        {/* Starry effect */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-300"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
        {/* Left: GROOVE Acronym */}
        <div className="flex flex-col gap-4 md:gap-6">
          {hdItems.map((item, index) => {
            const isSelected = index === selectedIndex;

            return (
              <button
                key={`${item.letter}-${index}`}
                onClick={() => setSelectedIndex(index)}
                onMouseEnter={() => setSelectedIndex(index)}
                className="text-left transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  {/* Large letter */}
                  <span
                    className={`text-4xl md:text-5xl lg:text-6xl font-bold transition-all duration-300 ${
                      isSelected ? "text-blue-400" : "text-blue-600/30"
                    }`}
                  >
                    {item.letter}
                  </span>

                  {/* Word */}
                  <span
                    className={`text-xl md:text-2xl lg:text-3xl font-semibold transition-all duration-300 ${
                      isSelected
                        ? "text-white font-bold"
                        : "text-white/40 font-normal"
                    }`}
                    style={{
                      WebkitTextStroke: isSelected
                        ? "none"
                        : "1px rgba(255, 255, 255, 0.3)",
                      WebkitTextFillColor: isSelected ? "white" : "transparent",
                    }}
                  >
                    {item.word.slice(1)}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Description */}
        <div className="flex-1 max-w-2xl">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/20 shadow-2xl">
            <p className="text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed">
              {selectedItem.description
                .split(selectedItem.highlightWord)
                .map((part: string, index: number, array: string[]) => (
                  <span key={index}>
                    {part}
                    {index < array.length - 1 && (
                      <span className="text-blue-400 font-semibold">
                        {selectedItem.highlightWord}
                      </span>
                    )}
                  </span>
                ))}
            </p>
          </div>
        </div>
      </div>

      {/* Twinkle animation */}
      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
