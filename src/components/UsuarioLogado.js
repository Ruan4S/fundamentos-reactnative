import { Text } from "react-native";
import Estilo from "../styles/Estilo";
import If from "./If";

export default ({ propsUsuario }) => {
  const usuario = propsUsuario || {};

  return (
    <>
      <If teste={usuario && usuario.nome && usuario.email}>
        <Text style={Estilo.txtG}>Usuário Logado:</Text>
        <Text style={Estilo.txtG}>
          {usuario.nome} - {usuario.email}
        </Text>
      </If>
    </>
  );
};
