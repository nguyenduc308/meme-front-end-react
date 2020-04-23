import axios from 'axios';
import { MEME } from '../constants';
const {APP_API: baseURL} = MEME;

const api = {
    call() {
        return axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    callWithAuth() {
        return axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer token'
            }
        })
    }
}

export default api;