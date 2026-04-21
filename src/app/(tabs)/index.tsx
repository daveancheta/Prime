import ActiveRooms from '@/components/Home/ActiveRooms';
import QueueMatch from '@/components/Home/QueueMatch';
import RecruitingTeams from '@/components/Home/RecruitingTems';
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
    <ScrollView> 
      <View className='w-full bg-zinc-900/30 p-4'>
        <QueueMatch />
        <ActiveRooms />
        <RecruitingTeams />
      </View>
    </ScrollView>
  )
}

export default Index