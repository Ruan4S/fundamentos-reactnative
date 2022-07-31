import { Text } from "react-native";
import Estilo from "../../styles/Estilo";

export default ({ nome, sobrenome }) => {
  return (
    <Text style={Estilo.txtG}>
      {nome} {sobrenome}
    </Text>
  );
};
