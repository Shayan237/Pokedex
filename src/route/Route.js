import React from 'react';
import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import {Route} from 'react-router-dom';
const MainRoute =()=> 
{
    return(
        <div>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/details/:id" component={Details}/>
        </div>
    )
}

export default MainRoute;