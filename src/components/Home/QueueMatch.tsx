import React from 'react';
import { Text, View, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

function QueueMatch() {
    return (
        <View className='gap-3'>
            <View className='bg-zinc-950 p-5 border border-zinc-800'>
                <View className='flex-row justify-between items-start mb-6'>
                    <View>
                        <Text className='text-yellow-500 font-black uppercase tracking-tighter text-xs'>
                            Deployment Ready
                        </Text>
                        <Text className='text-white font-bold uppercase tracking-widest text-lg'>
                            Player Overview
                        </Text>
                    </View>
                    <View className="items-end">
                        <Text className='text-green-500 font-black text-xs uppercase'>Online</Text>
                        <Text className='text-zinc-500 text-[10px] font-bold'>12,402 PLAYERS</Text>
                    </View>
                </View>

                <View className='flex flex-row gap-3 w-full mb-6'>
                    <StatCard label="Rank" value="LEGEND" icon="trophy-outline" accent="border-yellow-500" />
                    <StatCard label="Mode" value="Multiplayer" icon="game-controller-outline" accent="border-zinc-700" />
                </View>

                <View className='gap-3'>
                    <TouchableOpacity activeOpacity={0.8} className='bg-white h-14 flex-row items-center justify-center rounded-sm border-b-4 border-zinc-400'>
                        <Ionicons name="play-sharp" size={20} color="black" />
                        <Text className='text-black font-black uppercase ml-2 tracking-tight text-lg'>Find Match</Text>
                    </TouchableOpacity>

                    <Pressable className='bg-transparent border border-zinc-800 h-12 flex-row items-center justify-center rounded-sm'
                    onPress={() => router.push("/match/create")}>
                        <Ionicons name="add-circle-outline" size={18} color="#d4d4d8" />
                        <Text className='text-zinc-300 font-bold uppercase ml-2 tracking-widest text-xs'>Create Room</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const StatCard = ({ label, value, icon, accent }: { label: string, value: string, icon: any, accent: string }) => (
    <View className={`bg-zinc-900/50 flex-1 border-t-2 ${accent} p-4`}>
        <View className="flex-row items-center mb-2 opacity-60">
            <Ionicons name={icon} size={14} color="white" />
            <Text className='text-zinc-400 uppercase text-[10px] font-bold ml-2 tracking-tighter'>{label}</Text>
        </View>
        <Text className='text-white text-xl font-black italic tracking-tighter'>{value}</Text>
    </View>
);

export default QueueMatch;