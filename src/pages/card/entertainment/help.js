import {
    goRoute
} from '@/static/js/fun'
import newsImg1 from './img/news1'
import newsImg2 from './img/news2'

// import P1 from './img/p1'
// import P2 from './img/p2'
// import P3 from './img/p3'
// import P4 from './img/p4'
// import P5 from './img/p5'
// import P6 from './img/p6'
// import P7 from './img/p7'
// import P8 from './img/p8'
// import P9 from './img/p9'
// import P10 from './img/p10'
// import P11 from './img/p11'
// import P12 from './img/p12'
// import P13 from './img/p13'

import Photo from './img/photo'
import Camera from './img/camera'
import Video from './img/video'
import Place from './img/place'
import Pay from './img/pay'
import File from './img/file'

const News = {
    title: '天津职业大学巡察工作办公室来我校调研',
    time: '2021-03-05',
    article: [{
            type: 'text',
            content: `本校讯 3月4日上午，天津职业大学巡察工作办公室全体干部到我校就巡察工作进行调研交流，
                        学校巡察工作办公室全体干部参加了交流会。`
        },
        {
            type: 'image',
            content: newsImg1
        },
        {
            type: 'text',
            content: `交流会上，我校巡察工作办公室主要负责同志围绕巡察工作基本情况、
                    巡察人才库建设与培训、巡察整改评价等方面分享了我校经验做法，
                    详细介绍了第二届党委巡察工作五年规划及创建“城建特色”巡察工程的思路。
                    天津职业大学巡察工作办公室主要负责同志从巡察工作制度建设、
                    巡察整改日常监督等方面介绍了经验做法。
                    随后，双方就今年的巡察工作思路、高校巡察面临的困难及下一步工作等进行了深入地探讨与交流。`
        },
        {
            type: 'text',
            content: `天津职业大学巡察工作办公室主要负责同志对我校巡察工作给予了高度的评价，
                      认为在制度建设和巡察干部教育培养等多方面值得学习借鉴。
                      双方表示，今后将进一步加强交流，共同探讨高校巡察工作的新思路、新方法，
                      为推动市属高校巡察工作高质量发展做出贡献。`
        },
        {
            type: 'image',
            content: newsImg2
        },
        {
            type: 'text',
            content: `交流会后，调研组一行还参观了我校巡察工作办公室办公场所、
                     巡察组谈话室以及革命丰碑——天津革命遗址展览。`
        }
    ]
}

// const sildeImageArr = [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13]

// const messageList = [{
//         name: '范冰冰',
//         avator: P1,
//         content: '争做新时代青年！',
//         time: '刚刚'
//     },
//     {
//         name: '周冬雨',
//         avator: P2,
//         content: '他扒拉我',
//         time: '6分钟前'
//     },
//     {
//         name: '欧阳娜娜',
//         avator: P3,
//         content: '我拉大提琴超好听',
//         time: '8分钟前'
//     },
//     {
//         name: '杜鹃',
//         avator: P4,
//         content: '明天晚上去看电影嘛？',
//         time: '16分钟前'
//     },
//     {
//         name: '张靓颖',
//         avator: P5,
//         content: '我教你海豚音啊',
//         time: '24分钟前'
//     },
//     {
//         name: '刘亦菲',
//         avator: P6,
//         content: '我就是仙女姐姐',
//         time: '1小时前'
//     },
//     {
//         name: '女明星',
//         avator: P7,
//         content: '你连女明星都不认识了嘛',
//         time: '6小时前'
//     },
//     {
//         name: '李宇春',
//         avator: P8,
//         content: '明天出来吃火锅',
//         time: '8小时前'
//     },
//     {
//         name: '唐嫣',
//         avator: P9,
//         content: '工作好累啊今天',
//         time: '1天前'
//     },
//     {
//         name: '范玮琪',
//         avator: P10,
//         content: '好想睡觉',
//         time: '3天前'
//     },

// ]

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

export {
    News,
    // sildeImageArr,
    // messageList,
    sendPlusItemArr
}