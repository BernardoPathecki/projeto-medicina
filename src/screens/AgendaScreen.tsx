import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Pressable, Platform, StatusBar, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Typography } from '@/components/ui/Typography';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Dummy data for the agenda list
const reminders = [
  {
    id: 1,
    title: 'Consulta ginecológica',
    date: '15 de Abril de 2026 às 8h00',
    icon: 'stethoscope',
    description: 'Consulta de rotina com a Dr. Carla, no postinho.',
    type: 'Consulta'
  },
  {
    id: 2,
    title: 'Preventivo',
    date: '22 de Abril de 2026 às 14h30',
    icon: 'calendar-check-outline',
    description: 'Exame preventivo anual. Levar os resultados dos exames anteriores.',
    type: 'Exame'
  },
  {
    id: 3,
    title: 'Vacina HPV - 2ª dose',
    date: '10 de Maio de 2026 às 9h15',
    icon: 'needle',
    description: 'Segunda dose da vacina contra o HPV na clínica central.',
    type: 'Vacina'
  },
];

export function AgendaScreen() {
  const [selectedReminder, setSelectedReminder] = useState<typeof reminders[0] | null>(null);
  const [isNewModalVisible, setIsNewModalVisible] = useState(false);
  const [type, setType] = useState<'Consulta' | 'Exame' | 'Vacina'>('Consulta');

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <ScrollView className="flex-1 px-6 pt-6 pb-6">
        
        {/* Header Section */}
        <View className="flex-row justify-between items-center mb-8">
          <View>
            <Typography variant="h2" weight="bold" className="text-text mb-1">
              Agenda
            </Typography>
            <Typography variant="body" className="text-textSecondary">
              Seus lembretes de saúde
            </Typography>
          </View>
          
          <TouchableOpacity 
            onPress={() => setIsNewModalVisible(true)}
            className="bg-primary w-12 h-12 rounded-2xl items-center justify-center shadow-sm shadow-primary/40"
            activeOpacity={0.8}
          >
            <MaterialCommunityIcons name="plus" size={28} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Reminders List */}
        <View className="gap-y-4 mb-8">
          {reminders.map((item) => (
            <Pressable 
              key={item.id} 
              className="bg-surface rounded-2xl p-4 flex-row items-center border border-primary/20 shadow-sm active:opacity-70"
              onPress={() => setSelectedReminder(item)}
            >
              {/* Left Icon */}
              <View className="bg-background rounded-xl w-12 h-12 items-center justify-center mr-4 shadow-sm border border-primary/10">
                <MaterialCommunityIcons name={item.icon as any} size={24} color="#522C64" />
              </View>
              
              {/* Text Content */}
              <View className="flex-1">
                <Typography variant="body" weight="semibold" className="text-text mb-0.5 text-[15px]">
                  {item.title}
                </Typography>
                <Typography variant="caption" className="text-textSecondary text-[13px]">
                  {item.date}
                </Typography>
              </View>
            </Pressable>
          ))}
        </View>

        {/* Bottom Banner */}
        <View className="bg-surface rounded-2xl p-5 mb-10 shadow-sm border border-primary/10 mt-auto">
          <Typography variant="h3" weight="bold" className="text-text text-center mb-3 text-[16px]">
            Não esqueça seus exames!
          </Typography>
          <Typography variant="caption" className="text-textSecondary text-center text-[13px] leading-5">
            Manter os exames em dia é fundamental para a prevenção. Adicione lembretes para não perder nenhuma data importante.
          </Typography>
        </View>
        
      </ScrollView>

      {/* New Reminder Modal */}
      <Modal
        visible={isNewModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsNewModalVisible(false)}
      >
        <View className="flex-1 bg-black/40 justify-center items-center px-6">
          <Pressable className="absolute inset-0" onPress={() => setIsNewModalVisible(false)} />
          
          <View className="w-full bg-white rounded-[32px] p-6 shadow-xl shadow-black/20">
            <Typography variant="h3" weight="bold" className="text-text mb-6">
              Novo lembrete
            </Typography>

            <View className="mb-4">
              <Typography variant="caption" weight="semibold" className="text-text mb-2 text-[14px]">
                Título
              </Typography>
              <View className="bg-surface rounded-xl px-4 py-3 border border-primary/5">
                <Typography variant="body" className="text-textSecondary text-[14px]">
                  Ex.: Consulta médica
                </Typography>
              </View>
            </View>

            <View className="mb-4">
              <Typography variant="caption" weight="semibold" className="text-text mb-2 text-[14px]">
                Data e hora
              </Typography>
              <View className="bg-surface rounded-xl px-4 py-3 border border-primary/5 flex-row justify-between items-center">
                <Typography variant="body" className="text-textSecondary text-[14px]">
                  DD/MM/AAAA 00:00
                </Typography>
                <MaterialCommunityIcons name="calendar-blank-outline" size={20} color="#522C64" />
              </View>
            </View>

            <View className="mb-6">
              <Typography variant="caption" weight="semibold" className="text-text mb-2 text-[14px]">
                Descrição
              </Typography>
              <View className="bg-surface rounded-xl px-4 py-3 border border-primary/5 h-24">
                <Typography variant="body" className="text-textSecondary text-[14px]">
                  Ex.: Consulta de rotina com a Dr. Carla, no postinho.
                </Typography>
              </View>
            </View>

            <View className="mb-8">
              <Typography variant="caption" weight="semibold" className="text-text mb-3 text-[14px]">
                Tipo
              </Typography>
              <View className="flex-row gap-x-2">
                {(['Consulta', 'Exame', 'Vacina'] as const).map((t) => (
                  <TouchableOpacity
                    key={t}
                    onPress={() => setType(t)}
                    className={`flex-1 py-3 rounded-xl items-center justify-center ${
                      type === t ? 'bg-accent shadow-sm shadow-accent/30' : 'bg-surfaceLight border border-primary/5'
                    }`}
                  >
                    <Typography 
                      variant="caption" 
                      weight="bold" 
                      className={`text-[13px] ${type === t ? 'text-white' : 'text-textSecondary'}`}
                    >
                      {t}
                    </Typography>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <TouchableOpacity 
              onPress={() => setIsNewModalVisible(false)}
              className="bg-accent rounded-xl py-4 items-center justify-center shadow-md shadow-accent/40"
            >
              <Typography variant="body" weight="bold" className="text-white text-[16px]">
                Adicionar lembrete
              </Typography>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Existing Details Popup (simplified) */}
      {selectedReminder && (
        <View className="absolute inset-0 z-[100] bg-black/40 justify-center items-center px-6">
          <Pressable className="absolute inset-0" onPress={() => setSelectedReminder(null)} />
          <View className="w-full bg-white rounded-3xl p-6 shadow-xl">
            <Typography variant="h3" weight="bold" className="text-text mb-6">
              {selectedReminder.title}
            </Typography>
            <View className="mb-6">
               <Typography variant="caption" weight="bold" className="text-text mb-1">Data e hora</Typography>
               <Typography variant="body" className="text-textSecondary">{selectedReminder.date}</Typography>
            </View>
            <TouchableOpacity 
              className="w-full py-3 rounded-xl border border-primary items-center justify-center"
              onPress={() => setSelectedReminder(null)}
            >
              <Typography variant="body" weight="bold" className="text-primary">Fechar</Typography>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}


