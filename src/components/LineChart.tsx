"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { day: "01", spend: 100, revenue: 300 },
  { day: "02", spend: 130, revenue: 340 },
  { day: "03", spend: 120, revenue: 360 },
  { day: "04", spend: 140, revenue: 390 },
  { day: "05", spend: 110, revenue: 410 },
];

export default function TrendLineChart() {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="spend"
            stroke="#f97316"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#22c55e"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
