import React, {useState, useContext} from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import validacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErrors from "../../hooks/useErrors";

function DadosPessoais({onSubmit}) {
	const [nome, setNome] = useState("");
	const [sobrenome, setSobrenome] = useState("");
	const [CPF, setCPF] = useState("");
	const [promocoes, setPromocoes] = useState(true);
	const [novidades, setNovidades] = useState(true);
	const validacoes = useContext(validacoesCadastro)
   const [erros, validarCampos, possoEnviar] = useErrors(validacoes);

	

	return (
		<form onSubmit={(event) => {
			event.preventDefault();
         if(possoEnviar()){
				onSubmit({nome, sobrenome, CPF, novidades, promocoes})
			}
		}}>

			<TextField
			value={nome}
			onChange={event => {
				setNome(event.target.value);
			}}
			onBlur={validarCampos}
			error={!erros.nome.valido}
			helperText={erros.nome.texto}
			id="nome"
			name="nome"
			label="Nome"
			variant="outlined"
			fullWidth
			margin="normal"
			/>

			<TextField
			value={sobrenome}
			onChange={event => {
				setSobrenome(event.target.value);
			}}
			id="sobrenome"
			name="sobrenome"
			label="Sobrenome"
			variant="outlined"
			fullWidth
			margin="normal"
			/>

			<TextField
			value={CPF}
			onChange={event => {
				let novoCpf = event.target.value
				if (novoCpf.length > 11){
					novoCpf = novoCpf.substring(0,11)
				}
				setCPF(novoCpf);
			}}
			onBlur={validarCampos}
			error={!erros.CPF.valido}
			helperText={erros.CPF.texto}
			id="CPF"
			name="CPF"
			label="CPF"
         type="number"
			variant="outlined"
			fullWidth
			margin="normal"
			/>

			<FormControlLabel
			checked={promocoes}
			onChange={event =>{
				setPromocoes(event.target.checked)
			}}
			label="Promoções"
			control={
				<Switch name="promocoes" color="primary"></Switch>
			}
			></FormControlLabel>

			<FormControlLabel
			checked={novidades}
			onChange={event =>{
				setNovidades(event.target.checked)
			}}
			label="Novidades"
			control={
				<Switch name="novidades" color="primary"></Switch>
			}
			></FormControlLabel>

			<Button type="submit" variant="contained" color="primary">
			Próximo
			</Button>
		</form>
	);
}

export default DadosPessoais;
