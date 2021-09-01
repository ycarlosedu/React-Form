import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import {Container, Typography} from "@material-ui/core"

class App extends Component {

  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography component="h1" variant="h3" align="center">Formulário de Cadastro</Typography>
        <FormularioCadastro onSubmit={onSubmit} validarCPF={validarCPF}/>
      </Container>
      );
  }
}

function onSubmit(dados) {
  console.log(dados);
}

function validarCPF(CPF) {
  if(CPF.length !== 11){
    return {valido: false, texto:"O CPF deve ter 11 dígitos!"}
  }else{
    return {valido: true, texto:""}
  }
}

export default App;
