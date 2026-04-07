"use client"

import { motion } from "framer-motion"
import SectionTitle from "@/components/ui/SectionTitle"
import Card from "@/components/ui/Card"
import { methodSteps } from "@/lib/data"
import { useReducedMotion } from "@/lib/animations"

const stepIcons: Record<string, React.ReactNode> = {
  target: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  pen: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  ),
  users: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  trending: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
}

export default function Method() {
  const t = useReducedMotion() ? 0 : 1

  return (
    <section id="method" className="py-20 md:py-28 bg-white dark:bg-bg-dark" aria-label="Méthode">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Ma méthode"
          title="La méthode W — De l'invisible à l'incontournable"
          subtitle="Un processus éprouvé en 4 étapes pour transformer ta présence en ligne en machine à attirer des clients."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {methodSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: t * 0.7, delay: t * index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="h-full relative bg-white dark:bg-bg-dark-alt border-border dark:border-border-dark">
                {index < methodSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 text-primary/30" aria-hidden="true">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display font-bold text-sm text-primary bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </span>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary" aria-hidden="true">
                    {stepIcons[step.icon]}
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl text-text-heading dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-text-body dark:text-text-dark leading-relaxed text-sm">
                  {step.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: t * 0.7, delay: t * 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/2290157729738"
            className="inline-flex items-center gap-2 bg-primary text-white font-display font-medium px-8 py-3.5 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Appliquer la méthode W
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
