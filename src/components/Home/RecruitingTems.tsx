import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const teams = [
    {
        id: 1,
        initials: 'WV',
        name: 'Wolves Esports',
        tier: 'TIER 1',
        region: 'China',
        mode: "MP",
        slots: 2,
        members: [
            'https://i.pravatar.cc/150?img=1',
            'https://i.pravatar.cc/150?img=2',
            'https://i.pravatar.cc/150?img=3',
        ]
    },
    {
        id: 2,
        initials: 'VK',
        name: '4Kings',
        tier: 'TIER 2',
        region: 'Philippines',
        mode: "BR",
        slots: 3,
        members: [
            'https://i.pravatar.cc/150?img=4',
            'https://i.pravatar.cc/150?img=5',
        ]
    },
    {
        id: 3,
        initials: 'NU',
        name: 'Nifty Ultra',
        tier: 'TIER 2',
        region: 'Philippines',
        mode: "MP",
        slots: 3,
        members: [
            'https://i.pravatar.cc/150?img=4',
            'https://i.pravatar.cc/150?img=5',
        ]
    },
]

function RecruitingTeams() {
    return (
        <View className='gap-4 mt-5'>
            <View className='flex-row justify-between items-end px-1'>
                <View>
                    <Text className='text-zinc-500 font-bold uppercase tracking-[3px] text-[10px] mb-1'>
                        Clan Recruitment
                    </Text>
                    <Text className='text-white font-black uppercase tracking-widest text-xl'>
                        Active Squads
                    </Text>
                </View>
                <TouchableOpacity activeOpacity={0.7} className="border-b border-zinc-700 pb-1">
                    <Text className='text-zinc-400 font-bold uppercase tracking-tighter text-xs'>
                        View All
                    </Text>
                </TouchableOpacity>
            </View>

            {teams.slice(0, 5).map((team) => (
                <View key={team.id} className='bg-zinc-900/40 border border-zinc-800 p-5 overflow-hidden'>
                    <View className='flex-row justify-between items-start mb-6'>
                        <View className='flex-row items-center gap-4'>
                            <View className='w-12 h-12 bg-white items-center justify-center'>
                                <Text className='text-black font-black text-lg'>{team.initials}</Text>
                            </View>
                            <View>
                                <Text className='text-white font-black text-lg uppercase tracking-tighter'>
                                    {team.name}
                                </Text>
                                <View className="flex-row items-center">
                                    <Text className='text-yellow-500 text-[10px] font-black uppercase italic'>
                                        {team.tier}
                                    </Text>
                                    <Text className="text-zinc-600 mx-2">|</Text>
                                    <Text className='text-zinc-500 text-[10px] font-bold uppercase'>
                                        {team.region}
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View className='bg-black border border-zinc-700 p-2 items-center min-w-[70px]'>
                            <Text className='text-zinc-500 font-black text-[8px] uppercase tracking-widest'>
                                Openings
                            </Text>
                            <Text className='text-white font-black text-sm uppercase'>
                                {team.slots} {team.slots === 1 ? 'SLOT' : 'SLOTS'}
                            </Text>
                        </View>
                    </View>

                    <View className='flex-row items-center justify-between border-t border-zinc-800 pt-4'>
                        <View className="flex-row items-center">
                            <View className='flex-row mr-3'>
                                {team.members.map((uri, index) => (
                                    <Image
                                        key={index}
                                        source={{ uri }}
                                        className='w-7 h-7 rounded-full border-2 border-zinc-950'
                                        style={{ marginLeft: index === 0 ? 0 : -10 }}
                                    />
                                ))}
                            </View>
                            <Text className="text-zinc-500 font-bold text-[10px] uppercase">
                                {team.members.length}/5 MBRS
                            </Text>
                        </View>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            className='flex-row items-center'
                        >
                            <Text className='text-white font-black uppercase tracking-widest text-xs mr-2'>
                                Apply Now
                            </Text>
                            <Ionicons name="chevron-forward" size={14} color="white" />
                        </TouchableOpacity>
                    </View>

                    <View className="absolute top-0 left-0 w-[2px] h-full bg-yellow-500/50" />
                </View>
            ))}
        </View>
    );
}

export default RecruitingTeams;