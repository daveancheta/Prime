import { useLobbyStore } from '@/app/state/use-lobby-store';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from '../ui/button';

const MODES = ['MULTIPLAYER', 'BATTLE ROYALE', 'PRIVATE ROOM'];

const GAME_MODES: Record<string, string[]> = {
    'MULTIPLAYER': ["HP", "FRONTLINE", "SND", "TDM", "DOMI", "CONTROL"],
    'BATTLE ROYALE': ["SOLO", "DUO", "TRIO", "SQUAD"],
    'PRIVATE ROOM': ["1V1", "2V2", "3V3", "4V4", "5V5"],
}

const DEFAULT_GAME_MODE: Record<string, string> = {
    'MULTIPLAYER': 'HP',
    'BATTLE ROYALE': 'SOLO',
    'PRIVATE ROOM': '1V1',
}

const VISIBILITY = ['PUBLIC', 'PRIVATE'];

export function CreateLobby() {
    const [name, setName] = useState('');
    const [mode, setMode] = useState('MULTIPLAYER');
    const [gameMode, setGameMode] = useState('HP');
    const [visibility, setVisibility] = useState('PUBLIC');
    const { handleCreateLobbyValidation, isValidating } = useLobbyStore()

    const handleCreateLobby = () => {
        handleCreateLobbyValidation(name, mode, gameMode, visibility)
    }

    return (
        <View className='w-full bg-zinc-950 border p-5 gap-6'>
            <View>
                <Text className='text-zinc-500 font-bold uppercase tracking-[3px] text-[10px] mb-1'>
                    Configuration
                </Text>
                <Text className='text-white font-black uppercase tracking-widest text-xl'>
                    Create Lobby
                </Text>
            </View>

            <View className='gap-2'>
                <Text className='text-zinc-400 uppercase text-[10px] font-black tracking-widest'>
                    Lobby Name
                </Text>
                <TextInput
                    maxLength={12}
                    value={name}
                    onChangeText={setName}
                    placeholder='ENTER LOBBY NAME'
                    placeholderTextColor='#52525b'
                    className='bg-zinc-900 border border-zinc-700 text-white font-bold uppercase px-4 h-12 text-sm tracking-widest'
                />
            </View>

            <View className='gap-2'>
                <Text className='text-zinc-400 uppercase text-[10px] font-black tracking-widest'>
                    Mode
                </Text>
                <View className='w-full gap-2'>
                    {MODES.map((m) => (
                        <Pressable
                            key={m}
                            onPress={() => {
                                setMode(m)
                                setGameMode(DEFAULT_GAME_MODE[m])
                            }}
                            className={`w-full h-11 flex-row items-center justify-between px-4 border ${mode === m
                                ? 'bg-white border-white'
                                : 'bg-transparent border-zinc-700'
                                }`}
                        >
                            <Text className={`font-black uppercase text-xs tracking-widest ${mode === m ? 'text-black' : 'text-zinc-400'
                                }`}>
                                {m}
                            </Text>
                            {mode === m && (
                                <Ionicons name="checkmark" size={14} color="black" />
                            )}
                        </Pressable>
                    ))}
                </View>
            </View>

            <View className='gap-2'>
                <Text className='text-zinc-400 uppercase text-[10px] font-black tracking-widest'>
                    Game Mode
                </Text>
                <View className='w-full flex-row flex-wrap gap-2 min-h-[88px]'>
                    {GAME_MODES[mode].map((gm) => (
                        <Pressable
                            key={gm}
                            onPress={() => setGameMode(gm)}
                            className={`px-4 h-10 items-center justify-center border ${gameMode === gm
                                ? 'bg-yellow-500 border-yellow-500'
                                : 'bg-transparent border-zinc-700'
                                }`}
                        >
                            <Text className={`font-black uppercase text-[10px] tracking-widest ${gameMode === gm ? 'text-black' : 'text-zinc-400'
                                }`}>
                                {gm}
                            </Text>
                        </Pressable>
                    ))}
                </View>
            </View>

            <View className='gap-2'>
                <Text className='text-zinc-400 uppercase text-[10px] font-black tracking-widest'>
                    Visibility
                </Text>
                <View className='w-full flex-row gap-2'>
                    {VISIBILITY.map((v) => (
                        <Pressable
                            key={v}
                            onPress={() => setVisibility(v)}
                            className={`flex-1 h-11 flex-row items-center justify-center gap-2 border ${visibility === v
                                ? 'bg-zinc-800 border-zinc-600'
                                : 'bg-transparent border-zinc-700'
                                }`}
                        >
                            <Ionicons
                                name={v === 'PRIVATE' ? 'lock-closed' : 'globe-outline'}
                                size={12}
                                color={visibility === v ? 'white' : '#52525b'}
                            />
                            <Text className={`font-black uppercase text-[10px] tracking-widest ${visibility === v ? 'text-white' : 'text-zinc-500'
                                }`}>
                                {v}
                            </Text>
                        </Pressable>
                    ))}
                </View>
            </View>

            <View className='h-[1px] bg-zinc-800' />

            <Button
                className='w-full bg-white h-14 flex-row items-center justify-center gap-2'
                onPress={handleCreateLobby}
                disabled={!name || isValidating}
            >
                <Ionicons name="add-circle" size={18} color="black" />
                <Text className='text-black font-black uppercase tracking-widest text-sm'>
                    Create Lobby
                </Text>
            </Button>
        </View>
    );
}