"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { TrendingUp } from "lucide-react"
import { useAuth } from "@/components/auth/auth-provider"

interface ProgressChartProps {
  period: string
}


export function ProgressChart({ period }: ProgressChartProps) {
  const { user } = useAuth()

  // Generate data from user's daily stats or show empty state
  const data = user?.dailyStats?.slice(-30).map((stat, index) => ({
    date: new Date(stat.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    weight: stat.weight || (user?.weight ? Number(user.weight) : 0),
    bodyFat: 0, // No body fat data collected yet
    muscle: 0, // No muscle mass data collected yet
  })) || []

  if (data.length === 0) {
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
          <div className="h-[300px] flex items-center justify-center text-muted-foreground">
            No data available. Start logging your daily stats to see progress charts.
          </div>
        </CardContent>
      </Card>
    )
  }

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
