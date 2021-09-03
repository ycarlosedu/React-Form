import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import {Container, Typography} from "@material-ui/core"
import {validarCPF, validarSenha} from './models/cadastro'
import ValidacoesCadastro from './contexts/ValidacoesCadastro'

class App extends Component {

  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography component="h1" variant="h3" align="center">Formulário de Cadastro</Typography>
        <ValidacoesCadastro.Provider value={{CPF:validarCPF, senha:validarSenha, nome:validarSenha}}>
          <FormularioCadastro onSubmit={onSubmit} />
        </ValidacoesCadastro.Provider>
      </Container>
      );
  }
}

function onSubmit(dados) {
  console.log(dados);
}

export default App;
