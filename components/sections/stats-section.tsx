"use client"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"

export function StatsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto text-center">
        <Badge variant="outline" className="mb-8">
          {t("landing.stats.trusted")}
        </Badge>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-4xl md:text-5xl font-serif font-black text-primary mb-2">1.2K+</div>
            <div className="text-muted-foreground">{t("landing.stats.users")}</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-serif font-black text-secondary mb-2">8.5K+</div>
            <div className="text-muted-foreground">{t("landing.stats.workouts")}</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-serif font-black text-accent mb-2">94%</div>
            <div className="text-muted-foreground">{t("landing.stats.success")}</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-serif font-black text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">{t("landing.stats.support")}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
