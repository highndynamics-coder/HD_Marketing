"use client";

import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const funnelData = [
  { step: "노출", value: 10000 },
  { step: "클릭", value: 2300 },
  { step: "랜딩 진입", value: 1400 },
  { step: "장바구니", value: 500 },
  { step: "구매", value: 180 },
];

export default function FunnelAreaChart() {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer>
        <AreaChart data={funnelData}>
          <XAxis dataKey="step" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            fill="#60a5fa"
            stroke="#2563eb"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
