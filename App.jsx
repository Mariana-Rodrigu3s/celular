import { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from './src/constants/colors';
import Header from './src/components/Header';
import WaterProgress from './src/components/WaterProgress';
import ActionButtons from './src/components/ActionButtons';

export default function App() {

//   const GOAL = 2000; // Meta diária em ml
//   const [consumed, setConsumed] = useState(0);

//   // Função para acumular a quantidade ingerida
//   const handleAddWater = (amount) => {
//     setConsumed(prev => Math.min(prev + amount, GOAL));
//   };

//   // Função para zerar o contador
//   const handleReset = () => {
//     setConsumed(0);
//   };

  return (
    // <SafeAreaProvider>
    //   <SafeAreaView>
        <Header></Header>
        
    //   </SafeAreaView>
    // </SafeAreaProvider>
  );
}