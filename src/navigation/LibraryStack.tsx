import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LibraryScreen } from '@/screens/LibraryScreen';
import { ArticleDetailScreen } from '@/screens/ArticleDetailScreen';

const Stack = createNativeStackNavigator();

export function LibraryStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LibraryHome" component={LibraryScreen} />
      <Stack.Screen name="ArticleDetail" component={ArticleDetailScreen} />
    </Stack.Navigator>
  );
}
