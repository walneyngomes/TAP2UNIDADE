import React, {useState} from 'react';
import './AutenticacaoEstilo.css';
import Topo from './TopoSite.js'
import Rodape from './Rodape'
import api from '../servidor/api'

	
	
export default function(){

	const [nome, setNome] =useState('');
	const [email, setEmail]= useState('');
	const [cpf , setCpf]= useState('');
	const [password , setPassword]= useState('');
	
	function loginBotao(){
		
		setTimeout(function(){
			window.location="http://localhost:3000/AutenticacaoLogin";
		  },5);
		
	}


	//callback entre função
	const salvar =(next)=>{
	const data= {
	
		"name":nome,
    "cpf":cpf,
    "password":password,
    "email":email
	}

	//post no banco
	if(data.name!=='' && data.password!=='' && data.email !== ''){
			const response = api.post('/usuario',data)
	alert("Realize o Login")
			next();
			}
		else{
			alert("PRENCHA TODOS OS CAMPOS")
			next();
		}


}



	return (
	<div>
		
		<Topo/>
	
	<div className="Autenticacao">
            <div className="container" id="container">
	
	<div className="form-container sign-in-container">
		<form action="#">
			<h1>CADASTRO</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<input type="Nome" placeholder="Nome" value={nome} onChange={e=>setNome(e.target.value)}/>
			<input type="Email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
			<input type="Cpf" placeholder="CPF" value={cpf} onChange={e=>setCpf(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
			<button onClick={()=>{salvar(loginBotao())}}>ENVIAR  </button>
			
			
		</form>
	</div>
	
</div>
	</div>
	
	<Rodape/>
	</div>)
	
}