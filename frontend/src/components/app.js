import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import Footer from "./footer/footer";

import MainPage from "./main/main_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import Siddur from "./main/siddur";
import SiddurEdit from "./main/siddur_edit_container";

import './body.css';

const App = () => (
  <section>
    <NavBarContainer />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/siddur" component={Siddur} />
      <ProtectedRoute exact path="/siddur/edit" component={SiddurEdit} />
    </Switch>
    <Footer />
  </section>
);

export default App;