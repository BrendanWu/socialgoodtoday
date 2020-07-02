import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import NotFound from '../layout/NotFound';
import Dashboard from '../dashboard/Dashboard';
import PrivateRoute from '../routing/PrivateRoute';
import About from '../layout/About';
import Donate from '../layout/Donate';
import Success from '../layout/Success'
import Admin from '../dashboard/Admin';
import Charity from '../charities/Charity';

const Routes = props => {
  return (
    <section>
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/donate" component={Donate}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/success" component={Success}/>
        <Route exact path="/admin" component={Admin}/>
        <Route exact path="/charities/:id" component= {Charity}/>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
