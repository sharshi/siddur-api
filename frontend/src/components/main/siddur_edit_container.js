import { connect } from "react-redux";
import { updateParagraph } from "../../actions/siddur_actions";
import SiddurEdit from "./siddur_edit";

const mapStateToProps = (state, ownProps) => {
    return {
        siddur: state.entities.siddur[0]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateParagraph: paragraph => dispatch(updateParagraph(paragraph))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SiddurEdit);