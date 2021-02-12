import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

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
import CreditPackage from './Pages/CreditPackage';
import Payment from './Pages/Payment';
import Attendance from './Pages/Attendance';

import { isAuthenticated } from './services/auth';


const PrivateRoute = ({...rest}) => {
    return isAuthenticated() ? <Route {...rest}/> : <Redirect to="/login"/>
}


function Routes() {
    return (
        <Switch>
            {/* <Route path="/" exact component={Home}/> */}
            <Route path="/login" component={Login}/>
            <Route path="/forgot-password" component={ForgotPassword}/>
            <Route path="/mail-sent" component={MailSent}/>
            <PrivateRoute path="/Dashboard" component={Dashboard}/>
            <PrivateRoute path="/capture-forms" component={CaptureForms}/>
            <PrivateRoute path="/new-form" component={NewForm}/>
            <PrivateRoute path="/view-form" component={ViewForm}/>
            <PrivateRoute path="/link-account" component={LinkAccount}/>
            <PrivateRoute path="/new-post" component={NewPost}/>
            <PrivateRoute path="/attendance" component={Attendance}/>
            <PrivateRoute path="/credit-package" exact component={CreditPackage}/>
            <PrivateRoute path="/credit-package/payment" component={Payment}/>
            <PrivateRoute path="/settings" component={Settings}/>
            <PrivateRoute path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    )
}

export default Routes;