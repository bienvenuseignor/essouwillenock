import { NextRequest, NextResponse } from "next/server"
import { newsletterSchema } from "@/lib/validations"
import { db } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const result = newsletterSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: "Données invalides", details: result.error.issues },
        { status: 400 }
      )
    }

    const { email } = result.data

    const entry = db.newsletter.add({ email })

    if (!entry) {
      return NextResponse.json(
        { error: "Cet email est déjà abonné" },
        { status: 409 }
      )
    }

    return NextResponse.json(
      { success: true, message: "Abonnement réussi" },
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
  const subscribers = db.newsletter.list()
  return NextResponse.json({ subscribers, count: subscribers.length })
}
