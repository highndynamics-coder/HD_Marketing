"use client";

import { useState } from "react";
import Image from "next/image";
import { useResponsive } from "@/lib/useResponsive";

interface InstagramFloatingButtonProps {
  username?: string;
}

export function InstagramFloatingButton({
  username = "high_n_dynamics?igsh=MTY1dnVjeXhjMTUxeg==",
}: InstagramFloatingButtonProps) {
  const { isMobile, isTablet } = useResponsive();
  const [isHovered, setIsHovered] = useState(false);

  function handleClick() {
    window.open(`https://www.instagram.com/${username}`, "_blank");
  }

  if (isMobile || isTablet) {
    return (
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed bottom-24 right-4 z-50 flex flex-row justify-center items-center gap-3 bg-transparent text-[#3C1E1E] font-medium rounded-full shadow-lg  transition-all duration-300 ease-out group"
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
        {/* 펄스 애니메이션 효과 */}
        <span className="absolute inset-0 rounded-full bg-[#833AB4] animate-ping opacity-30 pointer-events-none" />
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-20 right-6 z-50 flex flex-row justify-center items-center gap-3 bg-transparent text-[#3C1E1E] font-medium rounded-full shadow-lg  transition-all duration-300 ease-out group"
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
      {/* 펄스 애니메이션 효과 */}
      <span className="absolute inset-0 rounded-full bg-[#833AB4] animate-ping opacity-30 pointer-events-none" />
    </button>
  );
}

export default InstagramFloatingButton;
