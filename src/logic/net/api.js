import {
    messageAxios,
    listAxios,
    cardAxios
} from './index'

// message
export const getClassGroupMessage = () => {
    return messageAxios({
        url: '/getclassgroupmessage',
        method: 'get',
    })
}

// list
// 获取教师列表
export const getTeacherList = () => {
    return listAxios({
        url: '/getteacherlist',
        method: 'get',
    })
}

// 获取学生列表
export const getStudentList = () => {
    return listAxios({
        url: '/getstudentlist',
        method: 'get',
    })
}

// card
// 获取新闻列表
export const getNewsList = () => {
    return cardAxios({
        url: '/getnewslist',
        method: 'get',
    })
}
// 获取校言列表
export const getInvitationList = () => {
    return cardAxios({
        url: '/getinvitationlist',
        method: 'get',
    })
}