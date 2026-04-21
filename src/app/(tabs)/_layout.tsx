import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';

export function Logo() {
  return (
    <View className="flex-row items-center">
      <View className="w-1.5 h-9 mr-2.5 overflow-hidden">
        <View className="flex-1 bg-yellow-500" />
        <View className="flex-1 bg-zinc-800" />
      </View>

      <View>
        <View className="flex-row items-baseline">
          <Text className="text-yellow-500 font-black text-3xl tracking-tighter leading-none italic">
            P
          </Text>
          <Text className="text-white font-black text-3xl tracking-tighter leading-none italic">
            RME
          </Text>
        </View>
      </View>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: 'white',
      tabBarShowLabel: false,
      headerShown: true,
      headerTitle: () => null,
      headerLeft: () => (
        <View className='px-5'>
          <Logo />
        </View>
      ),
      headerRight: () => (
        <View className='px-5'>
          <Ionicons size={24} name="search-outline" color={'white'} />
        </View>
      )
    }}>
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
