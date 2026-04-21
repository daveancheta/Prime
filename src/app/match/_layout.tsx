import { Stack } from 'expo-router';

export default function MatchLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="create" 
        options={{ 
          headerTitle: 'Create Lobby',
          headerStyle: { backgroundColor: '#09090b' },
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'bold' },
        }} 
      />
    </Stack>
  );
}