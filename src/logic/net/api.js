import axios from './index'

export const getMessage = params => {
    return axios({
        url: '/',
        method: 'get',
    })
}

export const getClassGroupMessage = params => {
    return axios({
        url: '/',
        method: 'get',
    })
}