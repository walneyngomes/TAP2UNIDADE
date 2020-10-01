import  './estilos/AutenticacaoEstilo.css';
import Topo from './TopoSite.js'
import Rodape from './Rodape'
import React, {useState} from 'react';
import api from '../api'

	
	
export default function(){
	const [name1, setNome] = useState('');
	const [email1, setEmail] = useState('');
    const [password1, setPassword] = useState('');
		 async function handleSubmit(){
			
		

			const data = {
					name:"ad",
					email:email1,
				password:password1   
				       
			};

			if(email1!="walneycg@gmail.com" ){
				alert('NAO ESTA NO BANCO');
				function redirecionar() {
					window.location.href = "/login";
					document.getElementById("fundo").style.background = "red";
			
				};
				setTimeout(redirecionar, 0);

			}else{

			const response = await api.post('/auth/login',data)
			if(response===200){
				alert('Bem vindo');
			}else{
				console.log(data);
				
			}

		}

		}
	return (
		<div>
				<Topo/>
		<div class="login">
				

		<h1>LOGIN</h1>
		<form>

			<p>Usuário</p>
			
			<input type="text" name="" placeholder="Usuário ou Email" required value={email1} onChange={e=>setEmail(e.target.value)}  />
			
			<p>Senha</p>
		
			<input type="password" name="" placeholder="Insira sua senha" required value={password1} onChange={e=>setPassword(e.target.value)}/>
		
						 

		
		




		</form>
		<a href="http://localhost:3000/inicio"><input  onClick={()=>handleSubmit() } type="submit" value="Entrar" /></a>

	</div>
	</div>
	
	
	)
	
}

