import axios from "axios";

const baseUrl = "http://localhost:5001/contacts";
const headersForPostFetch = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const post = (contact) =>
  axios.post(baseUrl, contact, headersForPostFetch);

export const remove = (id) => axios.delete(`${baseUrl}/${id}`);

export const get = () => axios.get(baseUrl);
