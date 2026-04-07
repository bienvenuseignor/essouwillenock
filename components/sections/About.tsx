"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import SectionTitle from "@/components/ui/SectionTitle"
import { useReducedMotion } from "@/lib/animations"

export default function About() {
  const t = useReducedMotion() ? 0 : 1

  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-bg-dark" aria-label="À propos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Qui suis-je"
          title="De créateur à coach : mon histoire"
          subtitle="Passionné par le pouvoir du contenu, j'ai transformé ma propre expérience en méthode pour aider d'autres freelances à réussir."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: t * 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/willenock-about.webp"
                alt="Willenock Essou - Coach et Formateur"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="font-display font-bold text-xl text-white">Willenock Essou</p>
                <p className="text-white/80 mt-1">Coach & Formateur</p>
                <div className="flex gap-3 justify-center mt-4" role="list" aria-label="Valeurs">
                  {["Authenticité", "Stratégie", "Impact"].map((v) => (
                    <span key={v} className="bg-white/20 text-white text-xs font-display font-medium px-3 py-1 rounded-full backdrop-blur-sm" role="listitem">{v}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: t * 0.8, delay: t * 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-6 text-text-body dark:text-text-dark leading-relaxed">
              <p>
                <span className="font-display font-semibold text-text-heading dark:text-white text-lg">
                  Il y a quelques années, j'étais exactement là où tu es.
                </span>
              </p>
              <p>
                Freelance avec des compétences solides, mais invisible en ligne. Je postais de temps en temps, sans stratégie, sans résultats. Mon contenu ne parlait à personne et mon téléphone ne sonnait pas.
              </p>
              <p>
                Puis j'ai compris quelque chose de fondamental : <span className="font-semibold text-text-heading dark:text-white">le contenu n'est pas un art, c'est une stratégie.</span> J'ai commencé à appliquer une approche méthodique — clarté du message, régularité, engagement authentique — et tout a changé.
              </p>
              <p>
                En quelques mois, j'ai bâti une communauté engagée, multiplié mes clients par 5, et surtout, j'ai créé un business qui tourne même quand je dors.
              </p>
              <p>
                Aujourd'hui, ma mission est simple : <span className="font-semibold text-primary">aider les freelances et auto-entrepreneurs africains à faire la même transformation.</span> Parce que le talent seul ne suffit plus — il faut être vu, entendu et choisi.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-6" role="list" aria-label="Statistiques">
                {[
                  { number: "4+", label: "Années d'expérience" },
                  { number: "500+", label: "Personnes formées" },
                  { number: "98%", label: "Taux de satisfaction" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: t * 0.6, delay: t * (0.3 + i * 0.08), ease: [0.16, 1, 0.3, 1] }}
                    className="text-center"
                    role="listitem"
                  >
                    <div className="font-display font-bold text-2xl text-primary">{stat.number}</div>
                    <div className="text-xs text-text-body dark:text-text-dark-muted mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
