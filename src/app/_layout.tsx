import { NAV_THEME } from "@/lib/theme";
import { ThemeProvider } from "@react-navigation/native";
import { PortalHost } from '@rn-primitives/portal';
import { Stack } from "expo-router";
import { StatusBar, useColorScheme } from "react-native";
import "../../global.css";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? 'dark' : 'dark';

  return (
    <ThemeProvider value={NAV_THEME[theme]}>
      <StatusBar barStyle={colorScheme === 'dark' ? 'dark-content' : 'dark-content'} />
      <Stack screenOptions={{ headerShown: false, animation: 'slide_from_bottom' }} >
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
      </Stack>
      <PortalHost />
    </ThemeProvider>
  );
}