// image
import Edu from './img/edu'
import Pay from './img/pay'
import Eat from './img/eat'
import Air from './img/air'
import Love from './img/love'
import Pass from './img/pass'
import Order from './img/order'
import Water from './img/water'
import Class from './img/class'
import Friend from './img/friend'
import Active from './img/active'
import Internet from './img/internet'
import LikeWall from './img/like-wall'
import ForLeave from './img/for-leave'
import PublicClass from './img/public-class'
import StrongStudy from './img/strong-study'

import Scan from './img/scan'
import Money from './img/money'
import Wallet from './img/wallet'

const history = require("history").createBrowserHistory()
const PayClick = () => {
    history.push('/paycenter');
    return history.go()
    // return window.location.href = "/paycenter"
}
const PassClick = () => {

}
const EatClick = () => {

}
const OrderClick = () => {

}
const ForLeaveClick = () => {

}
const AirClick = () => {

}
const InternetClick = () => {

}
const WaterClick = () => {

}
const ClassClick = () => {

}
const PublicClassClick = () => {

}
const StrongStudyClick = () => {

}

const EduClick = () => {

}
const LoveClick = () => {

}
const FriendClick = () => {

}
const ActiveClick = () => {

}
const LikeWallClick = () => {

}
export const cardImgArr = [Pay, Pass, Eat, Order, ForLeave,
    Air, Internet, Water, Class, PublicClass,
    StrongStudy, Edu, Love, Friend, Active, LikeWall]
export const cardTextArr = ["充值缴费", "出校通行", "食堂外送", "服务预约", "课程请假",
    "宿舍空调", "上网冲浪", "送水服务", "我的课程", "校公开课",
    "学习强国", "教务功能", "我要交友", "大学生圈", "休闲活动", "表白墙"]
export const cardClickArr = [PayClick, PassClick, EatClick, OrderClick, ForLeaveClick,
    AirClick, InternetClick, WaterClick, ClassClick, PublicClassClick,
    StrongStudyClick, EduClick, LoveClick, FriendClick, ActiveClick, LikeWallClick]
export const headImgArr = [Scan, Money, Wallet]
export const headTextArr = ["扫一扫", "付钱", "卡包"]