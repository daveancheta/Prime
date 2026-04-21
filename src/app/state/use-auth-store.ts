import { authClient } from "@/lib/auth-client";
import { router } from "expo-router";
import { create } from "zustand";

interface AuthState {
    isValidating: boolean
    handleSignUpValidation: (name: string, email: string, password: string) => Promise<void>;
    handleSignInValidation: (email: string, password: string) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
    isValidating: false,

    handleSignUpValidation: async (name: string, email: string, password: string) => {
        set({ isValidating: true })

        try {
            await authClient.signUp.email({
                name, email, password
            })
        } catch (error) {
            console.log(error)
        } finally {
            set({ isValidating: false })
        }
    },

    handleSignInValidation: async (email: string, password: string) => {
        set({ isValidating: true })

        try {
            await authClient.signIn.email({
                email, password
            })
        } catch (error) {
            console.log(error)
        } finally {
            set({ isValidating: false })
        }
    }
}))