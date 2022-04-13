import axios from 'axios';

export const siddur = () => {
   return axios.get("/api/siddur/");
};

export const nextempty = () => {
  return axios.get(`/api/siddur/nextempty`);
};

export const findParagraph = name => {
   return axios.get(`/api/siddur/${name}`);
};

export const updateParagraph = paragraph => {
  return axios.patch(`/api/siddur/`, paragraph);
};
