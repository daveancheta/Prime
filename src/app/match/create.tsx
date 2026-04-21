import { CreateLobby } from '@/components/Home/CreateLobby';
import { SignInForm } from '@/components/sign-in-form';
import { authClient } from '@/lib/auth-client'
import { router } from 'expo-router';
import React from 'react'
import { ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function Create() {
  const { data: session } = authClient.useSession();
  const insets = useSafeAreaInsets()

  if (!session) {
    router.push('/(auth)')
  }

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}>
      <View className='flex w-full justify-center items-center' >
        <CreateLobby />
      </View>
    </ScrollView>
  )
}

export default Create