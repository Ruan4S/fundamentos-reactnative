import { StyleSheet, Text, View } from "react-native";
import Estilo from "../../styles/Estilo";

export default ({ num }) => {
  return (
    <View style={style.Container}>
      <Text style={[Estilo.txtG, style.Numero]}>{num}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  Container: {
    height: 50,
    width: 50,
    backgroundColor: "#000",
    margin: 5,
    borderRadius: 25,
  },
  Numero: {
    color: "#FFF",
  },
});
