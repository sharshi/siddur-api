import {
  RECEIVE_SIDDUR,
  RECEIVE_SIDDUR_PARAGRAPHS,
} from "../actions/siddur_actions";

const defaultState = [];

const SiddurReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SIDDUR:
      return Object.assign({}, state, { 
        [action.paragraph._id]: action.paragraph
      })
    case RECEIVE_SIDDUR_PARAGRAPHS:
      const paragraphs = {};
      action.paragraphs.forEach(paragraph => {
        paragraphs[paragraph._id] = paragraph;
      });
      return Object.assign({}, state, paragraphs)
    default:
      return state;
  }
};

export default SiddurReducer;
