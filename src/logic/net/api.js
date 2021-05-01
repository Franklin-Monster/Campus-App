import {
    messageAxios,
    listAxios,
    cardAxios
} from './index'

// message
// 获取课程群消息
export const getClassGroupMessage = () => {
    return messageAxios({
        url: '/getclassgroupmessage',
        method: 'get',
    })
}

// 获取好友消息
export const getFriendMessage = () => {
    return messageAxios({
        url: '/getfriendmessage',
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

// 获取校言评论列表
export const getInvitationComment = () => {
    return cardAxios({
        url: '/getinvitationcomment',
        method: 'get',
    })
}

// 添加校言评论
export const addInvitationComment = params => {
    return cardAxios({
        url: '/addinvitationcomment',
        method: 'get',
        params
    })
}

// 获取休闲交友照片
export const getFriendPicture = () => {
    return cardAxios({
        url: '/getfriendpicture',
        method: 'get',
    })
}

// 获取 我的课程 课程列表
export const getMyCourseList = () => {
    return cardAxios({
        url: '/getmycourselist',
        method: 'get',
    })
}

// 获取 我的课程 课程详情
export const getMyCourseDetail = () => {
    return cardAxios({
        url: '/getmycoursedetail',
        method: 'get',
    })
}

// 获取 我的课程 任务列表
export const getMyCourseTaskList = () => {
    return cardAxios({
        url: '/getmycoursetasklist',
        method: 'get',
    })
}