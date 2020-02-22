import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        baseURL: 'http://localhistory:3300/api/jokes',
        headers: {
            Authorization: token
        }
    });
};