import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';

import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './App.css';

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);
  const stripePromise = loadStripe(process.env.STRIPE_KEY);
  return (
    <Provider store={store}>
      <Router>
        <Elements stripe={stripePromise}>
          <Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route component={Routes} />
            </Switch>
          </Fragment>
        </Elements>

      </Router>
    </Provider>
  );
};

export default App;
