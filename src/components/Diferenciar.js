import { Platform, Text } from "react-native";
import Estilo from "../styles/Estilo";

export default () => {
  if (Platform.OS === "android") {
    return <Text style={Estilo.txtG}>Android</Text>;
  } else if (Platform.OS === "ios") {
    return <Text style={Estilo.txtG}>IOS</Text>;
  } else {
    return <Text style={Estilo.txtG}>Eita!!!</Text>;
  }
};
