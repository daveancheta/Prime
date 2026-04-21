import { useAuthStore } from '@/app/state/use-auth-store';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/ui/text';
import { router } from 'expo-router';
import * as React from 'react';
import { Pressable, type TextInput, View } from 'react-native';

export function SignInForm() {
  const passwordInputRef = React.useRef<TextInput>(null);
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const { handleSignInValidation, isValidating } = useAuthStore();

  const handleSignIn = (e: any) => {
    e.preventDefault()

    handleSignInValidation(email, password)
  }

  return (
    <View className="gap-6">
      <Card className="border-border/0 sm:border-border shadow-none sm:shadow-sm sm:shadow-black/5 bg-transparent">
        <CardHeader>
          <CardTitle className="text-center text-xl sm:text-left">Sign in to your app</CardTitle>
          <CardDescription className="text-center sm:text-left">
            Welcome back! Please sign in to continue
          </CardDescription>
        </CardHeader>
        <CardContent className="gap-6 w-screen">
          <View className="gap-6">
            <View className="gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                keyboardType="email-address"
                autoComplete="email"
                autoCapitalize="none"
                returnKeyType="next"
                submitBehavior="submit"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View className="gap-1.5">
              <View className="flex-row items-center">
                <Label htmlFor="password">Password</Label>
                <Button
                  variant="link"
                  size="sm"
                  className="web:h-fit ml-auto h-4 px-1 py-0 sm:h-4"
                  onPress={() => {
                    // TODO: Navigate to forgot password screen
                  }}>
                  <Text className="font-normal leading-4">Forgot your password?</Text>
                </Button>
              </View>
              <Input
                id="password"
                secureTextEntry
                returnKeyType="send"
                placeholder='Enter your password'
                value={password}
                onChangeText={setPassword}
              />
            </View>
            <Button className="w-full" onPress={handleSignIn} disabled={isValidating}>
              <Text>{isValidating ? "Loading..." : "Continue"}</Text>
            </Button>
          </View>
          <Text className="text-center text-sm">
            Don&apos;t have an account?{' '}
            <Pressable
              onPress={() => {
                router.push('/(auth)/signup')
              }}>
              <Text className="text-sm underline underline-offset-4">Sign up</Text>
            </Pressable>
          </Text>
        </CardContent>
      </Card>
    </View>
  );
}
