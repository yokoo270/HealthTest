"use client"
import { useState } from "react"
import { useAuth } from "@/components/auth/auth-provider"
import { useLanguage } from "@/components/language-provider"
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
  const { user, getWeekStats, getTodayStats } = useAuth()
  const { t } = useLanguage()

  const weekStats = getWeekStats()
  const todayStats = getTodayStats()
  const currentStreak = user?.currentStreak || 0
  const workoutHistory = user?.workoutHistory || []

  return (
    <div className="min-h-screen bg-background">
      <AnalyticsHeader />

      <main className="container mx-auto px-4 py-8">
        {/* Period Selector */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-serif font-black mb-2">{t("analytics.title")}</h1>
            <p className="text-muted-foreground">{t("analytics.subtitle")}</p>
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
              <div className="text-2xl font-bold">{weekStats.workouts}</div>
              <div className="text-xs text-muted-foreground">{weekStats.workouts > 0 ? 'This week' : 'No workouts logged'}</div>
            </CardContent>
          </Card>

          <Card className="border-secondary/20">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Flame className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">Calories</span>
              </div>
              <div className="text-2xl font-bold">{weekStats.calories}</div>
              <div className="text-xs text-muted-foreground">Calories burned</div>
            </CardContent>
          </Card>

          <Card className="border-accent/20">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Duration</span>
              </div>
              <div className="text-2xl font-bold">{Math.round((weekStats.workouts * 45) / 60)}h</div>
              <div className="text-xs text-muted-foreground">Estimated duration</div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Avg HR</span>
              </div>
              <div className="text-2xl font-bold">0</div>
              <div className="text-xs text-muted-foreground">No data</div>
            </CardContent>
          </Card>

          <Card className="border-secondary/20">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Target className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">Goals</span>
              </div>
              <div className="text-2xl font-bold">{(user?.userGoals?.filter(g => g.completed).length || 0)}/{(user?.userGoals?.length || 0)}</div>
              <div className="text-xs text-muted-foreground">Goals completed</div>
            </CardContent>
          </Card>

          <Card className="border-accent/20">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Streak</span>
              </div>
              <div className="text-2xl font-bold">{currentStreak}</div>
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
                  {workoutHistory.length === 0 ? (
                    <div className="p-3 text-center text-muted-foreground">
                      No workouts logged yet
                    </div>
                  ) : workoutHistory.slice(-4).reverse().map((workout, index) => (
                    <div key={index} className="p-3 bg-card border border-border rounded-lg">
                      <div className="font-medium text-sm">{workout.type}</div>
                      <div className="text-xs text-muted-foreground">{new Date(workout.date).toLocaleDateString()}</div>
                      <div className="flex justify-between text-xs mt-1">
                        <span>{workout.duration} min</span>
                        <span>{workout.caloriesBurned} cal</span>
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
