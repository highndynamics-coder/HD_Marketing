"use client";

import { useState } from "react";
import { useResponsive } from "@/lib/useResponsive";

interface KakaoFloatingButtonProps {
  channelId?: string;
}

export function KakaoFloatingButton({
  channelId = "_qxceQn",
}: KakaoFloatingButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { isMobile, isTablet } = useResponsive();
  function handleClick() {
    // 카카오톡 채널 채팅 페이지로 이동
    window.open(`https://pf.kakao.com/${channelId}`, "_blank");
  }

  if (isMobile || isTablet) {
    return (
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed bottom-36 right-5 z-50 flex flex-row justify-center items-center gap-3 bg-[#FEE500] hover:bg-[#FFD600] text-[#3C1E1E] font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out group p-2"
        aria-label="카카오톡 채널 상담"
      >
        {/* 카카오톡 아이콘 */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 3C6.477 3 2 6.463 2 10.731c0 2.735 1.828 5.136 4.568 6.487l-.926 3.41a.5.5 0 0 0 .769.544l3.98-2.643c.52.063 1.05.096 1.609.096 5.523 0 10-3.463 10-7.731C22 6.463 17.523 3 12 3Z"
            fill="#3C1E1E"
          />
        </svg>

        {/* 호버 시 나타나는 텍스트 */}
        <span
          className="whitespace-nowrap overflow-hidden transition-all duration-300 ease-out"
          style={{
            maxWidth: isHovered ? "120px" : "0px",
            opacity: isHovered ? 1 : 0,
            display: isHovered ? "block" : "none",
          }}
        >
          상담하기
        </span>

        {/* 펄스 애니메이션 효과 */}
        <span className="absolute inset-0 rounded-full bg-[#FEE500] animate-ping opacity-30 pointer-events-none" />
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-36 right-6 z-50 flex flex-row justify-center items-center gap-3 bg-[#FEE500] hover:bg-[#FFD600] text-[#3C1E1E] font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out group p-2"
      aria-label="카카오톡 채널 상담"
    >
      {/* 카카오톡 아이콘 */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 3C6.477 3 2 6.463 2 10.731c0 2.735 1.828 5.136 4.568 6.487l-.926 3.41a.5.5 0 0 0 .769.544l3.98-2.643c.52.063 1.05.096 1.609.096 5.523 0 10-3.463 10-7.731C22 6.463 17.523 3 12 3Z"
          fill="#3C1E1E"
        />
      </svg>

      {/* 호버 시 나타나는 텍스트 */}
      <span
        className="whitespace-nowrap overflow-hidden transition-all duration-300 ease-out"
        style={{
          maxWidth: isHovered ? "120px" : "0px",
          opacity: isHovered ? 1 : 0,
          display: isHovered ? "block" : "none",
        }}
      >
        상담하기
      </span>

      {/* 펄스 애니메이션 효과 */}
      <span className="absolute inset-0 rounded-full bg-[#FEE500] animate-ping opacity-30 pointer-events-none" />
    </button>
  );
}

export default KakaoFloatingButton;
