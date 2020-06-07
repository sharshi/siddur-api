import React from "react";
import { Link } from "react-router-dom";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        go to the <Link to='/siddur'>Siddur</Link>
      </div>
    );
  }
}

export default MainPage;