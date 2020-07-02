import React, { Fragment, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Routes from "./components/routing/Routes";

import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./App.css";
import "./giving/css/open-iconic-bootstrap.min.css";
import "./giving/css/animate.css";
// import "./giving/css/owl.carousel.min.css"
import "./giving/css/owl.theme.default.min.css";
import "./giving/css/magnific-popup.css";
import "./giving/css/aos.css";
import "./giving/css/ionicons.min.css";
import "./giving/css/bootstrap-datepicker.css";
import "./giving/css/jquery.timepicker.css";
import "./giving/css/flaticon.css";
import "./giving/css/icomoon.css";
import "./giving/css/style.css";
import "./dashkit/dist/assets/css/theme.min.css";
import Drawer from "./components/layout/Drawer";
import useScript from "./utils/useScript";
import ScrollToTop from "./components/layout/ScrollToTop";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const App = () => {
  useScript("https://code.jquery.com/jquery-3.4.1.slim.min.js");
  useScript(
    "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
  );
  useScript(
    "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
  );

  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);
  const stripePromise = loadStripe(
    "pk_test_JEBQUnSNjHYgECD1MQ28XFba00xAihSHKP"
  );
  return (
    <Provider store={store}>
      <Router>
        <Elements stripe={stripePromise}>
          <Fragment>
            <Navbar />

            <Drawer />
            <ScrollToTop />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route component={Routes} />
            </Switch>

            <footer className="footer">
              <div className="container">
                <div className="row mb-5">
                
                  <div className="col-md-6 col-lg-4">
                    <h3 className="heading-section">Blog</h3>

                    <TwitterTimelineEmbed
                      sourceType="profile"
                      screenName="socialgoodorg"
                      options={{ height: 400, width: "100%" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <h3 className="heading-section">Pledge to our donors</h3>
                    <p className="mb-5">
                    We are constantly rolling out updates to give you realtime feedback to track your $ impact at the smallest scale in the communities you wish.
                    </p>

                  
                    <p>
                      <a href="#" className="btn btn-primary px-4 py-3">
                        Join Volunteer
                      </a>
                    </p>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="block-23">
                      <h3 className="heading-section">Contact Info</h3>
                      <ul>
                        <li>
                          <span className="icon icon-map-marker" />
                          <span className="text">
                             University of Toronto
                          </span>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon icon-phone" />
                            <span className="text">1 800 818 8183</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon icon-envelope" />
                            <span className="text">socialgoodtoday@develow.com</span>
                          </a>
                        </li>
                        <li>
                          <span className="icon icon-clock-o" />
                          <span className="text">
                            Monday — Friday 8:00am - 12:00pm
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row pt-5">
                  <div className="col-md-12 text-center">
                    <p>
                      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                      socialgoodtoday © 2020</p>
                  </div>
                </div>
              </div>
            </footer>
          </Fragment>
        </Elements>
      </Router>
    </Provider>
  );
};

export default App;
