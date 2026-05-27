import { NextResponse } from "next/server"
import { createSupabaseServerClient } from "@/lib/supabase/server"

export async function GET() {
  const hasRequiredEnv =
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) &&
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

  if (!hasRequiredEnv) {
    return NextResponse.json(
      {
        ok: false,
        message: "Supabase environment variables are missing.",
      },
      { status: 500 },
    )
  }

  try {
    const supabase = await createSupabaseServerClient()
    const { error } = await supabase.from("leads").select("id").limit(1)

    if (error) {
      return NextResponse.json(
        {
          ok: false,
          message: "Supabase is reachable, but leads table check failed.",
          details: error.message,
        },
        { status: 500 },
      )
    }

    return NextResponse.json({
      ok: true,
      message: "Application and Supabase are connected.",
    })
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: "Unexpected error during health check.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
