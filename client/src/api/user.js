import axios from "axios";

const url = "http://localhost:5000/";

export const signin = (email, password) =>
  axios.post(url + "signin", { email: email, password: password });

export const signup = (auth) => axios.post(url + "signup", auth);

export const userInfo = (id) => axios.get(url + `getuser/${id}`);
