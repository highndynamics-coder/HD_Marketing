"use client";

import { useState } from "react";
import Image from "next/image";

interface InstagramFloatingButtonProps {
  username?: string;
}

export function InstagramFloatingButton({
  username = "high_n_dynamics?igsh=MTY1dnVjeXhjMTUxeg==",
}: InstagramFloatingButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  function handleClick() {
    window.open(`https://www.instagram.com/${username}`, "_blank");
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-20 right-6 z-50 flex flex-row justify-center items-center gap-3 bg-purple-500 text-[#3C1E1E] font-medium rounded-full shadow-lg hover:shadow-xl hover:p-1 transition-all duration-300 ease-out group"
      aria-label="카카오톡 채널 상담"
    >
      {/* 인스타그램 아이콘 */}
      <Image
        src="/images/InstaLogo.png"
        alt="Instagram"
        width={48}
        height={48}
        fetchPriority="high"
        quality={100}
        unoptimized
      />

      {/* 호버 시 나타나는 텍스트 */}
      <span
        className="whitespace-nowrap overflow-hidden transition-all duration-300 ease-out text-white"
        style={{
          maxWidth: isHovered ? "120px" : "0px",
          opacity: isHovered ? 1 : 0,
          display: isHovered ? "block" : "none",
        }}
      >
        상담하기
      </span>

      {/* 펄스 애니메이션 효과 */}
      <span className="absolute inset-0 rounded-full bg-[#833AB4] animate-ping opacity-30 pointer-events-none" />
    </button>
  );
}

export default InstagramFloatingButton;
