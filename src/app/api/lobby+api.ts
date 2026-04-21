import { supabase } from "@/utils/supabase"

export async function GET() {
    try {
        const { data } = await supabase
            .from('lobby')
            .select(`*,
                user (*)`)

        return Response.json({
            success: true,
            data
        })
    } catch (error) {
        return Response.json({
            success: false,
        })
    }
}