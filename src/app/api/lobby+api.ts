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

export async function POST(req: Request) {
    const { clan_name, tier, region, slot, image, status } = await req.json()

    try {
        const {error} = await supabase 
        .from('recruitment')
        .insert({
            id: crypto.randomUUID(),
            clan_name, 
            tier, 
            region, 
            slot, 
            image, 
            status,
            created_by: "2ew52JNIc2IadtR4kLszULvttK77bP9m"
        })
         return Response.json({
            success: true,
            error
        })
    } catch (error) {
        return Response.json({
            success: false
        })
    }
}