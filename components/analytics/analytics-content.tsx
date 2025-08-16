"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProgressChart } from "./progress-chart"
import { WorkoutHeatmap } from "./workout-heatmap"
import { NutritionChart } from "./nutrition-chart"
import { PerformanceMetrics } from "./performance-metrics"
import { AnalyticsHeader } from "./analytics-header"
import { Activity, Target, Flame, Heart, Dumbbell, Clock, Award } from "lucide-react"

export function AnalyticsContent() {
  const [selectedPeriod, setSelectedPeriod] = useState("7d")

  return (
    <div className="min-h-screen bg-background">
      <AnalyticsHeader />

      <main className="container mx-auto px-4 py-8">
        {/* Period Selector */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-serif font-black mb-2">Health Analytics</h1>
            <p className="text-muted-foreground">Track your progress and optimize your performance</p>
          </div>
          <div className="flex space-x-2">
            {["7d", "30d", "90d", "1y"].map((period) => (
              <Button
                key={period}
                variant={selectedPeriod === period ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPeriod(period)}
                className={selectedPeriod === period ? "glow-primary" : "bg-transparent"}
              >
                {period === "7d" ? "7 Days" : period === "30d" ? "30 Days" : period === "90d" ? "90 Days" : "1 Year"}
              </Button>
            ))}
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          <Card className="border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Activity className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Workouts</span>
              </div>
              <div className="text-2xl font-bold">24</div>
              <div className="text-xs text-green-500">+12% vs last period</div>
            </CardContent>
          </Card>

          <Card className="border-secondary/20">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Flame className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">Calories</span>
              </div>
              <div className="text-2xl font-bold">8.2k</div>
              <div className="text-xs text-green-500">+8% vs last period</div>
            </CardContent>
          </Card>

          <Card className="border-accent/20">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Duration</span>
              </div>
              <div className="text-2xl font-bold">18h</div>
              <div className="text-xs text-green-500">+15% vs last period</div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Avg HR</span>
              </div>
              <div className="text-2xl font-bold">142</div>
              <div className="text-xs text-muted-foreground">bpm</div>
            </CardContent>
          </Card>

          <Card className="border-secondary/20">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Target className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">Goals</span>
              </div>
              <div className="text-2xl font-bold">85%</div>
              <div className="text-xs text-green-500">+5% vs last period</div>
            </CardContent>
          </Card>

          <Card className="border-accent/20">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Streak</span>
              </div>
              <div className="text-2xl font-bold">12</div>
              <div className="text-xs text-muted-foreground">days</div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="workouts">Workouts</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <ProgressChart period={selectedPeriod} />
              <WorkoutHeatmap />
            </div>
            <PerformanceMetrics />
          </TabsContent>

          <TabsContent value="workouts" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Dumbbell className="w-5 h-5 text-primary" />
                    <span>Workout Distribution</span>
                  </CardTitle>
                  <CardDescription>Breakdown of your workout types</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Strength Training", percentage: 45, color: "bg-primary" },
                      { name: "Cardio", percentage: 30, color: "bg-secondary" },
                      { name: "HIIT", percentage: 15, color: "bg-accent" },
                      { name: "Flexibility", percentage: 10, color: "bg-muted" },
                    ].map((workout) => (
                      <div key={workout.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{workout.name}</span>
                          <span>{workout.percentage}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className={`${workout.color} h-2 rounded-full transition-all duration-500`}
                            style={{ width: `${workout.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Workouts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { name: "Upper Body Strength", date: "Today", duration: "45 min", calories: 320 },
                    { name: "HIIT Cardio", date: "Yesterday", duration: "30 min", calories: 280 },
                    { name: "Full Body", date: "2 days ago", duration: "60 min", calories: 450 },
                    { name: "Yoga Flow", date: "3 days ago", duration: "40 min", calories: 180 },
                  ].map((workout, index) => (
                    <div key={index} className="p-3 bg-card border border-border rounded-lg">
                      <div className="font-medium text-sm">{workout.name}</div>
                      <div className="text-xs text-muted-foreground">{workout.date}</div>
                      <div className="flex justify-between text-xs mt-1">
                        <span>{workout.duration}</span>
                        <span>{workout.calories} cal</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="nutrition" className="space-y-6">
            <NutritionChart />
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <PerformanceMetrics detailed />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
