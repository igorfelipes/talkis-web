import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

// import Home from './Pages/Home';
import Login from './Pages/Login';
import CaptureForms from './Pages/CaptureForms';


// const PrivateRoute = ({...rest}) => {
//     return isAuthenticated() ? <Route {...rest}/> : <Redirect to="/login"/>
// }


function Routes() {
    return (
        <Switch>
            {/* <Route path="/" exact component={Home}/> */}
            <Route path="/login" component={Login}/>
            <Route path="/capture-forms" component={CaptureForms}/>
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    )
}

export default Routes;