import React from "react";
import { Link } from "react-router-dom";
import { Button } from '@mantine/core';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    const { loggedIn, currentUser } = this.props;
    if (loggedIn) {
      return (
        <div>
          <p>Welcome @{currentUser.handle}</p>
          <Button onClick={this.logoutUser}>Logout</Button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={"/signup"}>Signup</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <nav>
        <Link to='/'><h1>Siddur, by Shafeh.org</h1></Link>
        {this.getLinks()}
      </nav>
    );
  }
}

export default NavBar;