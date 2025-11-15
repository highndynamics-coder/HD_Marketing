"use client";

import ROASBarChart from "@/components/ROASBarChart";
import TrendLineChart from "@/components/LineChart";
import FunnelAreaChart from "@/components/FunnelChart";
import BudgetPieChart from "@/components/PieChart";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      {/* 페이지 제목 */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Marketing Performance Dashboard
        </h1>
        <p className="text-muted-foreground mt-1">
          주요 마케팅 성과 지표를 한눈에 확인하세요.
        </p>
      </div>

      {/* 전체 KPI 영역 (자리만 잡아두기) */}
      <section className="grid grid-cols-4 gap-4">
        <div className="p-4 rounded-xl border bg-white">
          <p className="text-sm text-gray-500">Total Spend</p>
          <h2 className="text-xl font-semibold">₩1,240,000</h2>
        </div>
        <div className="p-4 rounded-xl border bg-white">
          <p className="text-sm text-gray-500">Total Revenue</p>
          <h2 className="text-xl font-semibold">₩4,890,000</h2>
        </div>
        <div className="p-4 rounded-xl border bg-white">
          <p className="text-sm text-gray-500">Avg ROAS</p>
          <h2 className="text-xl font-semibold">3.94</h2>
        </div>
        <div className="p-4 rounded-xl border bg-white">
          <p className="text-sm text-gray-500">Conversions</p>
          <h2 className="text-xl font-semibold">452</h2>
        </div>
      </section>

      {/* 2열 차트: ROAS 비교 + 예산 분배 */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border bg-white shadow-sm">
          <h3 className="text-lg font-semibold mb-4">플랫폼별 ROAS 비교</h3>
          <ROASBarChart />
        </div>

        <div className="p-6 rounded-xl border bg-white shadow-sm">
          <h3 className="text-lg font-semibold mb-4">예산 분배 비율</h3>
          <BudgetPieChart />
        </div>
      </section>

      {/* 2열 차트: 매출/비용 트렌드 + 퍼널 */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border bg-white shadow-sm">
          <h3 className="text-lg font-semibold mb-4">일별 매출/비용 추이</h3>
          <TrendLineChart />
        </div>

        <div className="p-6 rounded-xl border bg-white shadow-sm">
          <h3 className="text-lg font-semibold mb-4">고객 행동 흐름 퍼널</h3>
          <FunnelAreaChart />
        </div>
      </section>
    </div>
  );
}
