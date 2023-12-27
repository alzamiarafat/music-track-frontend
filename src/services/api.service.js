import axios from 'axios';

const ApiService = {

    updateToken() {
        axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
    },

    get(resource, params) {
        this.updateToken();
        return axios.get(`${resource}`, params);
    },

    post(resource, params, config = null) {
        this.updateToken();
        return axios.post(`${resource}`, params, config);
    },

    update(resource, params) {
        this.updateToken();
        return axios.put(`${resource}`, params);
    },

    delete(resource, params) {
        this.updateToken();
        return axios.delete(`${resource}`, params);
    },
}

export default ApiService;