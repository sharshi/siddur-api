import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./components/root";
import configureStore from "./store/store";
import jwt_decode from "jwt-decode";

import { setAuthToken } from "./util/session_api_util";
import { logout } from "./actions/session_actions";

document.addEventListener('DOMContentLoaded', () => {
  let store;
  const navbar = [
    {
      label: "Home",
      showWhenLoggedOut: true,
      url: "/"
    },
    {
      label: "Siddur",
      showWhenLoggedOut: true,
      url: '/siddur',
    },
    {
      label: "Edit Siddur",
      showWhenLoggedOut: false,
      url: '/siddur/edit',
    }
  ];
  
  // returning signed in user
  if (localStorage.jwtToken) {
    //Set the token as a common header for all axios requests
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);

    // sets preloadedState to the user pulled from storage
    const preloadedState = {
      session: { isAuthenticated: true, user: decodedUser },
      ui: {tabs: navbar}
    };

    store = configureStore(preloadedState);

    // time in seconds
    const currentTime = Date.now() / 1000;
    
    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = "#";
    }
  } else {
    // jwtToken not found 
    store = configureStore({ ui: { tabs: navbar }});
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root)
});