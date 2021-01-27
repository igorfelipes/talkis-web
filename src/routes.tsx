import React from 'react';

import { Switch, Route } from 'react-router-dom';

// import Home from './Pages/Home';
import Login from './Pages/Login';
import CaptureForms from './Pages/CaptureForms';
import Dashboard from './Pages/Dashboard';
import LinkAccount from './Pages/LinkAccount';
import ForgotPassword from './Pages/ForgotPassword';
import MailSent from './Pages/MailSent';
import Settings from './Pages/Settings';
import NewPost from './Pages/NewPost';
import NewForm from './Pages/NewForm';
import ViewForm from './Pages/ViewForm';


// const PrivateRoute = ({...rest}) => {
//     return isAuthenticated() ? <Route {...rest}/> : <Redirect to="/login"/>
// }


function Routes() {
    return (
        <Switch>
            {/* <Route path="/" exact component={Home}/> */}
            <Route path="/login" component={Login}/>
            <Route path="/forgot-password" component={ForgotPassword}/>
            <Route path="/mail-sent" component={MailSent}/>
            <Route path="/Dashboard" component={Dashboard}/>
            <Route path="/capture-forms" component={CaptureForms}/>
            <Route path="/new-form" component={NewForm}/>
            <Route path="/view-form" component={ViewForm}/>
            <Route path="/link-account" component={LinkAccount}/>
            <Route path="/new-post" component={NewPost}/>
            <Route path="/settings" component={Settings}/>
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    )
}

export default Routes;