import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "./App";
import PrivateRoute from "./cmps/PrivateRoute";
import NavBar from "./cmps/nav-bar";
import Footer from "./cmps/footer";
import ContactPage from "./pages/contact-page";
import HomePage from "./pages/home-page";
import ContactDetails from "./pages/contact-details";
import Charts from "./pages/charts";
import EditPage from "./pages/edit-page";
import LoginPage from "./pages/login-Page";

const history = createBrowserHistory();

function App() {
  return (
    <section>
      <Router history={history}>
        <NavBar />
        <main>
          <Switch>
            <PrivateRoute path="/" exact component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/contact/edit/:id?" component={EditPage} />
            <PrivateRoute path="/contact/:id" component={ContactDetails} />
            <PrivateRoute path="/contact" exact component={ContactPage} />
            <PrivateRoute path="/charts" component={Charts} />
            <Redirect from="*" to="/" />
          </Switch>
        </main>
      </Router>
      <Footer />
    </section>
  );
}

export default App;
