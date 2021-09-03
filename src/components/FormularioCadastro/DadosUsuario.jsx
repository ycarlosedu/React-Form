import { TextField, Button } from "@material-ui/core";
import React, {useState, useContext} from "react";
import validacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErrors from "../../hooks/useErrors";

function DadosUsuario({onSubmit}) {
   const [email, setEmail] = useState("")
   const [senha, setSenha] = useState("")
	const validacoes = useContext(validacoesCadastro)
   const [erros, validarCampos, possoEnviar] = useErrors(validacoes);

   return (
      <form onSubmit={(event) =>{
         event.preventDefault();
         if(possoEnviar()){
            onSubmit({email, senha});
         }
      }}>
         <TextField
            value={email}
            onChange={(event) =>{
               setEmail(event.target.value);
            }}
            id="email"
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
         />
         <TextField
            value={senha}
            onChange={(event) =>{
               setSenha(event.target.value);
            }}
            onBlur={validarCampos}
            error={!erros.senha.valido}
            helperText={erros.senha.texto}
            id="senha"
            name="senha"
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
         />
         <Button type="submit" variant="contained" color="primary">
            Próximo
         </Button>
      </form>
   );
}

export default DadosUsuario;
