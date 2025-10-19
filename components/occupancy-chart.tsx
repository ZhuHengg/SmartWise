"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const mockData = {
  AB: [
    { time: "8:00", occupancy: 45 },
    { time: "9:00", occupancy: 62 },
    { time: "10:00", occupancy: 55 },
    { time: "11:00", occupancy: 48 },
    { time: "12:00", occupancy: 70 },
    { time: "1:00", occupancy: 68 },
    { time: "2:00", occupancy: 52 },
    { time: "3:00", occupancy: 58 },
    { time: "4:00", occupancy: 78 },
    { time: "5:00", occupancy: 82 },
    { time: "6:00", occupancy: 65 },
  ],
  BA: [
    { time: "8:00", occupancy: 50 },
    { time: "9:00", occupancy: 65 },
    { time: "10:00", occupancy: 58 },
    { time: "11:00", occupancy: 52 },
    { time: "12:00", occupancy: 72 },
    { time: "1:00", occupancy: 70 },
    { time: "2:00", occupancy: 55 },
    { time: "3:00", occupancy: 60 },
    { time: "4:00", occupancy: 80 },
    { time: "5:00", occupancy: 85 },
    { time: "6:00", occupancy: 68 },
  ],
}

type OccupancyChartProps = {
  route: string
}

export function OccupancyChart({ route }: OccupancyChartProps) {
  const data = mockData[route as keyof typeof mockData] || mockData.AB

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="time" stroke="#64748b" style={{ fontSize: "12px" }} />
          <YAxis
            stroke="#64748b"
            style={{ fontSize: "12px" }}
            domain={[0, 100]}
            label={{
              value: "Occupancy (%)",
              angle: -90,
              position: "insideLeft",
              style: { fontSize: "12px", fill: "#64748b" },
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              fontSize: "12px",
            }}
          />
          <Line
            type="monotone"
            dataKey="occupancy"
            stroke="#2563eb"
            strokeWidth={2}
            dot={{ fill: "#2563eb", r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
