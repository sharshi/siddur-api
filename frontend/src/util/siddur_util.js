import axios from 'axios';

export const siddur = () => {
   return axios.get("/api/siddur/");
};

export const nextempty = () => {
  return axios.get(`/api/siddur/nextempty`);
};

export const paragraph = name => {
   return axios.get(`/api/siddur/${name}`);
};

export const updateParagraph = paragraph => {
  return axios.post(`/api/siddur/`, paragraph);
};
