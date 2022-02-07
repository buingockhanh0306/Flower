import axios from "axios";
import axiosClient from "./axiosClient";

const flowerAPI = {
    getAll: (params)=>
    {
        const url = '/flower';
        return axiosClient.get(url, {params})
    },

    getByID: (id)=>
    {
        const url = `/flower/${id}`;
        return axiosClient.get(url)
    }
}



export default flowerAPI