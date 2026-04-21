import { generateId } from "@/hooks/useGenerateId";
import { authClient } from "@/lib/auth-client"
import { supabase } from "@/utils/supabase";
import { create } from "zustand"

interface MatchState {
    isValidating: boolean,
    handleCreateLobbyValidation: (name: string, mode: string, game_mode: string, visibility: string) => Promise<{ success: boolean; error?: any }>
}

export const useMatchStore = create<MatchState>((set) => ({
    isValidating: false,

    handleCreateLobbyValidation: async (name, mode, game_mode, visibility) => {
        set({ isValidating: true });

        try {
            const { data: session } = await authClient.getSession()

            const { data, error } = await supabase
                .from('lobby')
                .insert({
                    id: generateId(),
                    name,
                    mode,
                    game_mode,
                    visibility,
                    created_by: session?.user.id
                })

            if (error) {
                console.log(error)
                return { success: false, error }  
            }

            return { success: true, data }  
        } catch (error) {
            console.log(error)

            return {
                success: false
            }
        } finally {
            set({ isValidating: false })
        }
    }
}))