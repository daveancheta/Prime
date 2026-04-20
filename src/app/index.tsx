import { SignInForm } from "@/components/sign-in-form";
import { View, ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerClassName="sm:flex-1 items-center justify-center py-8 sm:py-4 sm:p-6 mt-safe px-0"
      keyboardDismissMode="interactive">
      <View className="w-full h-screen justify-center items-center">
        <SignInForm />
      </View>
    </ScrollView>
  );
}
