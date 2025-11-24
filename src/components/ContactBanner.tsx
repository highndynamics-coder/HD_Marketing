"use client";

import { useState } from "react";
import { FileTextIcon, TrashIcon } from "@radix-ui/react-icons";

export const ContactBanner = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = () => {
    console.log("Form submitted:", { name, contact });
  };

  const handleClear = () => {
    setName("");
    setContact("");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-blue-600 px-6 py-4 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center gap-6">
        {/* Left: Icon and Text */}
        <div className="flex items-center gap-3 text-white">
          <FileTextIcon className="h-6 w-6 flex-shrink-0" />
          <span className="whitespace-nowrap text-sm font-medium">
            빠른 마케팅 상담 신청이 필요하세요?
          </span>
        </div>

        {/* Middle: Input Fields */}
        <div className="flex flex-1 items-center gap-4">
          <input
            type="text"
            placeholder="성함을 입력하세요."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 rounded-md border border-blue-500 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="tel"
            placeholder="연락처를 입력하세요."
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="flex-1 rounded-md border border-blue-500 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* Right: Submit Button */}
        <button
          onClick={handleSubmit}
          className="rounded-md bg-blue-700 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          신청하기
        </button>

        <button
          onClick={handleClear}
          className="flex items-center gap-2 text-white transition-colors hover:text-blue-200 focus:outline-none"
          aria-label="Clear form"
        >
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
