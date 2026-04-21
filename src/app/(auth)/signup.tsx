import { SignUpForm } from '@/components/sign-up-form'
import React from 'react'
import { ScrollView, View } from 'react-native'

function Signup() {
    return (
        <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerClassName="sm:flex-1 items-center justify-center py-8 sm:py-4 sm:p-6 mt-safe px-0 bg-zinc-900/30"
            keyboardDismissMode="interactive">
            <View className="w-full h-screen justify-center items-center">
                <SignUpForm />
            </View>
        </ScrollView>
    )
}

export default Signup