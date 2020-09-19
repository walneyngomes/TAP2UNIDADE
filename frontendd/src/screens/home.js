import React from 'react';
import {Link} from "react-router-dom";

export default function Home(){

    return(

        <div className= "container">
        <h1> BEM VINDOS AO CURSO</h1>
        <Link to="/usuarios">
        <button className= "button"> LISTA TODOS USUARIOS</button>

        </Link>
        </div>
    );


}
