import * as axios from "axios";


const instance = axios.create({
    baseURL: 'http://wj.smartapi.ru/api',
});


export const registartionAPI = {
    register (login, email, password) {
        return instance.post(`/account`, { login, email, password });
    },
    // logout() {
    //     return instance.delete(`/validate`);
    // }
}

export const authAPI = {
    login(login, password) {
        return instance.post(`/account/login`, { login, password });
    },
    logout() {
        return instance.delete(`/validate`);
    }
}
