import {
    RECEIVE_SIDDUR_ERRORS,
} from "../actions/siddur_actions";
import { CLEAR_ERRORS } from "../actions/constants.actions";

const _nullErrors = [];

const EntitiesErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SIDDUR_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return _nullErrors;
        default:
            return state;
    }
};

export default EntitiesErrorsReducer;
