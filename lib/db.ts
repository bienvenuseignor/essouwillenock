import fs from "fs"
import path from "path"

const DATA_DIR = path.join(process.cwd(), "data")
const LEADS_FILE = path.join(DATA_DIR, "leads.json")
const CONTACTS_FILE = path.join(DATA_DIR, "contacts.json")
const NEWSLETTER_FILE = path.join(DATA_DIR, "newsletter.json")

function ensureDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
}

function readData<T>(file: string): T[] {
  ensureDir()
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, "[]", "utf-8")
    return []
  }
  try {
    return JSON.parse(fs.readFileSync(file, "utf-8"))
  } catch {
    return []
  }
}

function writeData<T>(file: string, data: T[]) {
  ensureDir()
  fs.writeFileSync(file, JSON.stringify(data, null, 2), "utf-8")
}

export interface Lead {
  id: string
  email: string
  source: string
  createdAt: string
}

export interface Contact {
  id: string
  name: string
  email: string
  message: string
  service: string
  createdAt: string
}

export interface Newsletter {
  id: string
  email: string
  createdAt: string
}

export const db = {
  leads: {
    list: () => readData<Lead>(LEADS_FILE),
    add: (lead: Omit<Lead, "id" | "createdAt">) => {
      const data = readData<Lead>(LEADS_FILE)
      if (data.some((l) => l.email === lead.email)) return null
      const newLead: Lead = {
        ...lead,
        id: Date.now().toString(36) + Math.random().toString(36).slice(2),
        createdAt: new Date().toISOString(),
      }
      data.unshift(newLead)
      writeData(LEADS_FILE, data)
      return newLead
    },
    count: () => readData<Lead>(LEADS_FILE).length,
  },
  contacts: {
    list: () => readData<Contact>(CONTACTS_FILE),
    add: (contact: Omit<Contact, "id" | "createdAt">) => {
      const data = readData<Contact>(CONTACTS_FILE)
      const newContact: Contact = {
        ...contact,
        id: Date.now().toString(36) + Math.random().toString(36).slice(2),
        createdAt: new Date().toISOString(),
      }
      data.unshift(newContact)
      writeData(CONTACTS_FILE, data)
      return newContact
    },
    count: () => readData<Contact>(CONTACTS_FILE).length,
  },
  newsletter: {
    list: () => readData<Newsletter>(NEWSLETTER_FILE),
    add: (entry: Omit<Newsletter, "id" | "createdAt">) => {
      const data = readData<Newsletter>(NEWSLETTER_FILE)
      if (data.some((n) => n.email === entry.email)) return null
      const newEntry: Newsletter = {
        ...entry,
        id: Date.now().toString(36) + Math.random().toString(36).slice(2),
        createdAt: new Date().toISOString(),
      }
      data.unshift(newEntry)
      writeData(NEWSLETTER_FILE, data)
      return newEntry
    },
    count: () => readData<Newsletter>(NEWSLETTER_FILE).length,
  },
}
