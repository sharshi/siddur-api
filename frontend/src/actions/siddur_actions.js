import * as SiddurUTIL from "../util/siddur_util";

import { CLEAR_ERRORS } from "../actions/constants.actions";
export const RECEIVE_SIDDUR = "RECEIVE_SIDDUR";
export const UPDATE_SIDDUR_PARAGRAPH = "UPDATE_SIDDUR_PARAGRAPH";
export const RECEIVE_SIDDUR_PARAGRAPHS = "RECEIVE_SIDDUR_PARAGRAPHS";
export const RECEIVE_SIDDUR_ERRORS = "RECEIVE_SIDDUR_ERRORS";


export const receiveSiddur = paragraph => ({
  type: RECEIVE_SIDDUR,
  paragraph
});

export const receiveSiddurErrors = errors => ({
  type: RECEIVE_SIDDUR_ERRORS,
  errors
});

export const receiveSiddurParagraphs = paragraphs => ({
  type: RECEIVE_SIDDUR_PARAGRAPHS,
  paragraphs
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchSiddur = () => dispatch => {
  return SiddurUTIL.siddur().then(paragraphs =>
    dispatch(receiveSiddurParagraphs(paragraphs.data))
  );
};

export const nextempty = () => dispatch => {
  SiddurUTIL.nextempty()
    .then(paragraph => dispatch(receiveSiddur(paragraph.data)));
};

export const findParagraph = name => dispatch => {
  SiddurUTIL.findParagraph(name)
    .then(paragraph => dispatch(receiveSiddur(paragraph.data)));
};

export const updateParagraph = paragraph => dispatch => {
  SiddurUTIL.updateParagraph(paragraph)
    .then(
      paragraph => dispatch(receiveSiddur(paragraph.data)),
      errors => dispatch(receiveSiddurErrors(errors.response.data))
    );
};