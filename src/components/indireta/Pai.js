import { useState } from "react";
import { Text } from "react-native";
import Estilo from "../../styles/Estilo";
import Filho from "./Filho";

export default ({}) => {
  const [texto, setTexto] = useState("");
  const [num, setNum] = useState(0);

  function exibirValor(numero, texto) {
    setNum(numero);
    setTexto(texto);
  }

  return (
    <>
      <Text style={Estilo.txtG}>
        {texto}
        {num}
      </Text>
      <Filho min={1} max={60} funcao={exibirValor} />
    </>
  );
};
