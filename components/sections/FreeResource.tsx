"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import SectionTitle from "@/components/ui/SectionTitle"
import { useReducedMotion } from "@/lib/animations"

export default function FreeResource() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const t = useReducedMotion() ? 0 : 1

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "guide" }),
      })
      if (res.ok) setSubmitted(true)
    } catch {
      // silent fail
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 md:py-28 bg-bg-alt dark:bg-bg-dark-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: t * 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white dark:bg-bg-dark border border-border dark:border-border-dark rounded-3xl p-8 md:p-12 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>

              <SectionTitle
                label="Ressource gratuite"
                title="Télécharge ton guide gratuit"
                subtitle="Les 7 stratégies secrètes pour passer de 0 à 1000 abonnés engagés sur Facebook en 30 jours."
              />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-success/10 rounded-xl p-6"
                >
                  <svg className="w-12 h-12 text-success mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="font-display font-semibold text-text-heading dark:text-white">
                    Merci ! Vérifie ta boîte mail.
                  </p>
                  <p className="text-text-body dark:text-text-dark text-sm mt-1">
                    Ton guide arrive dans quelques minutes.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ton adresse email"
                      required
                      className="flex-1 px-4 py-3 border border-border dark:border-border-dark bg-white dark:bg-bg-dark-alt text-text-body dark:text-text-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body placeholder:text-text-body/50 dark:placeholder:text-text-dark-muted"
                      aria-label="Adresse email"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-primary text-white font-display font-medium px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "Envoi en cours..." : "Recevoir le guide"}
                    </button>
                  </div>
                  <p className="text-xs text-text-body/60 dark:text-text-dark-muted mt-3">
                    Pas de spam. Désabonnement en un clic.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
