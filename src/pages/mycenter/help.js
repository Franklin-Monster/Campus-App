import Todo from './img/todo'
import Resume from './img/resume'
import Notice from './img/notice'
import Collect from './img/collect'
import Active from './img/active'
import Exam from './img/exam'
import FriendCircle from './img/friend-circle'
import Wallet from './img/wallet'
import Pay from './img/pay'
import Install from './img/install'

import Zhou1 from './img/zhou1'
import Zhou2 from './img/zhou2'
import Zhou3 from './img/zhou3'
import Huo1 from './img/huo1'
import Huo2 from './img/huo2'
import Huo3 from './img/huo3'
import P1 from './img/p1'
import P2 from './img/p2'
import P3 from './img/p3'
import P4 from './img/p4'
import P5 from './img/p5'
import P6 from './img/p6'
import P7 from './img/p7'
import P8 from './img/p8'
import P9 from './img/p9'
import P10 from './img/p10'
import P11 from './img/p11'
import P12 from './img/p12'
import P13 from './img/p13'
import Lv1 from './img/lv1'
import Lv2 from './img/lv2'
import Lv3 from './img/lv3'
import Lv4 from './img/lv4'
import Lv5 from './img/lv5'
import Lv6 from './img/lv6'
import Lv7 from './img/lv7'
import Lv8 from './img/lv8'
import Lv9 from './img/lv9'

const myCenterArrowMenuArr = [{
        img: Pay,
        text: "支付",
        route: '/notfound'
    },
    {
        img: Wallet,
        text: "卡包",
        route: '/notfound'
    },
    {
        img: Install,
        text: "设置",
        route: '/userinstall'
    },
]

const myCenterCardItemArr = [{
        img: Resume,
        text: "我的简历",
    },
    {
        img: Todo,
        text: "待办事项",
        route: '/todomatter'
    },
    {
        img: Notice,
        text: "重要通知",
    },
    {
        img: Collect,
        text: "我的收藏",
    },
    {
        img: Active,
        text: "我的活动",
    },
    {
        img: FriendCircle,
        text: "朋友圈",
        route: '/friendcircle'
    },
    {
        img: Exam,
        text: "我的考试",
    },
    {
        img: Resume,
        text: "我的简历",
    },
]

const userInfoItemArr = [{
        key: '姓名',
        value: 'Franklin'
    },
    {
        key: '学号',
        value: '1705080106'
    },
    {
        key: '性别',
        value: '男'
    },
    {
        key: '学校',
        value: '天津城建大学'
    },
    {
        key: '学院',
        value: '经济与管理学院'
    },
    {
        key: '专业',
        value: '信息管理与信息系统'
    },
    {
        key: '班级',
        value: '1班'
    },
    {
        key: '班主任',
        value: 'Mr Dong'
    },
    {
        key: '辅导员',
        value: 'Ms Xv'
    },
]

const friendCircleData = [{
        name: 'Lucy',
        avator: P1,
        content: {
            text: '今天上课好累啊',
            image: null
        },
        time: '刚刚',
        isLike: false,
        likeList: ['May', 'Wanda'],
        commentList: []
    }, {
        name: 'Helena',
        avator: P2,
        content: {
            text: '杰伦太帅了吧！！',
            image: [Zhou1, Zhou2, Zhou3]
        },
        time: '1分钟前',
        isLike: false,
        likeList: ['Jay Zhou', 'JJ Lin'],
        commentList: [{
            name: 'Jay Zhou',
            text: '哈哈哈当然了啊'
        }, {
            name: 'JJ Lin',
            text: '他帅还是我帅啊？'
        }]
    }, {
        name: 'Sheila',
        avator: P3,
        content: {
            text: 'R.I.P',
            image: null
        },
        time: '6分钟前',
        isLike: false,
        likeList: [],
        commentList: []
    }, {
        name: 'Camila',
        avator: P4,
        content: {
            text: '早睡早起身体好',
            image: null
        },
        time: '12分钟前',
        isLike: false,
        likeList: [],
        commentList: []
    }, {
        name: 'Pixie',
        avator: P5,
        content: {
            text: '想搞一场毕业旅行',
            image: [Lv1, Lv2, Lv3, Lv4, Lv5, Lv6, Lv7, Lv8, Lv9]
        },
        time: '16分钟前',
        isLike: false,
        likeList: [],
        commentList: []
    }, {
        name: 'Gemma',
        avator: P6,
        content: {
            text: '夏天的可乐为什么这么好喝！',
            image: null
        },
        time: '18分钟前',
        isLike: false,
        likeList: ['Coke', 'Fenda'],
        commentList: []
    },
    {
        name: 'Norah',
        avator: P7,
        content: {
            text: '学习ing',
            image: null
        },
        time: '24分钟前',
        isLike: false,
        likeList: [],
        commentList: []
    },
    {
        name: 'Taylor',
        avator: P8,
        content: {
            text: '以后一定每天都吃早餐',
            image: null
        },
        time: '36分钟前',
        isLike: false,
        likeList: [],
        commentList: []
    },
    {
        name: 'Olivia',
        avator: P9,
        content: {
            text: '好想吃火锅啊啊啊啊',
            image: [Huo1, Huo2, Huo3]
        },
        time: '1小时前',
        isLike: false,
        likeList: [],
        commentList: [{
            name: 'Jerry',
            text: '一起去一起去！'
        }]
    },
    {
        name: 'Hope',
        avator: P10,
        content: {
            text: 'I hope I have a better life.',
            image: null
        },
        time: '1小时前',
        isLike: false,
        likeList: ['Alice'],
        commentList: []
    },
    {
        name: 'Sienna',
        avator: P11,
        content: {
            text: '窗外的麻雀，在电线杆上多嘴~',
            image: null
        },
        time: '2小时前',
        isLike: false,
        likeList: [],
        commentList: []
    },
    {
        name: 'Gemma',
        avator: P12,
        content: {
            text: '明天开始出道。',
            image: null
        },
        time: '2小时前',
        isLike: false,
        likeList: ['Hebe'],
        commentList: []
    },
    {
        name: 'Robin',
        avator: P13,
        content: {
            text: '回港上市！！！',
            image: null
        },
        time: '1天前',
        isLike: false,
        likeList: [],
        commentList: []
    }
]
export {
    myCenterCardItemArr,
    myCenterArrowMenuArr,
    userInfoItemArr,
    friendCircleData
}