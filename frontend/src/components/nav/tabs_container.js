import { connect } from "react-redux";

import Tabs from "./tabs";

const mapStateToProps = state => {
    console.log(state.ui.navbar.tabs)
    return {
        loggedIn: state.session.isAuthenticated,
        tabs: state.ui.navbar.tabs
    }
};

export default connect(mapStateToProps)(Tabs);