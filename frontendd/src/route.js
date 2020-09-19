import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "./componentes/AutenticacaoLogin";
import Usuarios from "./componentes/usuarioTela"

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/inicio"  component={Usuarios} />
            </Switch>
        </BrowserRouter>
    );
}