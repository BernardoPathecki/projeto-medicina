import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Typography } from '@/components/ui/Typography';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, AntDesign, MaterialIcons } from '@expo/vector-icons';

export function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 40 }} showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View className="mb-6">
          <Typography variant="h2" weight="bold" className="text-text">Minha Saúde Feminina</Typography>
          <Typography variant="body" className="text-textSecondary mt-1">Cuidar de você, todos os dias 💜</Typography>
        </View>

        {/* Hero Card */}
        <View className="bg-primary p-6 rounded-[24px] mb-8 relative overflow-hidden shadow-sm shadow-primary">
          <Typography variant="caption" weight="bold" className="text-white/80 uppercase mb-2">Fase Adulta</Typography>
          <Typography variant="h2" weight="bold" className="text-white mb-3">Olá! Como você está hoje?</Typography>
          <Typography variant="body" className="text-white/90 leading-6">
            Lembre-se: conhecer seu corpo é o primeiro passo para cuidar bem dele.
          </Typography>

          <View className="absolute top-6 right-5 w-[42px] h-[42px] bg-white/20 rounded-full items-center justify-center">
            <MaterialCommunityIcons name="heart-outline" size={20} color="#fff" />
          </View>
        </View>

        {/* Explorar Section */}
        <View className="mb-8">
          <Typography variant="h3" weight="bold" className="text-text mb-4">Explorar</Typography>
          <View className="flex-row flex-wrap justify-between gap-y-3">
            <TouchableOpacity className="bg-surfaceLight rounded-[20px] w-[31%] aspect-square items-center justify-center h-[20px]">
              <MaterialCommunityIcons name="water-outline" size={30} color="#522C64" />
              <Typography variant="caption" className="text-text font-medium mt-2 text-center text-[12px]">Ciclo</Typography>
            </TouchableOpacity>

            <TouchableOpacity className="bg-surfaceLight rounded-[20px] w-[31%] aspect-square items-center justify-center h-[20px]">
              <MaterialCommunityIcons name="pill" size={30} color="#522C64" />
              <Typography variant="caption" className="text-text font-medium mt-2 text-center text-[12px]">Contraceptivos</Typography>
            </TouchableOpacity>

            <TouchableOpacity className="bg-surfaceLight rounded-[20px] w-[31%] aspect-square items-center justify-center h-[20px]">
              <MaterialCommunityIcons name="baby-carriage" size={30} color="#522C64" />
              <Typography variant="caption" className="text-text font-medium mt-2 text-center text-[12px]">Gravidez</Typography>
            </TouchableOpacity>

            <TouchableOpacity className="bg-surfaceLight rounded-[20px] w-[31%] aspect-square items-center justify-center h-[20px]">
              <MaterialCommunityIcons name="stethoscope" size={30} color="#522C64" />
              <Typography variant="caption" className="text-text font-medium mt-2 text-center text-[12px]">Ginecologia</Typography>
            </TouchableOpacity>

            <TouchableOpacity className="bg-surfaceLight rounded-[20px] w-[31%] aspect-square items-center justify-center h-[20px]">
              <MaterialCommunityIcons name="food-apple-outline" size={30} color="#522C64" />
              <Typography variant="caption" className="text-text font-medium mt-2 text-center text-[12px]">Nutrição</Typography>
            </TouchableOpacity>

            <TouchableOpacity className="bg-surfaceLight rounded-[20px] w-[31%] aspect-square items-center justify-center h-[20px]">
              <MaterialCommunityIcons name="emoticon-happy-outline" size={30} color="#522C64" />
              <Typography variant="caption" className="text-text font-medium mt-2 text-center text-[12px]">Bem-estar</Typography>
            </TouchableOpacity>
          </View>
        </View>

        {/* Lembretes Section */}
        <View className="mb-4">
          <Typography variant="h3" weight="bold" className="text-text mb-4">Lembretes</Typography>

          <TouchableOpacity className="bg-surface rounded-2xl px-5 py-4 mb-3 flex-row items-center border border-primary/5 shadow-sm shadow-black/5">
            <View className="flex-1 mr-2">
              <Typography variant="body" weight="medium" className="text-text text-[15px]">Preventivo (Papanicolau)</Typography>
              <Typography variant="caption" className="text-textSecondary mt-1">Agende seu exame anual</Typography>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#C345C8" />
          </TouchableOpacity>

          <TouchableOpacity className="bg-surface rounded-2xl px-5 py-4 mb-3 flex-row items-center border border-primary/5 shadow-sm shadow-black/5">
            <View className="flex-1 mr-2">
              <Typography variant="body" weight="medium" className="text-text text-[15px]">Mamografia</Typography>
              <Typography variant="caption" className="text-textSecondary mt-1">Recomendado a partir dos 40 anos</Typography>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#C345C8" />
          </TouchableOpacity>

          <TouchableOpacity className="bg-surface rounded-2xl px-5 py-4 mb-3 flex-row items-center border border-primary/5 shadow-sm shadow-black/5">
            <View className="flex-1 mr-2">
              <Typography variant="body" weight="medium" className="text-text text-[15px]">Consulta ginecológica</Typography>
              <Typography variant="caption" className="text-textSecondary mt-1">Próxima visita de rotina</Typography>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#C345C8" />
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
