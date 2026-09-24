import {View, Text, StyleSheet,} from 'react-native'
import { COLORS } from '../constants/colors'

export default function Header( {GOAL}){
    return(
      <View style={headerStyles.container}>
        <Text style={headerStyles.title}>Diario de Hidratação</Text>
        <Text style={headerStyles.subtitle}>Meta Diaria: {GOAL}ml</Text>
    </View>  
    )
    
}


const headerStyles = StyleSheet.create({
  container:{
    alignItems: 'center',
    marginBottom: 24,
  },
  title:{
    fontSize: 22,
    fontWeight: 'bold',

    color: COLORS.textMain,
  },
  subtitle:{
    fontSize: 14,
    marginTop: 4,
    color: COLORS.textMuted,
  },
})