import { motion } from "framer-motion"
import { Wallet, ArrowUpRight } from "lucide-react"
import { GithubIcon } from "@/components/icons"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TiltCard } from "@/components/tilt-card"

type Project = {
  name: string
  description: string
  tags: string[]
  icon: typeof Wallet
  github?: string
}

const PROJECTS: Project[] = [
  {
    name: "Wally",
    description:
      "An independent backend wallet-engine built on Keycloak for authentication, Supabase for data persistence, and the Stellar blockchain network for transaction processing. Designed for scalability and secure financial operations.",
    tags: ["Keycloak", "Supabase", "Stellar", "Backend"],
    icon: Wallet,
    github: "https://github.com/abhay113",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="text-sm font-medium text-primary">04 — Projects</span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Highlighted Projects
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          A selection of work I'm proud of — built independently with a focus on
          real-world utility.
        </p>
      </motion.div>

      <div className="grid gap-6">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <TiltCard intensity={7}>
              <Card className="group relative overflow-hidden border-border/40 bg-card/30 backdrop-blur-sm transition-shadow hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <CardContent className="relative pt-6">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                      <project.icon className="size-7 text-primary" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-xl font-semibold text-foreground">
                          {project.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex size-9 items-center justify-center rounded-md border border-border/40 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                            >
                              <GithubIcon className="size-4" />
                            </a>
                          )}
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex size-9 items-center justify-center rounded-md border border-border/40 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                          >
                            <ArrowUpRight className="size-4" />
                          </a>
                        </div>
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="border-border/50 text-muted-foreground"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
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
