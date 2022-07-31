import { Component } from "react";
import { Button, Text, TextInput, View } from "react-native";
import Estilo from "../../styles/Estilo";
import MegaNumero from "./MegaNumero";
export default class Mega extends Component {
  state = {
    qtdNumeros: this.props.qtdNumeros,
    numeros: [],
  };

  /*   constructor(props) {
    super(props);

    this.alterarQtdNumero = this.alterarQtdNumero.bind(this);

    this.state = {
      qtdNumeros: props.qtdNumeros,
    };
  } */

  alterarQtdNumero = (qtd) => {
    this.setState({ qtdNumeros: +qtd });
  };

  gerarNumeroNaoContido = (nums) => {
    const novo = parseInt(Math.random() * 60) + 1;
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
  };

  gerarNumeros = () => {
    const numeros = Array(this.state.qtdNumeros)
      .fill()
      .reduce((n) => [...n, this.gerarNumeroNaoContido(n)], [])
      .sort((a, b) => a - b);
    this.setState({ numeros });
  };

  gerarNumerosAlternativo = () => {
    const { qtdNumeros } = this.state;
    const numeros = [];

    for (let i = 0; i < qtdNumeros; i++) {
      const n = this.gerarNumeroNaoContido(numeros);
      numeros.push(n);
    }

    numeros.sort((a, b) => a - b);

    this.setState({ numeros });
  };

  exibirNumeros = () => {
    const nums = this.state.numeros;

    return nums.map((num) => {
      return <MegaNumero key={num} num={num} />;
    });
  };

  render() {
    return (
      <>
        <Text style={Estilo.txtG}>Gerador de Mega-sena </Text>
        <TextInput
          keyboardType="numeric"
          style={{ borderBottomWidth: 1 }}
          placeholder="Qtde de Números"
          value={`${this.state.qtdNumeros}`}
          onChangeText={this.alterarQtdNumero}
        />
        <Button title="Gerar" onPress={this.gerarNumerosAlternativo} />
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {this.exibirNumeros()}
        </View>
      </>
    );
  }
}
