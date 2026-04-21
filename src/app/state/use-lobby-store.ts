import { generateId } from "@/hooks/useGenerateId"
import { authClient } from "@/lib/auth-client"
import { supabase } from "@/utils/supabase"
import { create } from "zustand"

interface Lobby {
    id: string;
    name: string;
    mode: string;
    game_mode: string;
    visibility: string;
    created_by: string;
    created_at: Date;
    updated_at: Date;
    user: {
        id: string;
        name: string;
        email: string;
        image: string;
        created_at: Date;
        updated_at: Date;
        email_verified: boolean;
    }
}

interface LobbyState {
    isValidating: boolean,
    room: Lobby[]
    handleCreateLobbyValidation: (name: string, mode: string, game_mode: string, visibility: string) => Promise<void>
    handleGetLobby: () => Promise<void>;
}

export const useLobbyStore = create<LobbyState>((set) => ({
    isValidating: false,
    room: [],

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
        } catch (error) {
            console.log(error)
        } finally {
            set({ isValidating: false })
        }
    },

    handleGetLobby: async () => {
        try {
            const { data } = await supabase
                .from('lobby')
                .select(`*,
                user (*)`)

            set({ room: data ?? [] })
        } catch (error) {
            console.log(error)
        }
    }
}))