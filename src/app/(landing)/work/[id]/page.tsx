"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { useParams } from "next/navigation";
import Accordion from "@/shared/ui/Accordion";
import MindMap from "@/components/MindMap";

interface SelectedNode {
  title: string;
  content: string[];
}

export default function WorkDetailPage() {
  const { id } = useParams();
  const [selectedNode, setSelectedNode] = useState<SelectedNode | null>(null);
  const { data: workData, isLoading } = useQuery<any[]>({
    queryKey: ["work", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("process")
        .select("*")
        .eq("id", id);

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <main className="relative w-full min-h-screen overflow-x-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100">
        <div className="relative z-10 w-full flex items-center justify-center min-h-screen">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
            <p className="text-lg font-light text-gray-600">로딩 중...</p>
          </div>
        </div>
      </main>
    );
  }

  const work = workData?.[0];

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] w-full flex items-center justify-center py-20 md:py-32">
        <div className="relative z-10 w-full max-w-6xl px-6 md:px-8">
          <div className="flex flex-col gap-8 md:gap-12">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                {work?.title}
              </h1>
              {work?.content && (
                <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed max-w-4xl">
                  {work.content}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Work Details Section */}
      {work?.process && work.process.length > 0 && (
        <section className="relative w-full py-10 md:py-20">
          <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                상세 정보
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
            </div>

            <div className="flex flex-col gap-4">
              {work.process.map((pro: any, idx: number) => {
                const contentArray = Array.isArray(pro.content)
                  ? pro.content
                  : typeof pro.content === "string"
                    ? [pro.content]
                    : ["내용 예시"];

                return (
                  <Accordion
                    key={idx}
                    title={pro.title}
                    content={contentArray}
                  />
                );
              })}
            </div>
          </div>
        </section>
      )}

      {work?.analysis &&
        work.analysis.data &&
        Array.isArray(work.analysis.data) &&
        work.analysis.data.length > 0 && (
          <section className="relative w-full py-10 md:py-20">
            <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center tracking-tight">
              {work?.analysis?.title}
            </h4>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 mt-8">
              <div className="flex flex-row gap-6">
                {work.analysis.data.map((item: any, idx: number) => {
                  const branchNodes = Array.isArray(item.content)
                    ? item.content.map((contentItem: string) => ({
                        title: contentItem,
                        content: [],
                      }))
                    : [];

                  return (
                    <div key={idx} className="flex-1 min-w-0">
                      <MindMap
                        title={item.title}
                        data={branchNodes}
                        onNodeClick={(node) => {
                          if (selectedNode?.title === node.title) {
                            setSelectedNode(null);
                          } else {
                            setSelectedNode(node);
                          }
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

      {/* Node Description Section */}
      {selectedNode && (
        <section className="relative w-full py-10 md:py-20">
          <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-8">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 md:p-8 shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-300">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {selectedNode.title}
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {selectedNode.title}에 대한 상세 설명입니다. 이 영역에는 해당
                노드의 역할과 책임, 주요 기능 등에 대한 정보를 표시할 수
                있습니다.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Bottom Spacing */}
      <div className="h-20 md:h-32"></div>
    </main>
  );
}
