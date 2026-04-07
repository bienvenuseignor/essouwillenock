"use client"

import { motion } from "framer-motion"
import SectionTitle from "@/components/ui/SectionTitle"
import { testimonials } from "@/lib/data"
import { useReducedMotion } from "@/lib/animations"

export default function Testimonials() {
  const t = useReducedMotion() ? 0 : 1

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white dark:bg-bg-dark" aria-label="Témoignages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Témoignages"
          title="Ils ont transformé leur business"
          subtitle="Découvre les résultats concrets de freelances qui ont appliqué la méthode W."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: t * 0.7, delay: t * index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white dark:bg-bg-dark-alt border border-border dark:border-border-dark rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4" aria-label="5 étoiles sur 5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-accent fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-text-body dark:text-text-dark leading-relaxed mb-6 text-sm italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="bg-success/10 rounded-lg px-3 py-2 mb-6 inline-block">
                <span className="text-success font-display font-semibold text-sm">
                  {testimonial.result}
                </span>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border dark:border-border-dark">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-display font-bold text-sm" aria-hidden="true">
                  {testimonial.photo}
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-text-heading dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-text-body dark:text-text-dark-muted">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
