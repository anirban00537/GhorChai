import axios from "axios";

const url = "http://localhost:5000/";

export const postHome = (home, img) => {
  console.log({ home: home, photo: img });
  axios.post(url + "createhome", { home: home, photo: img });
};

export const getHome = (id) => axios.get(`${url}` + "createhome/" + `${id}`);

// export const deletePortfolio = (id) => axios.delete(`${Portfoliourl}/${id}`);
