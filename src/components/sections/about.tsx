import { motion } from "framer-motion"
import { GraduationCap, Code2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="text-sm font-medium text-primary">01 — About</span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          About Me
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <Card className="border-border/40 bg-card/30 backdrop-blur-sm">
          <CardContent className="space-y-6 pt-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a Full-Stack Developer with over{" "}
              <span className="font-semibold text-foreground">
                2 years of professional experience
              </span>{" "}
              building and deploying robust, production-grade web applications.
              I specialize in the MERN stack and take pride in crafting scalable
              backend engines alongside clean, responsive frontend experiences.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-lg border border-border/40 bg-background/40 p-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <GraduationCap className="size-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    B.Sc. Computer Science
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Foundational academic background in computer science
                    principles and software engineering.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-border/40 bg-background/40 p-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <Code2 className="size-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Full-Stack Engineering
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    End-to-end development — from database design and API
                    architecture to polished user interfaces.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
