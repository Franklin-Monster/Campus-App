// image
import Photo from './img/photo'
import Camera from './img/camera'
import Video from './img/video'
import Place from './img/place'
import Pay from './img/pay'
import File from './img/file'

import Group from './img/group'

import {
    goRoute
} from '@/static/js/fun'

const sendPlusItemArr = [{
        img: Photo,
        text: '照片'
    },
    {
        img: Camera,
        text: '拍摄',
        onClick: () => {
            goRoute('/takephoto')
        }
    },
    {
        img: Video,
        text: '视频通话',
        onClick: () => {
            goRoute('/videochat')
        }
    },
    {
        img: Place,
        text: '位置'
    },
    {
        img: Pay,
        text: '转账'
    },
    {
        img: File,
        text: '文件'
    },
]

const classGroupMessage = [{
        name: 'IT项目管理课程群',
        avator: Group,
        content: '明天上午8.30在A506上机',
        teacher: '侯老师'
    }, {
        name: '统计学课程群',
        avator: Group,
        content: '大家记得晚上交学案',
        teacher: '刘老师'
    }, {
        name: '数据库原理课程群',
        avator: Group,
        content: '同学们没事就刷刷牛客网的题啊',
        teacher: '董老师'
    },
    {
        name: '管理信息系统课程群',
        avator: Group,
        content: '明天随机抽同学上台讲进程与线程的区别',
        teacher: '王老师'
    },
    {
        name: '计算机网络课程群',
        avator: Group,
        content: '课后记得学习一下OSI网络七层模型',
        teacher: '李老师'
    },
    {
        name: '计算机操作系统课程群',
        avator: Group,
        content: '下次课交一下作业',
        teacher: '王老师'
    },
]

export {
    sendPlusItemArr,
    classGroupMessage
}