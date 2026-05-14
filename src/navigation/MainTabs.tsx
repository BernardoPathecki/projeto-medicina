import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '@/screens/HomeScreen';
import { CycleScreen } from '@/screens/CycleScreen';
import { LibraryStack } from '@/navigation/LibraryStack';
import { AgendaScreen } from '@/screens/AgendaScreen';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

// Placeholder para as outras abas
const Placeholder = () => <View className="flex-1 bg-background" />;

export function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FDE9FB',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: 80,
          paddingBottom: 10,
          paddingTop: 10
        },
        tabBarActiveTintColor: '#C345C8',
        tabBarInactiveTintColor: '#522C64',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500'
        }
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home-heart" size={26} color={color} />
        }}
      />
      <Tab.Screen
        name="Ciclo"
        component={CycleScreen}
        options={{
          tabBarLabel: 'Ciclo',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="calendar-month-outline" size={24} color={color} />
        }}
      />
      <Tab.Screen
        name="Biblioteca"
        component={LibraryStack}
        options={{
          tabBarLabel: 'Biblioteca',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="book-open-outline" size={24} color={color} />
        }}
      />
      <Tab.Screen
        name="Agenda"
        component={AgendaScreen}
        options={{
          tabBarLabel: 'Agenda',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="bell-outline" size={24} color={color} />
        }}
      />
    </Tab.Navigator>
  );
}
