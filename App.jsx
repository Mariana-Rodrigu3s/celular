import { StatusBar, View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from './src/components/Header';
import { WaterProgress } from './src/components/WaterProgress';
import ActionButon from './src/components/ActionButton';
import { useState } from 'react';
import MetaDiaria from './src/components/Meta';

export default function App() {
    const GOAL = 2000
    const[meta,  setMeta] = useState(0)
    const [consumed, setConsumed] = useState(0)


    // const porcentagem = meta > 0 ? (consumed / meta) * 100 : 0

    const handleAddWater = (ml) =>{
      setConsumed((consumed) => consumed + ml);



      

    }


    const handleMeta = (quantidade) =>{
      setMeta((valor) => Math.max(0, valor + quantidade))

    }



    const handleReset = () =>{
      setConsumed(0);


    }

    
  return(
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar barStyle="auto" />
        <View>
          
          <Header GOAL={meta} />
          <MetaDiaria onMeta={handleMeta} meta={meta}></MetaDiaria>
          <WaterProgress consumed={consumed} goal={meta}></WaterProgress>
          <ActionButon onAdd={handleAddWater} onReset={handleReset}  ></ActionButon>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}



































// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     backgroundColor: 'green',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

// })