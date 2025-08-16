"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { TrendingUp } from "lucide-react"

interface ProgressChartProps {
  period: string
}

const data = [
  { date: "Jan 1", weight: 75, bodyFat: 18, muscle: 42 },
  { date: "Jan 8", weight: 74.5, bodyFat: 17.8, muscle: 42.2 },
  { date: "Jan 15", weight: 74.2, bodyFat: 17.5, muscle: 42.5 },
  { date: "Jan 22", weight: 73.8, bodyFat: 17.2, muscle: 42.8 },
  { date: "Jan 29", weight: 73.5, bodyFat: 17, muscle: 43 },
  { date: "Feb 5", weight: 73.2, bodyFat: 16.8, muscle: 43.2 },
  { date: "Feb 12", weight: 72.8, bodyFat: 16.5, muscle: 43.5 },
]

export function ProgressChart({ period }: ProgressChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          <span>Body Composition Progress</span>
        </CardTitle>
        <CardDescription>Track your weight, body fat, and muscle mass over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            weight: {
              label: "Weight (kg)",
              color: "hsl(var(--chart-1))",
            },
            bodyFat: {
              label: "Body Fat (%)",
              color: "hsl(var(--chart-2))",
            },
            muscle: {
              label: "Muscle Mass (kg)",
              color: "hsl(var(--chart-3))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="date" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="weight"
                stroke="var(--color-chart-1)"
                strokeWidth={2}
                dot={{ fill: "var(--color-chart-1)" }}
              />
              <Line
                type="monotone"
                dataKey="bodyFat"
                stroke="var(--color-chart-2)"
                strokeWidth={2}
                dot={{ fill: "var(--color-chart-2)" }}
              />
              <Line
                type="monotone"
                dataKey="muscle"
                stroke="var(--color-chart-3)"
                strokeWidth={2}
                dot={{ fill: "var(--color-chart-3)" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
