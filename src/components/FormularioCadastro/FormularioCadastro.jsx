import React, {useState} from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({onSubmit, validarCPF}) {
	const [nome, setNome] = useState("");
	const [sobrenome, setSobrenome] = useState("");
	const [CPF, setCPF] = useState("");
	const [promocoes, setPromocoes] = useState(true);
	const [novidades, setNovidades] = useState(true);
	const [erros, setErros] = useState({CPF:{valido:true, texto:""}});

	return (
		<form onSubmit={(event) => {
			event.preventDefault();
			onSubmit({nome, sobrenome, CPF, novidades, promocoes})
		}}>

			<TextField
			value={nome}
			onChange={event => {
				setNome(event.target.value);
			}}
			id="nome"
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
			onBlur={event => {
				const isValid = (validarCPF(CPF))
				setErros({CPF:isValid});
			}}
			error={!erros.CPF.valido}
			helperText={erros.CPF.texto}
			id="CPF"
			label="CPF"
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
			Cadastrar
			</Button>
		</form>
	);
}

export default FormularioCadastro;
