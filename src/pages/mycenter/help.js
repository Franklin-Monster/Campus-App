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
        text: "代办事项",
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
export {
    myCenterCardItemArr,
    myCenterArrowMenuArr,
    userInfoItemArr
}