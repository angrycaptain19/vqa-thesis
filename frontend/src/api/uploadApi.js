import API_ROUTE from "./apiRoute"
import axios from 'axios'


class UploadApi {
    static post( payload ) {
        const uri = API_ROUTE + "/upload"
        return axios.post(uri, payload)
    }
}

export default UploadApi

