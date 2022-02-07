import axios from 'axios'
import queryString from 'query-string'

const axiosClient = axios.create(
    {
        baseURL: 'https://61e52378595afe00176e534e.mockapi.io/flower',
        headers: {
            'content-type': 'application.json'
        },
        paramsSerializer: params => queryString.stringify(params),
    }
)


axiosClient.interceptors.request.use(async (config)=>{
    return config;
})

axiosClient.interceptors.request.use(reponse =>{
    if(reponse && reponse.data){
        return reponse.data
    }
    return reponse
}, (error)=>{
    throw error;
});

export default axiosClient;