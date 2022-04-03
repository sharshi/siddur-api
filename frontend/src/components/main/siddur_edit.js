import React from "react";

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

export default SiddurEdit;