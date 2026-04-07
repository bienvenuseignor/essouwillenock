"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Button from "@/components/ui/Button"
import { heroStats } from "@/lib/data"
import { useReducedMotion } from "@/lib/animations"

export default function Hero() {
  const rm = useReducedMotion()
  const t = rm ? 0 : 1

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-bg-dark" aria-label="Introduction">
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
        animate={{ scale: [1, 1.05, 1], opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: t * 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              className="font-display font-medium text-sm tracking-[0.08em] uppercase text-primary mb-6 block"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: t * 0.8, delay: t * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Coach & Formateur en Création de Contenu
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-heading dark:text-white leading-[1.1] mb-6">
              Transforme ton expertise en{" "}
              <span className="text-primary">audience qui achète</span>
            </h1>

            <p className="text-lg text-text-body dark:text-text-dark leading-relaxed mb-8 max-w-xl">
              Je coache les freelances et auto-entrepreneurs à créer du contenu stratégique pour bâtir une communauté engagée, fidèle et rentable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button href="https://wa.me/2290157729738" variant="primary" aria-label="Contacter Willenock sur WhatsApp">
                Travailler avec moi
              </Button>
              <Button href="#services" variant="outline">
                Voir mes ressources
              </Button>
            </div>

            <div className="flex flex-wrap gap-8">
              {heroStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: t * 0.8, delay: t * (0.4 + i * 0.08), ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="font-display font-bold text-2xl text-primary">{stat.value}</div>
                  <div className="text-sm text-text-body dark:text-text-dark-muted">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: t * 1, delay: t * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: t * 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl shadow-primary/25">
                <Image
                  src="/images/willenock-hero.webp"
                  alt="Willenock Essou - Coach et Formateur en création de contenu"
                  width={480}
                  height={480}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white dark:bg-bg-dark-alt rounded-2xl shadow-lg p-4 border border-border dark:border-border-dark"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: t * 0.8, delay: t * 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center" aria-hidden="true">
                    <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-text-heading dark:text-white">500+ formés</p>
                    <p className="text-xs text-text-body dark:text-text-dark-muted">Apprenants satisfaits</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 bg-white dark:bg-bg-dark-alt rounded-2xl shadow-lg p-4 border border-border dark:border-border-dark"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: t * 0.8, delay: t * 0.7, ease: [0.16, 1, 0.3, 1] }}
                role="img"
                aria-label="Note de 4.9 sur 5"
              >
                <div className="flex items-center gap-2">
                  <div className="flex" aria-hidden="true">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-4 h-4 text-accent fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-display font-semibold text-sm text-text-heading dark:text-white">4.9/5</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
