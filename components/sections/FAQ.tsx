"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SectionTitle from "@/components/ui/SectionTitle"
import { faqData } from "@/lib/data"
import { useReducedMotion } from "@/lib/animations"

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)
  const t = useReducedMotion() ? 0 : 1

  return (
    <section id="faq" className="py-20 md:py-28 bg-white dark:bg-bg-dark" aria-label="Questions fréquentes">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="FAQ"
          title="Questions fréquentes"
          subtitle="Tout ce que tu dois savoir avant de te lancer."
        />

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: t * 0.6, delay: t * index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="border border-border dark:border-border-dark rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-bg-alt/50 dark:hover:bg-bg-dark-alt/50 transition-colors"
                aria-expanded={openId === item.id}
              >
                <span className="font-display font-semibold text-text-heading dark:text-white pr-4">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openId === item.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-5 pb-5 text-text-body dark:text-text-dark leading-relaxed text-sm border-t border-border dark:border-border-dark pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
