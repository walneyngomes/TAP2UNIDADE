import React from 'react';
import './estilos/TopoEstilo.css';
import Slide from './images/bookflixlogo.png'


export default function(){
    return (
    
        <header className="header-basic">

			<div className="header-limiter">

              <img src={Slide } value="LOGO"  alt="logotipo--book--flix"/>
              


                <nav>
                <a href={'./login'}>LOGOFF</a>
                    <div className="usuario">
                <a>USUARIO</a>
               
                
                </div>
            
                </nav>
                
                </div>

		</header>
       
    )
}


