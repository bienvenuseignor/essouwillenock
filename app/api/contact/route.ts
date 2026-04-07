import { NextRequest, NextResponse } from "next/server"
import { contactSchema } from "@/lib/validations"
import { db } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: "Données invalides", details: result.error.issues },
        { status: 400 }
      )
    }

    const { name, email, message, service = "General" } = result.data

    const contact = db.contacts.add({ name, email, message, service })

    return NextResponse.json(
      { success: true, message: "Message envoyé avec succès" },
      { status: 201 }
    )
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    )
  }
}

export async function GET() {
  const contacts = db.contacts.list()
  return NextResponse.json({ contacts, count: contacts.length })
}
