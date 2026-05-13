import React from 'react';
import { View, ScrollView, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Typography } from '@/components/ui/Typography';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// Dummy data for categories based on the provided image
const categories = [
  {
    id: 1,
    title: 'Saúde Íntima',
    subtitle: 'Infecções, higiene e autocuidado',
    icon: 'flower-outline',
  },
  {
    id: 2,
    title: 'Contraceptivos',
    subtitle: 'Métodos, orientações e dúvidas',
    icon: 'pill',
  },
  {
    id: 3,
    title: 'Gravidez e Pós-parto',
    subtitle: 'Gestação, puerpério e amamentação',
    icon: 'baby-carriage',
  },
  {
    id: 4,
    title: 'Saúde Emocional',
    subtitle: 'Ansiedade, autoestima e apoio',
    icon: 'brain',
  },
  {
    id: 5,
    title: 'Alimentação',
    subtitle: 'Nutrição em cada fase da vida',
    icon: 'food-apple-outline',
  },
  {
    id: 6,
    title: 'Fases da Vida',
    subtitle: 'Adolescência ao climatério',
    icon: 'clock-outline',
  },
];

export function LibraryScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <ScrollView className="flex-1 px-6 pt-6 pb-20">
        
        {/* Header */}
        <View className="mb-6">
          <Typography variant="h2" weight="bold" className="text-text mb-1">
            Biblioteca
          </Typography>
          <Typography variant="body" className="text-textSecondary">
            Descubra, entenda e respeite o seu corpo.
          </Typography>
        </View>

        {/* Category List */}
        <View className="gap-y-4 mb-6">
          {categories.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              onPress={() => navigation.navigate('ArticleDetail')}
              className="bg-surface rounded-2xl p-4 flex-row items-center border border-primary/20 shadow-sm"
              activeOpacity={0.7}
            >
              {/* Left Icon (simulating the cut-off circle from the image) */}
              <View className="bg-background rounded-full w-12 h-12 items-center justify-center mr-4 shadow-sm border border-primary/10">
                <MaterialCommunityIcons name={item.icon as any} size={24} color="#522C64" />
              </View>
              
              {/* Text Content */}
              <View className="flex-1">
                <Typography variant="body" weight="bold" className="text-text mb-0.5">
                  {item.title}
                </Typography>
                <Typography variant="caption" className="text-textSecondary text-[13px]">
                  {item.subtitle}
                </Typography>
              </View>

              {/* Right Chevron */}
              <MaterialCommunityIcons name="chevron-right" size={24} color="#BD40C1" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Footer Banner */}
        <View className="bg-surfaceLight rounded-xl p-4 mb-10 border border-primary/20">
          <Typography variant="caption" weight="medium" className="text-text text-center text-[12px]">
            Este conteúdo é informativo e não substitui a consulta médica.
          </Typography>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}
