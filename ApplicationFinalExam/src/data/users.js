import { clearUserData, setUserData } from "../util.js";
import { post, get } from "./request.js";

let endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
}

//adapt user profile
export async function login(email, password) {
    let result = await post(endpoints.login, {email, password});
    setUserData(result);
}

export async function register(email, password) {
    let result = await post(endpoints.register, {email, password});
    setUserData(result);
}

export async function logout() {
    let promise = get(endpoints.logout);

    clearUserData();

    await promise;
}