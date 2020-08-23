import React from 'react';
import {Switch, Route} from 'react-router-dom';


import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Vote from '../pages/Vote'

const Routes: React.FC = () =>(

    <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/vote" component={Vote}/>
    </Switch>

)

export default Routes;