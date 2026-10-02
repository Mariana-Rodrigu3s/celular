import {View, Text, StyleSheet, Button, Pressable} from 'react-native'
import { COLORS } from '../constants/colors'


export default function ActionButon({onAdd, onReset}){
    return(


    <View style={styles.container}>
      <Text style={styles.label}>Adicionar consumo:</Text>

      <View style={styles.buttonRow}>
        {/* Adiciona 100 */}
        <Pressable style={styles.button} onPress={() => onAdd(100)}>
          <Text style={styles.buttonText}>+ 100 mL</Text>
        </Pressable>
        {/* Adiciona 200 mL */}
        <Pressable style={styles.button} onPress={() => onAdd(200)}>
          <Text style={styles.buttonText}>+ 200 mL</Text>
        </Pressable>

        {/* Adiciona 350 mL */}
        <Pressable style={styles.button} onPress={() => onAdd(350)}>
          <Text style={styles.buttonText}>+ 350 mL</Text>
        </Pressable>

        {/* Adiciona 500 mL */}
        <Pressable style={styles.button} onPress={() => onAdd(500)}>
          <Text style={styles.buttonText}>+ 500 mL</Text>
        </Pressable>
      </View>

      {/* Botão para reiniciar a contagem */}
      <Pressable style={styles.resetButton} onPress={onReset}>
        <Text style={styles.resetButtonText}>Reiniciar</Text>
      </Pressable>


    
    </View>


  );
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textMain,
    marginBottom: 12,
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
  buttonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  resetButton: {
    backgroundColor: COLORS.danger,
    borderWidth: 1,
    borderColor: COLORS.danger,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  resetButtonText: {
    color: COLORS.cardBg,
    fontWeight: '600',
    fontSize: 13,
  },
});