import { SignInForm } from '@/components/sign-in-form';
import { authClient } from '@/lib/auth-client'
import { router } from 'expo-router';
import React from 'react'
import { ScrollView, Text, View } from 'react-native'

function Index() {
  const { data: session } = authClient.useSession();

  if (!session) {
    router.push('/(auth)')
  }
  return (
    <ScrollView>
      <View className='flex w-full h-screen justify-center items-center'>
        <Text className='text-white'>Match</Text>
        <Text className='text-white'>name: {session?.user?.name ?? 'No name'}</Text>
      </View>
    </ScrollView>
  )
}

export default Index