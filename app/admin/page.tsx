import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { db } from "@/lib/db"

export default async function AdminPage() {
  const cookieStore = await cookies()
  const auth = cookieStore.get("admin_auth")

  if (!auth || auth.value !== "true") {
    redirect("/admin/login")
  }

  const leads = db.leads.list()
  const contacts = db.contacts.list()
  const subscribers = db.newsletter.list()

  return (
    <div className="min-h-screen bg-bg-alt dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display font-bold text-3xl text-text-heading dark:text-white">
            Dashboard Admin
          </h1>
          <form action="/api/admin/logout" method="POST">
            <button
              type="submit"
              className="bg-red-500 text-white font-display text-sm font-medium px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Déconnexion
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-bg-dark rounded-2xl border border-border dark:border-border-dark p-6">
            <p className="text-sm text-text-body dark:text-text-dark-muted mb-1">Leads (Guide)</p>
            <p className="font-display font-bold text-4xl text-primary">{leads.length}</p>
          </div>
          <div className="bg-white dark:bg-bg-dark rounded-2xl border border-border dark:border-border-dark p-6">
            <p className="text-sm text-text-body dark:text-text-dark-muted mb-1">Messages reçus</p>
            <p className="font-display font-bold text-4xl text-primary">{contacts.length}</p>
          </div>
          <div className="bg-white dark:bg-bg-dark rounded-2xl border border-border dark:border-border-dark p-6">
            <p className="text-sm text-text-body dark:text-text-dark-muted mb-1">Abonnés newsletter</p>
            <p className="font-display font-bold text-4xl text-primary">{subscribers.length}</p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="font-display font-bold text-xl text-text-heading dark:text-white mb-4">
              Derniers leads
            </h2>
            <div className="bg-white dark:bg-bg-dark rounded-2xl border border-border dark:border-border-dark overflow-hidden">
              {leads.length === 0 ? (
                <p className="p-6 text-text-body dark:text-text-dark-muted text-center">Aucun lead pour le moment</p>
              ) : (
                <div className="divide-y divide-border dark:divide-border-dark">
                  {leads.slice(0, 10).map((lead) => (
                    <div key={lead.id} className="p-4 flex items-center justify-between">
                      <div>
                        <p className="font-medium text-text-heading dark:text-white">{lead.email}</p>
                        <p className="text-sm text-text-body dark:text-text-dark-muted">
                          Source: {lead.source} · {new Date(lead.createdAt).toLocaleDateString("fr-FR")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-text-heading dark:text-white mb-4">
              Derniers messages
            </h2>
            <div className="bg-white dark:bg-bg-dark rounded-2xl border border-border dark:border-border-dark overflow-hidden">
              {contacts.length === 0 ? (
                <p className="p-6 text-text-body dark:text-text-dark-muted text-center">Aucun message pour le moment</p>
              ) : (
                <div className="divide-y divide-border dark:divide-border-dark">
                  {contacts.slice(0, 10).map((contact) => (
                    <div key={contact.id} className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-text-heading dark:text-white">{contact.name}</p>
                        <span className="text-xs text-text-body dark:text-text-dark-muted">
                          {new Date(contact.createdAt).toLocaleDateString("fr-FR")}
                        </span>
                      </div>
                      <p className="text-sm text-text-body dark:text-text-dark-muted">{contact.email}</p>
                      <p className="text-sm text-text-heading dark:text-white mt-2">{contact.message}</p>
                      {contact.service && (
                        <span className="inline-block mt-2 bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                          {contact.service}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
