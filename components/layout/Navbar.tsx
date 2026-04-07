"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { navLinks } from "@/lib/data"
import ThemeToggle from "@/components/ui/ThemeToggle"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white dark:bg-bg-dark shadow-md"
            : "bg-white dark:bg-bg-dark"
        }`}
        role="navigation"
        aria-label="Navigation principale"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/icone-willenock.png"
                alt="Willenock Essou"
                width={40}
                height={40}
                priority
                className="w-10 h-10 object-contain"
                quality={85}
              />
              <span className="font-display font-bold text-xl text-text-heading dark:text-white">
                Willenock<span className="text-primary">.</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-display text-sm font-medium text-text-body dark:text-text-dark hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <ThemeToggle />
              <a
                href="https://wa.me/2290157729738"
                className="bg-primary text-white font-display text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Travailler avec moi
              </a>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                className="p-2 text-text-heading dark:text-white"
                onClick={() => setMobileOpen(true)}
                aria-label="Ouvrir le menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-white dark:bg-bg-dark shadow-xl p-6">
            <button
              className="absolute top-4 right-4 p-2 text-text-heading dark:text-white"
              onClick={() => setMobileOpen(false)}
              aria-label="Fermer le menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col gap-6 mt-12">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-display text-lg font-medium text-text-heading dark:text-white hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/2290157729738"
                className="bg-primary text-white font-display text-base font-medium px-6 py-3 rounded-lg text-center hover:bg-primary-dark transition-colors mt-4"
                onClick={() => setMobileOpen(false)}
              >
                Travailler avec moi
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
