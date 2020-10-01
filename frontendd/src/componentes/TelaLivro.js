import React from 'react';
import  './estilos/TelaUsuario.css';
import Topo from './TopoSiteUsuario';
import Rodape from './Rodape'
import api from '../api'
import  {useState} from 'react';


	
	
export default function(){
    const [title1 , setTitle] = useState('');
	const [price1, setPrece] = useState('');
    const [description1, setDescription] = useState('');
    const [url1, setUrl] = useState('');
		 async function handleSubmit(){
			const data = {
                title:title1  ,      
                price:price1 ,        
                description: description1,     
                buyUrl:url1
				       
			};

			
			const response = await api.post('/livro',data)
			if(response===200){
				alert('Bem vindo');
			}else{
				console.log(data);
			}

		}
	return (
	<div><Topo/>
    <div id="meio">
    <div class="conteudo">
        <h2>ACERVO DE LIVROS </h2>
    </div>
    <form>
    <p>TITLE</p>
    <input type="Tile" placeholder="Tile" value={title1} onChange={e=>setTitle(e.target.value)} />

    <p>PREÇO</p>
    <input type="Tile" placeholder="Tile" value={price1} onChange={e=>setPrece(e.target.value)} />
        <p>DESCRICAO</p>
        <input type="Tile" placeholder="Tile" value={description1} onChange={e=>setDescription(e.target.value)} />
    <p>URL</p>
    <input type="Tile" placeholder="Tile" value={url1} onChange={e=>setUrl(e.target.value)} />
    </form>   


    <input href="/inicio" onClick={()=>handleSubmit()} type="submit" name="" value="ENVIAR" />
    <a href="http://localhost:3000/inicio"><button class="VOLTAR">+ INSERIR LIVRO</button></a>

   


    
        











        
     <Rodape/>	</div></div>
		
		










)
	
}
