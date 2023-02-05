import axios from "axios";

export const service = axios.create({
    baseURL: "http://20.84.114.111:8080/",
    headers: new Headers({
        "ngrok-skip-browser-warning": true,
        "Access-Control-Allow-Origin": "*",
    }),
    validateStatus: function (status) {
        return status >= 200 && status < 400
      }
});