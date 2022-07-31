import { Text } from "react-native";
import Estilo from "../../styles/Estilo";

import produtos from "./produtos";

export default ({}) => {
  return (
    <>
      <Text style={Estilo.txtG}>Lista de Produtos</Text>

      {produtos.map((produto) => {
        return (
          <Text key={produto.id}>
            {produto.id}) {produto.nome} tem preço R$ {produto.preco}
          </Text>
        );
      })}
    </>
  );
};
