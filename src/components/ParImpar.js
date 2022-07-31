import { Text, View } from "react-native";
import Estilo from "../styles/Estilo";

export default ({ num = 0 }) => {
  return (
    <View>
      <Text style={Estilo.txtG}>O resultado é:</Text>
      {num % 2 === 0 ? (
        <Text style={Estilo.txtG}>Par</Text>
      ) : (
        <Text style={Estilo.txtG}>Ímpar</Text>
      )}
    </View>
  );
};
