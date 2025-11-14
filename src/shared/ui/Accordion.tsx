"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import clsx from "clsx";

interface AccordionProps {
  title: string;
  content: string[];
  initialState?: boolean;
  disabled?: boolean;
  titleBackgroundColor?: string;
  contentBackgroundColor?: string;
}

const Accordion = ({
  title,
  content,
  initialState,
  disabled = false,
  titleBackgroundColor,
  contentBackgroundColor,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(initialState || false);

  const toggleAccordion = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm border border-gray-200/50 transition-all duration-300 hover:shadow-lg hover:border-gray-300/50">
      <button
        className={clsx(
          "w-full flex justify-between items-center gap-4 px-6 md:px-8 py-5 md:py-6 text-left transition-all duration-300",
          disabled && "cursor-not-allowed opacity-50",
          !disabled &&
            "hover:bg-gradient-to-r hover:from-gray-50/50 hover:to-transparent",
          titleBackgroundColor
        )}
        onClick={toggleAccordion}
        disabled={disabled}
      >
        <span className="text-lg md:text-xl font-bold text-gray-900 flex-1 pr-4">
          {title}
        </span>
        <div
          className={clsx(
            "flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center transition-all duration-300",
            isOpen &&
              "rotate-180 bg-gradient-to-br from-purple-200 to-blue-200",
            !disabled && "group-hover:scale-110"
          )}
        >
          <ChevronDownIcon className="w-5 h-5 text-gray-700 transition-transform duration-300" />
        </div>
      </button>

      <div
        className={clsx(
          "overflow-hidden transition-all duration-500 ease-in-out",
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div
          className={clsx(
            "px-6 md:px-8 pb-6 md:pb-8 pt-2 space-y-4",
            contentBackgroundColor ||
              "bg-gradient-to-b from-white/50 to-gray-50/30"
          )}
        >
          {content.map((item, index) => (
            <div
              key={index}
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-gradient-to-r before:from-purple-400 before:to-blue-400"
            >
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
