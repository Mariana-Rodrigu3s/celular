import {View, Text, StyleSheet, Button, Pressable} from 'react-native'
import { COLORS } from '../constants/colors'


export default function MetaDiaria({onMeta, meta}){

    return(
        <View style={styles.card}>
            <Text>
                Ajustar media diaria:
            </Text>

            <View style={styles.buttonRow}>
                <Pressable style={styles.button} onPress={() => onMeta(-250)}>
                    <Text >-250ml</Text>
                </Pressable>

                <Text style={styles.consumedText}>
                    {meta}ml
                </Text>

                <Pressable style={styles.button} onPress={() => onMeta(250)}>
                    <Text>+250ml</Text>
                </Pressable>
            </View>
        </View>
    )
}





const styles = StyleSheet.create({
    card: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 16,
  },
  button: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  consumedText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.primary,}




})