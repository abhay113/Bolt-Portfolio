import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/abhay113",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abhaychavan346",
    icon: LinkedinIcon,
  },
]

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/40 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8 text-center"
        >
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Let's build something together
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Open to opportunities and interesting projects.
            </p>
          </div>

          <a
            href="mailto:abhaychavan346@gmail.com"
            className="group inline-flex items-center gap-3 rounded-lg border border-border/60 bg-background/50 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-primary/5"
          >
            <Mail className="size-5 transition-colors group-hover:text-primary" />
            Get in touch
          </a>

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-md border border-border/40 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <link.icon className="size-4" />
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>

          <div className="h-px w-full max-w-xs bg-border/40" />

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Abhay Chavan. Built with React,
            Three.js & Framer Motion.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
