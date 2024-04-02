import { clearUserData, getUserData } from "../util.js";

let host = 'http://localhost:3030';

async function request(method, url, data) {
    let options = {
        method,
        headers: {}
    };

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    let userData = getUserData();

    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    try {
        let response = await fetch(host + url, options);

        if (!response.ok) {
            if (response.status == 403) {
                clearUserData();
            }

            let err = await response.json();
            throw new Error(err.message);
        }

        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }

    } catch (err) {
        //todo custom error
        alert(err.message);
        throw err;
    }
}

export let get = (url) => request('get', url);
export let post = (url, data) => request('post', url, data);
export let put = (url, data) => request('put', url, data);
export let del = (url) => request('delete', url);