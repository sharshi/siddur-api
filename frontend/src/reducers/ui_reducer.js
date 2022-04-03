import { combineReducers } from "redux";

const tabs = {
    tabs: [
        {
            label: "Home",
            showWhenLoggedOut: true,
            url: "#"
        },
        {
            label: "Siddur",
            showWhenLoggedOut: true,
            url: '#/siddur',
        },
        {
            label: "Edit Siddur",
            showWhenLoggedOut: false,
            url: '#/siddur/edit',
        },
    ]
}

const UIReducer = (state = tabs, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
export default combineReducers({
    navbar: UIReducer
});
