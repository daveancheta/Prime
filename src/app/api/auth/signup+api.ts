import { auth } from "@/lib/auth";

export async function POST(req: Request) {
    const { name, email, password } = await req.json();
    try {
        await auth.api.signUpEmail({
            body: {
                name,
                email,
                password
            }
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