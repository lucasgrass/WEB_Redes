import Axios  from "axios"

export const fetchApi = async () => {
    const axios = Axios.create({
        baseURL: 'http://127.0.0.1:5000'
    })

    return axios
}