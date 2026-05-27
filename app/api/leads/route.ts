import { NextResponse } from "next/server"
import { z } from "zod"
import { createSupabaseAdminClient } from "@/lib/supabase/admin"

const leadSchema = z.object({
  name: z.string().trim().max(100).optional(),
  email: z.string().trim().email(),
  source: z.string().trim().max(50).optional(),
  note: z.string().trim().max(1000).optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = leadSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Invalid request body.",
          details: parsed.error.flatten(),
        },
        { status: 400 },
      )
    }

    const supabase = createSupabaseAdminClient()
    const { data, error } = await supabase
      .from("leads")
      .insert({
        name: parsed.data.name ?? null,
        email: parsed.data.email,
        source: parsed.data.source ?? "lp",
        note: parsed.data.note ?? null,
      })
      .select("id, email, created_at")
      .single()

    if (error) {
      return NextResponse.json(
        {
          ok: false,
          message: "Failed to save lead.",
          details: error.message,
        },
        { status: 500 },
      )
    }

    return NextResponse.json(
      {
        ok: true,
        message: "Lead saved successfully.",
        data,
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: "Unexpected error while saving lead.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
