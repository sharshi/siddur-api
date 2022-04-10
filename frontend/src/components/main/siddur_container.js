import { connect } from "react-redux";
import { fetchSiddur, updateParagraph,  } from "../../actions/siddur_actions";
import Siddur from "./siddur";

const mapStateToProps = state => {
  return {
    siddurParagraphs: state.entities.siddur,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // findParagraph: paragraph => dispatch(findParagraph(paragraph)),
    fetchSiddur: () => dispatch(fetchSiddur()),
    updateParagraph: paragraphId => dispatch(updateParagraph(paragraphId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Siddur);
