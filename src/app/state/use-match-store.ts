import { create } from "zustand"

interface MatchState {
    handleCreateLobbyValidation: (name: string, mode: string, game_mode: string, visibility: string) => Promise<void>
}

export const useMatchStore = create<MatchState>((set) => ({
    handleCreateLobbyValidation: async (name: string, mode: string, game_mode: string, visibility: string) => {
        try {
            await fetch("/api/match/create", {
                method: "POST",
                headers: { "Content-Type": "application.json" },
                body: JSON.stringify({ name, mode, game_mode, visibility })
            })
        } catch (error) {
            console.log(error)
        }
    }
}))