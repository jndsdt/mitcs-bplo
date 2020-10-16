import axios from "axios";

const setAxiosHeader = () => {
  axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
  axios.defaults.headers["Access-Control-Allow-Credentials"] = "false";
};

export default setAxiosHeader;
