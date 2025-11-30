"use client";

import React, { useState } from "react";

interface MindMapNode {
  title: string;
  content: string[];
}

interface MindMapProps {
  title: string;
  data: MindMapNode[];
  onNodeClick?: (node: MindMapNode) => void;
}

// 2단계 노드 (중간 관리자)
function SecondLevelNode({
  node,
  index,
  onNodeClick,
}: {
  node: MindMapNode;
  index: number;
  onNodeClick?: (node: MindMapNode) => void;
}) {
  const colors = [
    {
      bg: "bg-blue-100",
      icon: "bg-blue-200",
      text: "text-gray-900",
    },
    {
      bg: "bg-cyan-50",
      icon: "bg-cyan-100",
      text: "text-gray-900",
    },
    {
      bg: "bg-purple-100",
      icon: "bg-purple-200",
      text: "text-gray-900",
    },
  ];

  const colorScheme = colors[index % colors.length];

  const handleClick = () => {
    onNodeClick?.(node);
  };

  return (
    <div className="flex flex-col items-center relative">
      {/* 2단계 노드 박스 */}
      <button
        onClick={handleClick}
        className={`${colorScheme.bg} ${colorScheme.text} rounded-lg px-6 py-4 shadow-md hover:shadow-lg transition-all duration-300 min-w-[200px] max-w-[250px] relative z-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400`}
      >
        <div className="flex items-center gap-3">
          {/* 아이콘 */}
          <div
            className={`${colorScheme.icon} rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {/* 텍스트 */}
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-base leading-tight">{node.title}</h3>
          </div>
        </div>
      </button>

      {/* 연결선 - 아래로 */}
      {node.content.length > 0 && (
        <div className="w-0.5 h-6 bg-gray-300 mt-2"></div>
      )}

      {/* 3단계 노드들 (팀장들) */}
      {node.content.length > 0 && (
        <div className="relative flex flex-col items-center gap-3 mt-2">
          {node.content.map((item, itemIdx) => (
            <div key={itemIdx} className="flex flex-col items-center relative">
              {/* 연결선 - 위로 */}
              <div className="w-0.5 h-3 bg-gray-300 mb-1"></div>
              {/* 3단계 노드 박스 */}
              <div
                className={`${colorScheme.bg} ${colorScheme.text} rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300 min-w-[180px] max-w-[220px] relative z-10`}
              >
                <div className="flex items-center gap-2">
                  {/* 작은 아이콘 */}
                  <div
                    className={`${colorScheme.icon} rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  {/* 텍스트 */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium leading-tight">{item}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function MindMap({ title, data, onNodeClick }: MindMapProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!data || data.length === 0) return null;

  return (
    <div className="w-full py-8 overflow-x-auto">
      <div className="min-w-full">
        {/* Root Node (Title) - 클릭 가능한 아코디언 */}
        <div className="flex justify-center mb-10">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl px-8 py-6 shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-gray-700 cursor-pointer focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50"
          >
            <div className="flex items-center justify-center gap-3">
              <h2 className="text-2xl md:text-3xl font-bold text-center">
                {title}
              </h2>
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* 조직도 컨텐츠 - 아코디언 애니메이션 */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className={`${isOpen ? "block" : "hidden"}`}>
            {/* 연결선 - 루트에서 2단계로 */}
            <div className="flex justify-center mb-6">
              <div className="w-0.5 h-8 bg-gray-400"></div>
            </div>

            {/* 2단계 노드들 - 가로 배치 (COO, CFO, CTO 스타일) */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
              {data.map((node, index) => (
                <SecondLevelNode
                  key={index}
                  node={node}
                  index={index}
                  onNodeClick={onNodeClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
