import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
} from "../actions/session_actions";
import { CLEAR_ERRORS } from "../actions/constants.actions";

const _nullErrors = [];

const SessionErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER, CLEAR_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};

export default SessionErrorsReducer;