import React from 'react';
import  './estilos/AutenticacaoEstilo.css';
import Topo from './TopoSite.js'
import Rodape from './Rodape'


	
	
export default function(){

	return (
	<div>
		
		<Topo/>
	
	<div className="Autenticacao">
         
	
	<div className="form-container sign-in-container">
		<form action="#" id="logo">
			<h1>BOOKFLIXs</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="./CadastroTela">CADASTRO</a>
			<button >Entrar  </button>
		</form>
	</div>
	
</div>
	<Rodape/>
	
	</div>)
	
}

