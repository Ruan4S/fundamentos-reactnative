import { StyleSheet, Text, View } from "react-native";
import Estilo from "../../styles/Estilo";

export default ({ num }) => {
  return (
    <View style={style.Display}>
      <Text style={[Estilo.txtG, style.DisplayText]}>{num}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  Display: {
    backgroundColor: "#000",
    padding: 20,
    width: 300,
  },
  DisplayText: {
    color: "#fff",
  },
});
