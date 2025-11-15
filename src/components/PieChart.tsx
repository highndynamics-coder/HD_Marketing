"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Meta", value: 40 },
  { name: "Google", value: 25 },
  { name: "TikTok", value: 20 },
  { name: "Naver", value: 15 },
];

const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444"];

export default function BudgetPieChart() {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
            dataKey="value"
          >
            {data.map((entry, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
