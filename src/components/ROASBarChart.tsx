"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { platform: "Meta", roas: 420 },
  { platform: "Google", roas: 310 },
  { platform: "TikTok", roas: 190 },
  { platform: "Naver", roas: 280 },
];

export default function ROASBarChart() {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="platform" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="roas" fill="#3b82f6" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
