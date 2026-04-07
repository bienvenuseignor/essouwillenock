"use client"

import { motion } from "framer-motion"
import Card from "@/components/ui/Card"
import { useReducedMotion } from "@/lib/animations"

const painPoints = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "Tu postes mais personne ne voit",
    description: "Tu passes des heures à créer du contenu, mais tes publications n'atteignent que 50 personnes. L'algorithme te ignore et tu ne comprends pas pourquoi.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Tu ne sais pas quoi publier",
    description: "Tu manques d'idées, tu n'as pas de ligne éditoriale claire. Chaque jour c'est le stress de trouver quoi poster, et au final tu ne postes rien.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Tes abonnés ne deviennent pas clients",
    description: "Tu as des followers, mais ton contenu ne génère ni leads ni ventes. Ta communauté grandit mais ton portefeuille reste vide.",
  },
]

export default function PainPoints() {
  const t = useReducedMotion() ? 0 : 1

  return (
    <section className="py-20 md:py-28 bg-bg-alt dark:bg-bg-dark-alt" aria-label="Problèmes courants">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-display font-medium text-sm tracking-[0.08em] uppercase text-primary mb-4 block">
            Tu te reconnais ?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Ces frustrations, je les connais
          </h2>
          <div className="w-[60px] h-1 bg-primary mx-auto mb-6 rounded-full" aria-hidden="true" />
          <p className="text-lg text-text-body dark:text-text-dark">
            Si au moins une de ces situations te parle, alors tu es exactement là où tu dois être.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: t * 0.7, delay: t * index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="h-full bg-white dark:bg-bg-dark border-border dark:border-border-dark">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6" aria-hidden="true">
                  {point.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-text-heading dark:text-white mb-3">
                  {point.title}
                </h3>
                <p className="text-text-body dark:text-text-dark leading-relaxed">{point.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: t * 0.7, delay: t * 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-12"
        >
          <p className="text-text-body dark:text-text-dark text-lg mb-6">
            Bonne nouvelle : <span className="font-semibold text-text-heading dark:text-white">chacun de ces problèmes a une solution.</span>
          </p>
          <a
            href="#method"
            className="inline-flex items-center gap-2 text-primary font-display font-semibold hover:gap-3 transition-all"
          >
            Découvrir ma méthode
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
