import { connect } from "react-redux";
import { fetchSiddur, updateParagraph, clearErrors } from "../../actions/siddur_actions";
import Siddur from "./siddur";

const mapStateToProps = state => {
  return {
    siddurParagraphs: state.entities.siddur,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSiddur: () => dispatch(fetchSiddur()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Siddur);
