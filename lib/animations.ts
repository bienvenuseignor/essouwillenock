import { useEffect, useState } from "react"

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])
  return reduced
}

// Détecte si l'utilisateur préfère des performances élevées
export function useHighPerformanceMode(): boolean {
  const [isHighPerf, setIsHighPerf] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce), (update: slow)")
    setIsHighPerf(mq.matches)
  }, [])
  return isHighPerf
}
