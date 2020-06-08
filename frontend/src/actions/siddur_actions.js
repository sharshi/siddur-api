import * as SiddurUTIL from "../util/siddur_util";

export const RECEIVE_SIDDUR = "RECEIVE_SIDDUR";

export const receiveSiddur = paragraph => ({
  type: RECEIVE_SIDDUR,
  paragraph
});

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
    .then(paragraph => dispatch(receiveSiddur(paragraph.data)));
};