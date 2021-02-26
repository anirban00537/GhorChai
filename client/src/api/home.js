import axios from "axios";

const url = "http://localhost:5000/";

export const postHome = (data) => axios.post(url + "createhome", data);
