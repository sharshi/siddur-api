import {
  RECEIVE_SIDDUR,
} from "../actions/siddur_actions";

const defaultState = [];

const SiddurReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SIDDUR:
      return Object.assign({}, state, { 
        [action.paragraph._id]: action.paragraph
      })
    default:
      return state;
  }
};

export default SiddurReducer;