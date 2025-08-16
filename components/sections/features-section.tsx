import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, BarChart3, Users, Zap, Target, Shield } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "AI Personal Trainer",
    description: "Advanced AI creates personalized workout routines that adapt to your progress and preferences",
    color: "text-primary",
    bgColor: "from-primary/10 to-primary/5",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track your progress with detailed analytics and insights powered by machine learning",
    color: "text-secondary",
    bgColor: "from-secondary/10 to-secondary/5",
  },
  {
    icon: Users,
    title: "Community Challenges",
    description: "Join global fitness challenges and compete with users worldwide",
    color: "text-accent",
    bgColor: "from-accent/10 to-accent/5",
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description: "Get real-time form corrections and performance feedback during workouts",
    color: "text-primary",
    bgColor: "from-primary/10 to-primary/5",
  },
  {
    icon: Target,
    title: "Goal Optimization",
    description: "AI-driven goal setting and achievement tracking for maximum results",
    color: "text-secondary",
    bgColor: "from-secondary/10 to-secondary/5",
  },
  {
    icon: Shield,
    title: "Injury Prevention",
    description: "Smart algorithms detect potential injury risks and adjust workouts accordingly",
    color: "text-accent",
    bgColor: "from-accent/10 to-accent/5",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Features
          </Badge>
          <h2 className="text-4xl md:text-6xl font-serif font-black mb-6">
            Powered by <span className="text-primary">Intelligence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the next generation of fitness technology with features designed to maximize your potential
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.bgColor} flex items-center justify-center mb-4`}
                >
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
