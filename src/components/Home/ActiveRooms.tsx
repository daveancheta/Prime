import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLobbyStore } from '@/app/state/use-lobby-store';

const rooms = [
    {
        id: '1',
        title: 'ALPHA SQUAD',
        mode: 'SEARCH & DESTROY',
        players: 4,
        maxPlayers: 5,
        isPrivate: true,
    },
    {
        id: '2',
        title: 'RNDM_LOBBY',
        mode: 'TEAM DEATHMATCH',
        players: 2,
        maxPlayers: 10,
        isPrivate: false,
    },
];

function ActiveRooms() {
    const { handleGetLobby, room } = useLobbyStore()

    useEffect(() => {
        handleGetLobby()
    }, [handleGetLobby])

    return (
        <View className="gap-4 mt-10">
            <View className="flex-row justify-between items-center px-1">
                <View className="flex-row items-center">
                    <View className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                    <Text className="text-white font-black uppercase tracking-widest text-lg">
                        Active Rooms
                    </Text>
                </View>
                <TouchableOpacity activeOpacity={0.7} className="border-b border-zinc-700 pb-1">
                    <Text className='text-zinc-400 font-bold uppercase tracking-tighter text-xs'>
                        View All
                    </Text>
                </TouchableOpacity>
            </View>

            {room.slice(0, 5).map((room) => (
                <TouchableOpacity
                    key={room.id}
                    activeOpacity={0.8}
                    className="bg-zinc-900/40 border border-zinc-800 p-4 flex-row justify-between items-center"
                >
                    <View className="flex-1">
                        <View className="flex-row items-center mb-1">
                            {room.visibility.toLowerCase() === "private"
                                ? <Ionicons name="lock-closed" size={12} color="#ef4444" style={{ marginRight: 6 }} />
                                : <Ionicons name="lock-open" size={12} color="#22c55e" style={{ marginRight: 6 }} />
                            }
                            <Text className="text-white font-black uppercase tracking-tight text-base">
                                {room.name.toUpperCase()}
                            </Text>
                        </View>

                        <View className="flex-row items-center gap-1">
                            <Text className="text-zinc-500 font-bold text-[10px] uppercase tracking-tighter">
                                {room.mode.toUpperCase()}
                            </Text>
                            <Text className="text-zinc-500 text-[10px]">|</Text>
                            <Text className="text-zinc-500 font-bold text-[10px] uppercase tracking-tighter">
                                {room.game_mode.toUpperCase()}
                            </Text>
                        </View>
                    </View>

                    <View className="items-end gap-y-2">
                        <View className="bg-black border border-zinc-700 px-3 py-1">
                            {room.mode.toLowerCase() === "multiplayer" &&
                                <Text className="text-white font-black text-xs">
                                    5/5
                                </Text>
                            }
                            {room.mode.toLowerCase() === "battle royale" &&
                                <Text className="text-white font-black text-xs">
                                    {room.game_mode.toLowerCase() === "duo"
                                        ? `2/2`
                                        : room.game_mode.toLowerCase() === "trio"
                                            ? `3/3`
                                            : `4/4`}
                                </Text>
                            }

                            {room.mode.toLowerCase() === "private room" &&
                                <Text className="text-white font-black text-xs">
                                    {room.game_mode.toLowerCase() === "1v1"
                                        ? `2/2`
                                        : room.game_mode.toLowerCase() === "2v2"
                                            ? `4/4`
                                            : room.game_mode.toLowerCase() === "3v3"
                                                ? `6/6`
                                                : room.game_mode.toLowerCase() === "4v4"
                                                    ? `8/8`
                                                    : `10/10`}
                                </Text>
                            }
                        </View>
                    </View>

                    <View className="absolute left-0 top-0 bottom-0 w-[2px] bg-white opacity-20" />
                </TouchableOpacity>
            ))}

            <TouchableOpacity className="border border-dashed border-zinc-800 h-12 items-center justify-center rounded-sm" onPress={handleGetLobby}>
                <Text className="text-zinc-600 font-bold uppercase tracking-widest text-[10px]">
                    + Refresh Server List
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default ActiveRooms;