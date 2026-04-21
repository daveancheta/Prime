import { SignInForm } from "@/components/sign-in-form";
import { authClient } from "@/lib/auth-client";
import { router } from "expo-router";
import { useEffect } from "react";
import { View, ScrollView } from "react-native";

export default function Index() {
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
        <SignInForm />
      </View>
    </ScrollView>
  );
}
