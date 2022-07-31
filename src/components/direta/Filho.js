import { Text } from "react-native";
import Estilo from "../../styles/Estilo";

export default ({ a, b }) => {
  return (
    <>
      <Text style={Estilo.txtG}>{a}</Text>
      <Text style={Estilo.txtG}>{b}</Text>
    </>
  );
};
