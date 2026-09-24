import { StatusBar, View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from './src/components/Header';

export default function App() {
    const GOAL = 2000
  return(
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar barStyle="auto" />
        <View>
          <Header goal={GOAL} />
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