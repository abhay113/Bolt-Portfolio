import { motion } from "framer-motion"
import {
  Atom,
  Server,
  Database,
  Container,
  Coffee,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { TiltCard } from "@/components/tilt-card"
import { cn } from "@/lib/utils"

type SkillGroup = {
  category: string
  icon: typeof Atom
  skills: { name: string; description: string }[]
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend",
    icon: Atom,
    skills: [
      { name: "React.js", description: "Component-driven UI architecture" },
      { name: "Node.js", description: "JavaScript runtime for server-side logic" },
    ],
  },
  {
    category: "Backend & API",
    icon: Server,
    skills: [
      { name: "Fastify", description: "High-performance web framework" },
      { name: "Prisma", description: "Type-safe ORM & database toolkit" },
    ],
  },
  {
    category: "Databases & Auth",
    icon: Database,
    skills: [
      { name: "PostgreSQL", description: "Relational database management" },
      { name: "Keycloak", description: "Identity & access management" },
      { name: "Supabase", description: "Backend-as-a-service platform" },
    ],
  },
  {
    category: "DevOps & Infra",
    icon: Container,
    skills: [
      { name: "Docker", description: "Containerized deployments" },
      { name: "Nginx", description: "Reverse proxy & load balancing" },
    ],
  },
  {
    category: "Other",
    icon: Coffee,
    skills: [
      { name: "Java", description: "Academic & foundational knowledge" },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="text-sm font-medium text-primary">02 — Skills</span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Skills & Tech Stack
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          The tools and technologies I use to build and ship full-stack
          applications end to end.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={cn(
              "group",
              idx === SKILL_GROUPS.length - 1 && "sm:col-span-2 lg:col-span-1"
            )}
          >
            <TiltCard intensity={8}>
              <Card className="h-full border-border/40 bg-card/30 backdrop-blur-sm transition-shadow group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/5">
                <CardContent className="pt-6">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-md bg-primary/10">
                      <group.icon className="size-5 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">
                      {group.category}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between rounded-md border border-border/30 bg-background/30 px-3 py-2.5"
                      >
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.description}
                        </span>
                      </div>
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
