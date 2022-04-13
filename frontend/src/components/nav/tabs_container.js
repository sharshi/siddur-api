import { connect } from "react-redux";

import Tabs, { MobileMenu } from "./tabs";

const mapStateToProps = state => {
    return {
        loggedIn: state.session.isAuthenticated,
        tabs: state.ui.tabs
    }
};

export default connect(mapStateToProps)(Tabs);
export const MobileTabs = connect(mapStateToProps)(MobileMenu);
