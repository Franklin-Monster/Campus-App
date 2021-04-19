import axios from 'axios'

const baseUrl = 'http://localhost:3000'

const messageAxios = axios.create({
    baseURL: baseUrl + '/message',
    timeout: 15000
})

const listAxios = axios.create({
    baseURL: baseUrl + '/list',
    timeout: 15000
})

const cardAxios = axios.create({
    baseURL: baseUrl + '/card',
    timeout: 15000
})

export {
    messageAxios,
    listAxios,
    cardAxios
}