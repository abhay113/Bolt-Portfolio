import { motion } from "framer-motion"
import { Briefcase, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TiltCard } from "@/components/tilt-card"

type Experience = {
  role: string
  company: string
  period: string
  current?: boolean
  highlights: string[]
}

const EXPERIENCES: Experience[] = [
  {
    role: "Software Engineer",
    company: "CICD Systems Pvt Ltd",
    period: "Feb 2026 – Present",
    current: true,
    highlights: [
      "Optimized an application feature flag system by implementing an endpointRoute JSON column mapped to an in-memory cache with an automated refresh trigger.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Cateina Technologies",
    period: "1.6 years · concluded Nov 2025",
    current: false,
    highlights: [
      "Contributed to full-stack application development and maintenance across multiple client projects.",
      "Collaborated on backend services, API design, and database operations in a team environment.",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="text-sm font-medium text-primary">03 — Experience</span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Professional Experience
        </h2>
      </motion.div>

      <div className="space-y-6">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <TiltCard intensity={6}>
              <Card className="border-border/40 bg-card/30 backdrop-blur-sm transition-shadow hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-primary/10">
                        {exp.current ? (
                          <Zap className="size-5 text-primary" />
                        ) : (
                          <Briefcase className="size-5 text-primary" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="mt-0.5 text-sm text-muted-foreground">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 sm:items-end">
                      <span className="text-sm text-muted-foreground">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <Badge className="bg-primary/15 text-primary">
                          Current
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="mt-5 space-y-2.5 border-l border-border/40 pl-4">
                    {exp.highlights.map((highlight, i) => (
                      <p
                        key={i}
                        className="text-sm leading-relaxed text-muted-foreground"
                      >
                        {highlight}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
