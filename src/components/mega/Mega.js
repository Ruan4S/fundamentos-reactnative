import { Component } from "react";
import { Text, TextInput } from "react-native";
import Estilo from "../../styles/Estilo";

export default class Mega extends Component {
  state = {
    qtdNumeros: this.props.qtdNumeros,
  };

  alterarQtdNumero = (qtd) => {
    this.setState({ qtdNumeros: qtd });
  };

  /*   constructor(props) {
    super(props);

    this.alterarQtdNumero = this.alterarQtdNumero.bind(this);

    this.state = {
      qtdNumeros: props.qtdNumeros,
    };
  } */

  render() {
    return (
      <>
        <Text style={Estilo.txtG}>Gerador de Mega-sena {this.state.qtdNumeros}</Text>
        <TextInput
          keyboardType="numeric"
          style={{ borderBottomWidth: 1 }}
          placeholder="Qtde de Números"
          value={this.state.qtdNumeros}
          onChangeText={this.alterarQtdNumero}
        />
      </>
    );
  }
}
