import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function GET(request: Request) {
      const { searchParams } = new URL(request.url);
      const supabase = createRouteHandlerClient({ cookies })
      const from = Number(searchParams.get("page"));

      const { data: pages } = await supabase
            .from('posts')
            .select(`
                  *,
                  authors ( name )
            `)
            .range(from || 0, from + 6)
      return NextResponse.json({
            items: pages
      });
}
