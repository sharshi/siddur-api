import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { findParagraph } from "../../actions/siddur_actions";

const mapDispatchToProps = dispatch => {
  return {
    findParagraph: paragraph => dispatch(findParagraph(paragraph))
  };
};

class Siddur extends React.Component {

  render() {
    return (
      <>
        <h1>Siddur</h1>
        <Link to={{
          pathname: '/siddur/edit',
          fromNotifications: "findParagraph will return _id"
        }}>Edit</Link>
      </>
    )
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Siddur);
