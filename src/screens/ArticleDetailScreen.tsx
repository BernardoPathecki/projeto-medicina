import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Typography } from '@/components/ui/Typography';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function ArticleDetailScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      {/* Header with Back Button */}
      <View className="px-6 pt-2 pb-4">
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          className="bg-surfaceLight w-10 h-10 rounded-full items-center justify-center mb-4 shadow-sm"
        >
          <MaterialCommunityIcons name="chevron-left" size={24} color="#522C64" />
        </TouchableOpacity>
        
        <Typography variant="h2" weight="bold" className="text-text">
          Saúde Íntima
        </Typography>
        <Typography variant="body" className="text-primary font-medium">
          Infecções, higiene e autocuidado
        </Typography>
      </View>

      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        {/* Main Article Card */}
        <View className="bg-surface rounded-3xl p-6 mb-6 shadow-sm border border-primary/5">
          <Typography variant="h3" weight="bold" className="text-text mb-4">
            Cólica
          </Typography>

          <Typography variant="body" className="text-textSecondary leading-6 mb-6">
            É uma dor na parte de baixo da barriga (abaixo do umbigo), comum em mulheres. É muito comum em jovens e adolescentes logo após a primeira menstruação. Porém, se você sentir dor forte ou cólicas intensas nessa região, é importante procurar a sua UBS para avaliação.
          </Typography>

          <Typography variant="body" weight="bold" className="text-text mb-4 leading-6">
            De maneira geral, você deve procurar a Unidade Básica de Saúde (Postinho de Saúde) sempre que houver:
          </Typography>

          {/* Bullet List 1 */}
          <View className="mb-6 gap-y-2">
            {[
              'Febre;',
              'Sentir fortes dores;',
              'Em caso de sangramento intenso;',
              'Suspeita ou confirmação de gravidez;',
              'Cólica intensa ou dor à palpação;',
              'Manchas arroxeadas na pele.',
            ].map((text, index) => (
              <View key={index} className="flex-row items-start px-2">
                <View className="w-1.5 h-1.5 rounded-full bg-textSecondary mt-2 mr-3" />
                <Typography variant="body" className="text-textSecondary flex-1">
                  {text}
                </Typography>
              </View>
            ))}
          </View>

          <Typography variant="body" weight="bold" className="text-text mb-4 leading-6">
            O que você pode fazer em casa se não houveram sintomas:
          </Typography>

          {/* Bullet List 2 */}
          <View className="gap-y-2">
            {[
              'Fazer compressas de água morna na região inferior do abdômen;',
              'Praticar atividade física;',
              'Manter hidratação e alimentação saudável.',
            ].map((text, index) => (
              <View key={index} className="flex-row items-start px-2">
                <View className="w-1.5 h-1.5 rounded-full bg-textSecondary mt-2 mr-3" />
                <Typography variant="body" className="text-textSecondary flex-1">
                  {text}
                </Typography>
              </View>
            ))}
          </View>
        </View>

        {/* Footer Disclaimer */}
        <View className="bg-surfaceLight rounded-2xl p-5 mb-10 border border-primary/10 shadow-sm">
          <Typography weight="bold" className="text-primary text-center text-[13px] leading-5">
            Este conteúdo é informativo e não substitui a consulta médica. Procure sempre um profissional de saúde!
          </Typography>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
