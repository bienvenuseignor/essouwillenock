import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { ADMIN_PASSWORD } from "@/lib/admin"

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { password } = body

  if (password === ADMIN_PASSWORD) {
    const cookieStore = await cookies()
    cookieStore.set("admin_auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
      path: "/",
    })
    return NextResponse.json({ success: true })
  }

  return NextResponse.json(
    { error: "Mot de passe incorrect" },
    { status: 401 }
  )
}
