import React, { useState } from 'react';
import { View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView, Dimensions } from 'react-native';
import { Typography } from '@/components/ui/Typography';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export function RegisterScreen() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <View className="flex-1 bg-white overflow-hidden">
      {/* Background Circle Decoration */}
      <View 
        style={{
          position: 'absolute',
          top: -width * 0.2,
          left: -width * 0.5,
          right: -width * 0.5,
          height: width * 1.5,
          borderRadius: width,
          backgroundColor: '#E8ACEB',
          opacity: 0.8,
        }}
      />

      <SafeAreaView className="flex-1">
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          className="flex-1"
        >
          <ScrollView 
            contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 32, paddingBottom: 40 }}
            showsVerticalScrollIndicator={false}
          >
            {/* Logo and Title Section */}
            <View className="items-center mt-12 mb-10">
              <Image 
                source={require('@/assets/logo.png')} 
                style={{ width: 140, height: 140 }}
                resizeMode="contain"
              />
              <Typography variant="h2" weight="bold" className="text-[#522C64] text-center mt-4">
                Minha Saúde{'\n'}Feminina
              </Typography>
            </View>

            {/* Form Section */}
            <View className="gap-y-5">
              {/* Nome */}
              <View>
                <Typography variant="body" weight="bold" className="text-[#522C64] mb-2 ml-1">
                  Nome
                </Typography>
                <View className="bg-white rounded-xl h-14 px-4 border border-white shadow-sm shadow-black/5 flex-row items-center">
                  <TextInput 
                    placeholder="Nome"
                    placeholderTextColor="#8E6997"
                    className="flex-1 text-[#522C64] text-[16px]"
                  />
                </View>
              </View>

              {/* Usuário */}
              <View>
                <Typography variant="body" weight="bold" className="text-[#522C64] mb-2 ml-1">
                  Usuário
                </Typography>
                <View className="bg-white rounded-xl h-14 px-4 border border-white shadow-sm shadow-black/5 flex-row items-center">
                  <TextInput 
                    placeholder="Usuário"
                    placeholderTextColor="#8E6997"
                    className="flex-1 text-[#522C64] text-[16px]"
                  />
                </View>
              </View>

              {/* Email */}
              <View>
                <Typography variant="body" weight="bold" className="text-[#522C64] mb-2 ml-1">
                  Email
                </Typography>
                <View className="bg-white rounded-xl h-14 px-4 border border-white shadow-sm shadow-black/5 flex-row items-center">
                  <TextInput 
                    placeholder="Email"
                    placeholderTextColor="#8E6997"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    className="flex-1 text-[#522C64] text-[16px]"
                  />
                </View>
              </View>

              {/* Data de Nascimento */}
              <View>
                <Typography variant="body" weight="bold" className="text-[#522C64] mb-2 ml-1">
                  Data de nascimento
                </Typography>
                <View className="bg-white rounded-xl h-14 px-4 border border-white shadow-sm shadow-black/5 flex-row items-center">
                  <TextInput 
                    placeholder="Data de nascimento"
                    placeholderTextColor="#8E6997"
                    className="flex-1 text-[#522C64] text-[16px]"
                  />
                </View>
              </View>

              {/* Senha */}
              <View>
                <Typography variant="body" weight="bold" className="text-[#522C64] mb-2 ml-1">
                  Senha
                </Typography>
                <View className="bg-white rounded-xl h-14 px-4 border border-white shadow-sm shadow-black/5 flex-row items-center">
                  <TextInput 
                    placeholder="Senha"
                    placeholderTextColor="#8E6997"
                    secureTextEntry={!showPassword}
                    className="flex-1 text-[#522C64] text-[16px]"
                  />
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <MaterialCommunityIcons 
                      name={showPassword ? "eye-off" : "eye"} 
                      size={22} 
                      color="#8E6997" 
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Confirmar Senha */}
              <View>
                <Typography variant="body" weight="bold" className="text-[#522C64] mb-2 ml-1">
                  Confirmar senha
                </Typography>
                <View className="bg-white rounded-xl h-14 px-4 border border-white shadow-sm shadow-black/5 flex-row items-center">
                  <TextInput 
                    placeholder="Senha"
                    placeholderTextColor="#8E6997"
                    secureTextEntry={!showConfirmPassword}
                    className="flex-1 text-[#522C64] text-[16px]"
                  />
                  <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                    <MaterialCommunityIcons 
                      name={showConfirmPassword ? "eye-off" : "eye"} 
                      size={22} 
                      color="#8E6997" 
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View className="mt-6">
                <TouchableOpacity 
                  onPress={() => navigation.goBack()}
                  activeOpacity={0.8}
                  className="bg-[#BD40C1] h-14 rounded-xl items-center justify-center shadow-md shadow-[#BD40C1]/30"
                >
                  <Typography variant="body" weight="bold" className="text-white text-[18px]">
                    Cadastrar
                  </Typography>
                </TouchableOpacity>

                <TouchableOpacity 
                  onPress={() => navigation.goBack()}
                  className="mt-4"
                >
                  <Typography variant="caption" className="text-[#522C64] text-center">
                    Já tem uma conta? <Typography weight="bold" className="text-[#BD40C1]">Entrar</Typography>
                  </Typography>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}
