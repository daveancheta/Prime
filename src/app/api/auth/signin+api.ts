import { auth } from "@/lib/auth";

export async function POST(req: Request) {
    const { email, password } = await req.json();
    try {
        await auth.api.signInEmail({
            body: { email, password }
        })

        return Response.json({
            success: true
        }, { status: 200 })
    } catch (error) {
        console.log(error)
        
        return Response.json({
            success: false
        }, { status: 400 })
    }
}