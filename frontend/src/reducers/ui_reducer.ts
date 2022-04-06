import { combineReducers } from "redux";

export interface ITab {
    label: string;
    showWhenLoggedOut: boolean;
    url: string;
}

const tabs: ITab[] = [
    {
        label: "Home",
        showWhenLoggedOut: true,
        url: "/"
    },
    {
        label: "Siddur",
        showWhenLoggedOut: true,
        url: '/siddur',
    },
    {
        label: "Edit Siddur",
        showWhenLoggedOut: false,
        url: '/siddur/edit',
    },
]

const UIReducer = (state = {tabs}, action: any ) => {
    switch (action.type) {
        default:
            return state;
    }
};
export default combineReducers({
    navbar: UIReducer
});
