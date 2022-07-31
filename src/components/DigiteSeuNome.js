import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Estilo from "../styles/Estilo";

export default ({}) => {
  const [nome, setNome] = useState("");

  return (
    <View>
      <Text>{nome}</Text>
      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={(nome) => setNome(nome)}
      />
    </View>
  );
};
