import { userHelper } from "./utility/userHelper.js"

async function requestr(method, url, data) {
    const option = {
        method,
        headers: {},
    }

    const accessToken = userHelper.getUserToken()

    if (accessToken) {
        option.headers[`x-authorization`] = accessToken
    }

    if (data) {
        option.headers['Content-Type'] = 'application/json'
        option.body = JSON.stringify(data)

    }

    try {
        const response = await fetch(url, option)
        return await response.json()
    } catch (error) {
        alert(error.message)
        throw error;
    }
}

async function get(url) {
    return requestr('GET', url)
}
async function post(url, data) {
    return requestr('POST', url, data)
}
async function put(url,data) {
    return requestr('PUT', url, data)
}
async function del(url) {
    return requestr('DELETE', url)
}

export const api = {
    get,
    post,
    put,
    del
}