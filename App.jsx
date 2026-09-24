import { StatusBar, View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from './src/components/Header';
import { WaterProgress } from './src/components/WaterProgress';

export default function App() {
    const GOAL = 2000
  return(
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar barStyle="auto" />
        <View>
          <Header GOAL={GOAL} />
          <WaterProgress consumed={100} goal={GOAL}></WaterProgress>
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