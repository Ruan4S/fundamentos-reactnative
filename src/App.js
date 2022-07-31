import { StatusBar, View, StyleSheet, SafeAreaView } from "react-native";

import CompPadrao, { Comp1, Comp2 } from "./components/Multi";
import Primeiro from "./components/Primeiro";
import MinMax from "./components/MinMax";
import Aleatorio from "./components/Aleatorio";
import Titulo from "./components/Titulo";
import Botao from "./components/Botao";
import Contador from "./components/Contador";
import PaiDireto from "./components/direta/Pai";
import PaiIndireto from "./components/indireta/Pai";
import ContadorV2 from "./components/contador/ContadorV2";
import Diferenciar from "./components/Diferenciar";
import ParImpar from "./components/ParImpar";
import Familia from "./components/relacao/Familia";
import Membro from "./components/relacao/Membro";
import UsuarioLogado from "./components/UsuarioLogado";
import ListaProdutos from "./components/produtos/ListaProdutos";
import ListaProdutosV2 from "./components/produtos/ListaProdutosV2";
import DigiteSeuNome from "./components/DigiteSeuNome";
import FlexboxV1 from "./components/layout/FlexboxV1";
import FlexboxV2 from "./components/layout/FlexboxV2";
import FlexboxV3 from "./components/layout/FlexboxV3";
import FlexboxV4 from "./components/layout/FlexboxV4";

export default () => (
  <SafeAreaView style={style.App}>
    <FlexboxV4 />
    {/*
    <FlexboxV3 />
    <FlexboxV2 />
    <FlexboxV1 />
    <DigiteSeuNome />
    <ListaProdutosV2 />
    <ListaProdutos />
    <UsuarioLogado usuario={{ nome: "Gui", email: "gui@gui.com" }} />
    <UsuarioLogado usuario={{ nome: "Ana" }} />
    <UsuarioLogado usuario={{ email: "carlos@empresa.com" }} />
    <UsuarioLogado usuario={null} />
    <UsuarioLogado usuario={{}} />
    <Familia>
      <Membro nome="Bia" sobrenome="Arruda" />
      <Membro nome="Carlos" sobrenome="Arruda" />
    </Familia>
    <Familia>
      <Membro nome="Ana" sobrenome="Silva" />
      <Membro nome="Julia" sobrenome="Silva" />
      <Membro nome="Gui" sobrenome="Silva" />
      <Membro nome="Rebeca" sobrenome="Silva" />
    </Familia>
    <ParImpar num={3} />
    <Diferenciar />
    <ContadorV2 />
    <PaiIndireto />
    <PaiDireto />
    <Contador inicial={0} />
    <Contador inicial={0} passo={12} />
    <Botao />
    <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro Produto" />
    <Aleatorio min={1} max={60} />
    <MinMax min={3} max={20} />
    <MinMax min={1} max={94} />
     <CompPadrao />
    <Comp1 />
    <Comp2 />
    <Primeiro /> 
    */}

    <StatusBar style="auto" />
  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
