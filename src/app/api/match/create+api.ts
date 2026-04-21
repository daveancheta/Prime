import { authClient } from "@/lib/auth-client"
import { supabase } from "@/utils/supabase"

export async function POST(req: Request) {
    const { name, mode, game_mode, visibility, created_by } = await req.json()
    

    try {
        const { data, error } =await supabase
            .from('lobby')
            .insert({
                id: crypto.randomUUID(),
                name,
                mode,
                game_mode,
                visibility,
                created_by
            })

        return Response.json({
            success: true,
            error
        }, { status: 200 })
    } catch (error) {
        console.log(error)

        return Response.json({
            success: false
        }, { status: 400 })
    }
}