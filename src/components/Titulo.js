import { Text } from "react-native";
import Estilo from "../styles/Estilo";

export default ({ principal, secundario }) => (
  <>
    <Text style={Estilo.txtG}>{principal}</Text>
    <Text>{secundario}</Text>
  </>
);
