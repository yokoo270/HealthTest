"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts"
import { Apple, Droplets } from "lucide-react"

const macroData = [
  { name: "Protein", value: 30, color: "hsl(var(--chart-1))" },
  { name: "Carbs", value: 45, color: "hsl(var(--chart-2))" },
  { name: "Fats", value: 25, color: "hsl(var(--chart-3))" },
]

const weeklyNutrition = [
  { day: "Mon", calories: 2100, protein: 140, carbs: 250, fats: 70 },
  { day: "Tue", calories: 2200, protein: 150, carbs: 260, fats: 75 },
  { day: "Wed", calories: 1950, protein: 130, carbs: 220, fats: 65 },
  { day: "Thu", calories: 2300, protein: 160, carbs: 280, fats: 80 },
  { day: "Fri", calories: 2150, protein: 145, carbs: 240, fats: 72 },
  { day: "Sat", calories: 2400, protein: 165, carbs: 300, fats: 85 },
  { day: "Sun", calories: 2000, protein: 135, carbs: 230, fats: 68 },
]

export function NutritionChart() {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Apple className="w-5 h-5 text-primary" />
            <span>Macro Distribution</span>
          </CardTitle>
          <CardDescription>Your average macronutrient breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              protein: { label: "Protein", color: "hsl(var(--chart-1))" },
              carbs: { label: "Carbs", color: "hsl(var(--chart-2))" },
              fats: { label: "Fats", color: "hsl(var(--chart-3))" },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={macroData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {macroData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>

          <div className="grid grid-cols-3 gap-4 mt-4">
            {macroData.map((macro) => (
              <div key={macro.name} className="text-center">
                <div className="w-4 h-4 rounded-full mx-auto mb-1" style={{ backgroundColor: macro.color }} />
                <div className="text-sm font-medium">{macro.name}</div>
                <div className="text-xs text-muted-foreground">{macro.value}%</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Droplets className="w-5 h-5 text-secondary" />
            <span>Weekly Intake</span>
          </CardTitle>
          <CardDescription>Daily calorie and macro intake this week</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              calories: { label: "Calories", color: "hsl(var(--chart-1))" },
              protein: { label: "Protein (g)", color: "hsl(var(--chart-2))" },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyNutrition}>
                <XAxis dataKey="day" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="calories" fill="var(--color-chart-1)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
