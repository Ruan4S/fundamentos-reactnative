import { Text } from "react-native";
import Estilo from "../styles/Estilo";

export default (props) => (
  <Text style={Estilo.txtG}>
    O valor {props.max} é maior que o valor {props.min}!
  </Text>
);
