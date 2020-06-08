import React from "react";
import { connect } from "react-redux";
import { updateParagraph } from "../../actions/siddur_actions";

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    siddur: state.entities.siddur[0]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateParagraph: paragraph => dispatch(updateParagraph(paragraph))
  };
};

class SiddurEdit extends React.Component {


  componentDidMount() {
    const { fromNotifications } = this.props.location
    console.log(fromNotifications)
  }

  render() {
    return (
      <>
        <h1>Siddur Edit</h1>
      </>
    );
  };
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(SiddurEdit);