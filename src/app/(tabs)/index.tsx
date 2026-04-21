import QueueMatch from '@/components/Home/QueueMatch';
import { SignInForm } from '@/components/sign-in-form';
import { authClient } from '@/lib/auth-client'
import { router } from 'expo-router';
import React from 'react'
import { ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

function Index() {
  const { data: session } = authClient.useSession();
   const insets = useSafeAreaInsets()

  if (!session) {
    router.push('/(auth)')
  }

  return (
    <ScrollView style={{ paddingTop: insets.top}}>
      <View className='w-full h-screen bg-zinc-900/30 p-4'>
        <QueueMatch />
      </View>
    </ScrollView>
  )
}

export default Index