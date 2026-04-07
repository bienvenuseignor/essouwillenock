import { NextRequest, NextResponse } from "next/server"
import { leadSchema } from "@/lib/validations"
import { db } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const result = leadSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: "Données invalides", details: result.error.issues },
        { status: 400 }
      )
    }

    const { email, source = "guide" } = result.data

    const lead = db.leads.add({ email, source })

    if (!lead) {
      return NextResponse.json(
        { error: "Cet email est déjà enregistré" },
        { status: 409 }
      )
    }

    return NextResponse.json(
      { success: true, message: "Lead enregistré avec succès" },
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
  const leads = db.leads.list()
  return NextResponse.json({ leads, count: leads.length })
}
