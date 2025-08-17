import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Alex M.",
    role: "Beta User",
    content:
      "The AI-powered workout suggestions are helpful for structuring my routine. Still exploring all features.",
    rating: 4,
    avatar: "/placeholder.svg",
  },
  {
    name: "Jordan K.",
    role: "Early Adopter",
    content:
      "Good analytics dashboard. The progress tracking helps me stay consistent with my workouts.",
    rating: 4,
    avatar: "/placeholder.svg",
  },
  {
    name: "Sam R.",
    role: "Fitness Beginner",
    content:
      "Easy to use interface. The personalized recommendations make it less intimidating to start.",
    rating: 4,
    avatar: "/placeholder.svg",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-6xl font-serif font-black mb-6">
            Early <span className="text-secondary">Reviews</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Feedback from our beta users and early community members
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
