import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "./componentes/AutenticacaoLogin";
import Usuarios from "./componentes/usuarioTela"
import Livro from "./componentes/TelaLivro"

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
               <Route path="/" exact component={Login} />

                <Route path="/login" exact component={Login} />
                <Route path="/inicio"  component={Usuarios} />
                <Route path="/inserirLivro"  component={Livro} />

            </Switch>
        </BrowserRouter>
    );
}