"use client"

import { motion } from "framer-motion"
import SectionTitle from "@/components/ui/SectionTitle"
import Card from "@/components/ui/Card"
import Badge from "@/components/ui/Badge"
import { services } from "@/lib/data"
import { useReducedMotion } from "@/lib/animations"

export default function Services() {
  const t = useReducedMotion() ? 0 : 1

  return (
    <section id="services" className="py-20 md:py-28 bg-bg-alt dark:bg-bg-dark-alt" aria-label="Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Mes offres"
          title="Formations & Services"
          subtitle="Des solutions adaptées à ton niveau et tes objectifs. Choisis celle qui te correspond."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: t * 0.7, delay: t * index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card
                className={`h-full flex flex-col relative bg-white dark:bg-bg-dark border-border dark:border-border-dark ${
                  service.popular ? "border-primary shadow-lg shadow-primary/10" : ""
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="primary">{service.badge}</Badge>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-display font-bold text-xl text-text-heading dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-text-body dark:text-text-dark text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="font-display font-bold text-3xl text-primary">
                    {service.price}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-text-body dark:text-text-dark">
                      <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={service.link}
                  target={service.link.startsWith("http") ? "_blank" : undefined}
                  rel={service.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`block w-full text-center font-display font-medium px-6 py-3 rounded-lg transition-colors ${
                    service.popular
                      ? "bg-primary text-white hover:bg-primary-dark"
                      : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  {service.cta}
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
