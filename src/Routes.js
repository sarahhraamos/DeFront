import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Framework from './pages/framework.js';
import Libs from './pages/libs.js';
import Main from './pages/home.js';
import Cadastro from './pages/cadastro.js'



const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/home" exact component={Main} />
            <Route path="/framework" component={Framework} />
            <Route path="/libs"  component={Libs} /> 
            <Route path="/cadastro"  component={Cadastro} />
        </Switch>
    </BrowserRouter>
);

    export default Routes;