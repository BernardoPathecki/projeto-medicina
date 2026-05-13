import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { AuthStack } from './AuthStack';
import { MainTabs } from './MainTabs';
import { useAuthStore } from '@/store/useAuthStore';
import { View, ActivityIndicator } from 'react-native';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FDF8FD',
  },
};

export function RootNavigator() {
  const { session, isLoading } = useAuthStore();

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <ActivityIndicator size="large" color="#0a84ff" />
      </View>
    );
  }

  return (
    <NavigationContainer theme={Theme}>
      {session ? <MainTabs /> : <AuthStack />}
    </NavigationContainer>
  );
}
