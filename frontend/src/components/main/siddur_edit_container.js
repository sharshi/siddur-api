import { connect } from "react-redux";
import { fetchSiddur, updateParagraph, clearErrors } from "../../actions/siddur_actions";
import SiddurEdit from "./siddur_edit";

const mapStateToProps = state => {
    return {
        siddurParagraphs: state.entities.siddur,
        error: state.errors.entities,
        loggedIn: state.session.isAuthenticated,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSiddur: () => dispatch(fetchSiddur()),
        updateParagraph: paragraphId => dispatch(updateParagraph(paragraphId)),
        clearErrors: () => dispatch(clearErrors()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SiddurEdit);