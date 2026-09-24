import { View, Text } from "react-native";
import { COLORS } from "../constants/colors";

export function WaterProgress({consumido=5000, objetivo=2000}){

const porcentagem = Math.min(100, Math.round(consumido/objetivo*100))


return(
    <View>
        <Text>
            Você bebeu {consumido}ml de água hoje.
        </Text>
        <Text>
            Voce atingiu {porcentagem}% da meta diaria.
        </Text>
    </View>
)
}
