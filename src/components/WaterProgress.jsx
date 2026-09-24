import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";



export function WaterProgress({ consumed, goal }) {

  const porcentagem = Math.min(Math.round((consumed / goal) * 100), 100)

  return (
    <View>
      <Text>Você bebeu {consumed}ml de água hoje.</Text>
      <Text>Você atingiu {porcentagem}% da meta diária.</Text>

      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${porcentagem}%` }]} />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({

  progressBarBackground: {
    width: '100%',
    height: 12,
    backgroundColor: '#E0F2FE',
    borderRadius: 6,
    overflow: 'hidden',
  },

  progressBarFill: {
    height: '100%',
    backgroundColor: COLORS.secondary,
    borderRadius: 6,
  },

});