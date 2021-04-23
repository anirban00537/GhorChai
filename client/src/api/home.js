import axios from "axios";

const url = "http://localhost:5000/";

export const postHome = (home, img) =>
  axios.post(url + "createhome", { home: home, photo: img });

export const getHome = (id) => axios.get(`${url}` + "createhome/" + `${id}`);

export const complains = (id, complain) =>
  axios.patch(url + "user/complain", { id, complain });

export const getcurrentlyRenting = (id) =>
  axios.get(`${url}` + `createhome/renting/${id}`);

export const getUserHome = () => axios.get(url + "user/gethome");
// export const deletePortfolio = (id) => axios.delete(`${Portfoliourl}/${id}`);
export const deleteHouse = (id) => axios.delete(url + `createhome/${id}`);
