import { authClient } from "@/lib/auth-client";
import { create } from "zustand";

interface AuthState {
    isValidating: boolean
    handleFaceBoookSignIn: () => Promise<void>;
}

export const UseAuthStore = create<AuthState>((set) => ({
    isValidating: false,

    handleFaceBoookSignIn: async () => {
        set({ isValidating: true })

        try {
            await authClient.signIn.social({
                provider: "facebook"
            })
        } catch (error) {
            console.log(error)
        } finally {
            set({ isValidating: false })
        }
    }
}))