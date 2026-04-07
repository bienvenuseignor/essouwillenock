"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminLoginPage() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      })

      if (res.ok) {
        router.push("/admin")
        router.refresh()
      } else {
        const data = await res.json()
        setError(data.error || "Erreur de connexion")
      }
    } catch {
      setError("Erreur de connexion au serveur")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-bg-alt dark:bg-bg-dark flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-bg-dark rounded-2xl border border-border dark:border-border-dark p-8">
          <div className="text-center mb-8">
            <h1 className="font-display font-bold text-2xl text-text-heading dark:text-white">
              Administration
            </h1>
            <p className="text-text-body dark:text-text-dark-muted mt-2">
              Connecte-toi pour accéder au dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text-heading dark:text-white mb-2">
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-border dark:border-border-dark rounded-lg bg-white dark:bg-bg-dark-alt text-text-body dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Entre le mot de passe"
                required
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm" role="alert">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white font-display font-medium py-3 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
            >
              {loading ? "Connexion..." : "Se connecter"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
