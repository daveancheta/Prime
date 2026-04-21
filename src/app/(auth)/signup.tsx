import { SignUpForm } from '@/components/sign-up-form'
import { auth } from '@/lib/auth'
import { authClient } from '@/lib/auth-client'
import { router } from 'expo-router'
import React, { useEffect } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'

function Signup() {
    const { data: session, isPending } = authClient.useSession()

    useEffect(() => {
        if (session && !isPending) {
            router.push('/(tabs)')
        }
    }, [session, isPending])

    return (
        <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerClassName="sm:flex-1 items-center justify-center py-8 sm:py-4 sm:p-6 mt-safe px-0 bg-zinc-900/30"
            keyboardDismissMode="interactive">
            <View className="w-full h-screen justify-center items-center">
                <SignUpForm />
            </View>
            <Pressable onPress={() => {
                router.replace('/(tabs)')
            }}><Text className='text-white'>Go to Home</Text></Pressable>
        </ScrollView>
    )
}

export default Signup