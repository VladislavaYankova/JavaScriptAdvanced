import { del, get, post, put } from "./request.js"

let endpoints = {
    dashboard: '/data/cyberpunk?sortBy=_createdOn%20desc',
    items: '/data/cyberpunk',
    itemDetails: '/data/cyberpunk/'
}

export async function getAllItems() {
    return get(endpoints.items);
}

export async function getItemDetails(id) {
    return get(endpoints.itemDetails + id);
}

export async function createNewItem(item, imageUrl, price,  availability, type, description) {
    return post(endpoints.items, {item, imageUrl, price,  availability, type, description});
}

export async function updateItem(id, data) {
    return put(endpoints.itemDetails + id, data);
}

export async function deleteItem(id) {
    return del(endpoints.itemDetails + id);
}