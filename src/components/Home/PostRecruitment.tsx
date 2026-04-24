import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function PostRecruitment() {
    const [status, setStatus] = useState('OPEN');
    const [isSelectingStatus, setIsSelectingStatus] = useState(false);

    const [formData, setFormData] = useState({
        clan_name: '',
        tier: '',
        region: '',
        slot: '',
    });

    const statusOptions = ['OPEN', 'CLOSED', 'FULL'];

    return (
        <View className="gap-6 w-full flex-1 p-5">
            <TouchableOpacity
                className="w-full h-40 bg-zinc-900 border border-dashed border-zinc-700 items-center justify-center"
                activeOpacity={0.7}
            >
                <Ionicons name="camera-outline" size={32} color="#71717a" />
                <Text className="text-zinc-500 font-bold uppercase text-[10px] mt-2 tracking-widest">
                    Upload Clan Banner
                </Text>
            </TouchableOpacity>

            <View>
                <Text className="text-zinc-500 font-bold uppercase text-[10px] mb-2 tracking-widest">Clan Name</Text>
                <TextInput
                    placeholder="e.g. WOLVES ESPORTS"
                    placeholderTextColor="#3f3f46"
                    onChangeText={(val) => setFormData({ ...formData, clan_name: val })}
                    className="bg-zinc-900/50 border border-zinc-800 p-4 text-white font-bold uppercase"
                />
            </View>

            <View className="flex-row gap-4">
                <View className="flex-1">
                    <Text className="text-zinc-500 font-bold uppercase text-[10px] mb-2 tracking-widest">Tier</Text>
                    <TextInput
                        placeholder="TIER 1"
                        placeholderTextColor="#3f3f46"
                        onChangeText={(val) => setFormData({ ...formData, tier: val })}
                        className="bg-zinc-900/50 border border-zinc-800 p-4 text-white font-bold uppercase"
                    />
                </View>
                <View className="flex-1">
                    <Text className="text-zinc-500 font-bold uppercase text-[10px] mb-2 tracking-widest">Region</Text>
                    <TextInput
                        placeholder="GLOBAL"
                        placeholderTextColor="#3f3f46"
                        onChangeText={(val) => setFormData({ ...formData, region: val })}
                        className="bg-zinc-900/50 border border-zinc-800 p-4 text-white font-bold uppercase"
                    />
                </View>
            </View>

            <View className="flex-row gap-4" style={{ zIndex: 100 }}>
                <View className="flex-1">
                    <Text className="text-zinc-500 font-bold uppercase text-[10px] mb-2 tracking-widest">Open Slots</Text>
                    <TextInput
                        placeholder="0"
                        keyboardType="numeric"
                        placeholderTextColor="#3f3f46"
                        onChangeText={(val) => setFormData({ ...formData, slot: val })}
                        className="bg-zinc-900/50 border border-zinc-800 p-4 text-white font-bold uppercase"
                    />
                </View>

                <View className="flex-1">
                    <Text className="text-zinc-500 font-bold uppercase text-[10px] mb-2 tracking-widest">Status</Text>
                    <TouchableOpacity
                        onPress={() => setIsSelectingStatus(!isSelectingStatus)}
                        activeOpacity={0.8}
                        className={`bg-zinc-900/50 border ${isSelectingStatus ? 'border-yellow-500' : 'border-zinc-800'} p-4 flex-row justify-between items-center`}
                    >
                        <Text className="text-white font-bold uppercase">{status}</Text>
                        <Ionicons name={isSelectingStatus ? "chevron-up" : "chevron-down"} size={14} color="#71717a" />
                    </TouchableOpacity>

                    {isSelectingStatus && (
                        <View
                            className="absolute top-[68px] left-0 right-0 bg-zinc-800 border border-zinc-700 shadow-xl"
                            style={{ elevation: 5, zIndex: 999 }}
                        >
                            {statusOptions.map((item) => (
                                <TouchableOpacity
                                    key={item}
                                    onPress={() => {
                                        setStatus(item);
                                        setIsSelectingStatus(false);
                                    }}
                                    className="p-4 border-b border-zinc-700"
                                >
                                    <Text className={`font-black uppercase text-[10px] ${status === item ? 'text-yellow-500' : 'text-white'}`}>
                                        {item}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}
                </View>
            </View>

            <TouchableOpacity
                activeOpacity={0.9}
                className="bg-yellow-500 p-5 items-center justify-center mt-4"
            >
                <Text className="text-black font-black uppercase tracking-[2px]">
                    Publish Recruitment
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default PostRecruitment;