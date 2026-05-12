import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { cn } from '@/utils/cn';

export function CycleScreen() {
  const [fluxo, setFluxo] = useState<string | null>(null);
  const [humor, setHumor] = useState<string | null>(null);
  const [sintomas, setSintomas] = useState<string[]>(['Cansaço', 'Ansiedade']);

  const toggleSintoma = (sintoma: string) => {
    setSintomas((prev) => 
      prev.includes(sintoma) ? prev.filter((s) => s !== sintoma) : [...prev, sintoma]
    );
  };

  const fluxos = [
    { id: 'Nenhum', icon: 'water-off-outline' },
    { id: 'Leve', icon: 'water-outline' },
    { id: 'Médio', icon: 'water' },
    { id: 'Intenso', icon: 'water-plus' },
  ] as const;

  const humores = [
    { id: 'Mal', icon: 'emoticon-sad-outline' },
    { id: 'Normal', icon: 'emoticon-neutral-outline' },
    { id: 'Bem', icon: 'emoticon-happy-outline' },
  ] as const;

  const listaSintomas = [
    'Cólica', 'Cansaço', 'Inchaço', 'Dor de cabeça',
    'Sensibilidade', 'Insônia', 'Ansiedade', 'Náusea'
  ];

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View className="mb-6">
          <Typography variant="h2" weight="bold" className="text-text">Meu Ciclo</Typography>
          <Typography variant="body" className="text-textSecondary mt-1">Registre como você está se sentindo hoje</Typography>
        </View>

        {/* Hero Card */}
        <View className="bg-primary p-6 rounded-[24px] mb-8 items-center justify-center shadow-sm shadow-primary">
          <View className="flex-row items-center mb-2">
            <MaterialCommunityIcons name="moon-waning-crescent" size={16} color="#fff" />
            <Typography variant="caption" weight="bold" className="text-white/80 uppercase ml-1">
              Dia do Ciclo
            </Typography>
          </View>
          <Typography weight="bold" className="text-white text-5xl mb-2">14</Typography>
          <Typography variant="body" className="text-white/90">
            Fase ovulatória
          </Typography>
        </View>

        {/* Fluxo menstrual */}
        <View className="mb-8">
          <Typography variant="h3" weight="bold" className="text-text mb-4">Fluxo menstrual</Typography>
          <View className="flex-row justify-between">
             {fluxos.map((f) => {
               const isSelected = fluxo === f.id;
               return (
                 <TouchableOpacity 
                   key={f.id}
                   onPress={() => setFluxo(f.id)}
                   className={cn(
                     "rounded-[16px] w-[23%] aspect-[4/5] items-center justify-center p-2",
                     isSelected ? "bg-accent/20 border border-accent/20" : "bg-surfaceLight"
                   )}
                 >
                   <MaterialCommunityIcons 
                     name={f.icon as any} 
                     size={26} 
                     color={isSelected ? "#BD40C1" : "#522C64"} 
                   />
                   <Typography 
                     variant="caption" 
                     className={cn(
                       "font-medium mt-2 text-center text-[11px]",
                       isSelected ? "text-primary font-bold" : "text-text"
                     )}
                   >
                     {f.id}
                   </Typography>
                 </TouchableOpacity>
               );
             })}
          </View>
        </View>

        {/* Como você está se sentindo */}
        <View className="mb-8">
          <Typography variant="h3" weight="bold" className="text-text mb-4">Como você está se sentindo?</Typography>
          <View className="flex-row justify-between">
             {humores.map((h) => {
               const isSelected = humor === h.id;
               return (
                 <TouchableOpacity 
                   key={h.id}
                   onPress={() => setHumor(h.id)}
                   className={cn(
                     "rounded-[16px] w-[31%] py-4 items-center justify-center",
                     isSelected ? "bg-accent/20 border border-accent/20" : "bg-surfaceLight"
                   )}
                 >
                   <MaterialCommunityIcons 
                     name={h.icon as any} 
                     size={28} 
                     color={isSelected ? "#BD40C1" : "#522C64"} 
                   />
                   <Typography 
                     variant="caption" 
                     className={cn(
                       "font-medium mt-2 text-center text-[13px]",
                       isSelected ? "text-primary font-bold" : "text-text"
                     )}
                   >
                     {h.id}
                   </Typography>
                 </TouchableOpacity>
               );
             })}
          </View>
        </View>

        {/* Sintomas */}
        <View className="mb-8">
          <Typography variant="h3" weight="bold" className="text-text mb-4">Sintomas</Typography>
          <View className="flex-row flex-wrap gap-3">
            {listaSintomas.map((sintoma) => {
              const isSelected = sintomas.includes(sintoma);
              return (
                <TouchableOpacity
                  key={sintoma}
                  onPress={() => toggleSintoma(sintoma)}
                  activeOpacity={0.7}
                  className={cn(
                    "px-5 py-2.5 rounded-full shadow-sm shadow-black/5",
                    isSelected ? "bg-primary" : "bg-white"
                  )}
                >
                  <Typography 
                    variant="caption" 
                    className={cn(
                      "font-medium text-[13px]",
                      isSelected ? "text-white" : "text-text"
                    )}
                  >
                    {sintoma}
                  </Typography>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        
        {/* Save Button */}
        <Button title="Salvar registro" onPress={() => Object.assign({})} />

      </ScrollView>
    </SafeAreaView>
  );
}
