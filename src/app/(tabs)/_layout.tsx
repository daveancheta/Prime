import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'white', tabBarShowLabel: false, headerShown: false, }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons size={size} name="grid" color={color} />,
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons size={size} name="people" color={color} />,
        }}
      />
       <Tabs.Screen
        name="match"
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons size={size} name="shield" color={color} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons size={size} name="chatbubble" color={color} />,
        }}
      />
       <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons size={size} name="person" color={color} />,
        }}
      />
    </Tabs>
  );
}
