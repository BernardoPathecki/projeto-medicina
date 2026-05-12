import React from 'react';
import { View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Typography } from '@/components/ui/Typography';
import { LoginForm } from '@/components/features/auth/LoginForm';
import { SafeAreaView } from 'react-native-safe-area-context';

export function LoginScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 24 }}>
          <View className="mb-10 items-center">
            <View className="w-20 h-20 bg-accent rounded-[24px] mb-6 justify-center items-center">
              <Typography variant="h1" className="text-white text-4xl">+</Typography>
            </View>
            <Typography variant="h1" weight="bold" className="text-center">Acesso Médico</Typography>
            <Typography variant="body" className="text-textSecondary mt-2 text-center">
              Acesse sua conta ou cadastre-se automaticamente
            </Typography>
          </View>

          <LoginForm />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
