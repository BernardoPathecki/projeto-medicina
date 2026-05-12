import React, { useState } from 'react';
import { View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';
import { supabase } from '@/services/supabase';

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Mínimo de 6 caracteres'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState('');

  const { control, handleSubmit } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setLoading(true);
      setAuthError('');
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error && error.message.includes('Invalid login credentials')) {
        const { error: signUpError } = await supabase.auth.signUp({
          email: data.email,
          password: data.password,
        });
        if (signUpError) throw signUpError;
      } else if (error) {
        throw error;
      }
    } catch (e: any) {
      setAuthError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="space-y-4 gap-4 w-full">
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <Input
            label="Email"
            placeholder="exemplo@medicina.com.br"
            autoCapitalize="none"
            keyboardType="email-address"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={error?.message}
          />
        )}
      />
      
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <Input
            label="Senha secreta"
            placeholder="No mínimo 6 caracteres"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={error?.message}
          />
        )}
      />

      {authError ? (
        <Typography variant="caption" className="text-red-500 mt-2 text-center">
          {authError}
        </Typography>
      ) : null}

      <Button 
        title="Entrar ou Cadastrar" 
        onPress={handleSubmit(onSubmit)} 
        loading={loading}
        className="mt-6"
      />
    </View>
  );
}
