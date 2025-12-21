"use client";

import { useState } from "react";

interface NaverFloatingButtonProps {
  username?: string;
}

export function NaverFloatingButton({
  username = "",
}: NaverFloatingButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  function handleClick() {
    // 카카오톡 채널 채팅 페이지로 이동
    // window.open(`https://blog.naver.com/${username}`, "_blank");
    alert("서비스 연동 준비중입니다!");
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-52 right-6 z-50 flex flex-row justify-center items-center gap-3 bg-[#1DC300] hover:bg-[#1DC300] text-[#3C1E1E] font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out group p-2"
      aria-label="카카오톡 채널 상담"
    >
      {/* 카카오톡 아이콘 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
      >
        <script />
        <path
          d="M14.5038 19.5652L9.43226 11.7609V19.5652H4.12451V4.5H9.51101L14.5825 12.2878V4.5H19.8745V19.5652H14.5038Z"
          fill="white"
        />
      </svg>
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
      <span className="absolute inset-0 rounded-full bg-[#1DC300] animate-ping opacity-30 pointer-events-none" />
    </button>
  );
}

export default NaverFloatingButton;
