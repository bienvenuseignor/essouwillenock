"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
        >
          <div className="bg-white/95 dark:bg-bg-dark/95 backdrop-blur-md border-t border-border dark:border-border-dark px-4 py-3">
            <div className="flex gap-3">
              <a
                href="https://wa.me/2290157729738?text=Bonjour%20Willenock%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20un%20accompagnement."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-primary text-white font-display font-semibold text-sm px-4 py-3 rounded-lg text-center hover:bg-primary-dark transition-colors"
              >
                Travailler avec moi
              </a>
              <a
                href="https://willenock-m-essou.mymaketou.store/products/facebook-dominator"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border-2 border-primary text-primary font-display font-semibold text-sm px-4 py-3 rounded-lg text-center hover:bg-primary hover:text-white transition-colors"
              >
                Facebook Dominator
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
