import { Suspense, lazy } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { Skeleton } from "@/components/ui/skeleton"
import { useIsMobile } from "@/hooks/use-mobile"

const ParticleField = lazy(() =>
  import("@/components/three/particle-field").then((m) => ({ default: m.ParticleField }))
)

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

function ParticleLoader() {
  return <Skeleton className="absolute inset-0" />
}

export function HeroSection() {
  const isMobile = useIsMobile()

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        {!isMobile ? (
          <Suspense fallback={<ParticleLoader />}>
            <ParticleField className="absolute inset-0" />
          </Suspense>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 rounded-full border border-border/60 bg-background/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm"
        >
          Full-Stack Developer · 2+ Years Experience
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl text-4xl font-extrabold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Abhay Chavan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 max-w-2xl text-base text-muted-foreground text-balance sm:text-lg md:text-xl"
        >
          Building scalable backend engines and immersive frontend experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-lg border border-border/60 bg-background/50 px-5 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-primary/5"
            >
              <link.icon className="size-5 transition-colors group-hover:text-primary" />
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </motion.a>
    </section>
  )
}
