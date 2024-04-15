import axios from "axios";

const apiUrl = "https://oligolabs.ae/zabbix/api_jsonrpc.php";
const authToken =
  "21dde15c2566092e3effac499981aa4c78dff4690ba2e34256fa2b7a9f858f03";

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
  auth: {
    password: authToken,
  },
});

export default axiosInstance;
