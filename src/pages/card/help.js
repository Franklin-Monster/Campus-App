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
import NationExam from './img/nation-exam'
import SelectClass from './img/select-class'
import PublicClass from './img/public-class'
import StrongStudy from './img/strong-study'
import SearchGrade from './img/search-grade'
import SearchClassTable from './img/search-classtable'

import Scan from './img/scan'
import Money from './img/money'
import Wallet from './img/wallet'

import {
    goRoute
} from '../../static/js/fun'

const PayClick = () => {
    goRoute('/paycenter')
}
const PassClick = () => {
    goRoute('leaveschool')
}
const EatClick = () => {

}
const OrderClick = () => {

}
const ForLeaveClick = () => {

}
const AirClick = () => {

}
const NetClick = () => {
    goRoute('/connectnet')
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
const NationExamClick = () => {

}
const SearchGradeClick = () => {

}
const SelectClassClick = () => {

}
const SearchClassTableClick = () => {

}
export const cardImgArr = [
    Pay, Pass, Eat, Order, ForLeave,
    Air, Internet, Water, Class, PublicClass,
    StrongStudy, NationExam, SearchGrade, SelectClass, SearchClassTable,
    Edu, Love, Friend, Active, LikeWall,
]
export const cardTextArr = [
    "充值缴费", "出校通行", "食堂外送", "服务预约", "课程请假",
    "宿舍空调", "校园WiFi", "送水服务", "我的课程", "校公开课",
    "学习强国", "国家考试", "成绩查询", "选课管理", "课表查询",
    "教务功能", "我要交友", "大学生圈", "休闲活动", "表白墙"
]
export const cardClickArr = [
    PayClick, PassClick, EatClick, OrderClick, ForLeaveClick,
    AirClick, NetClick, WaterClick, ClassClick, PublicClassClick,
    StrongStudyClick, NationExamClick, SearchGradeClick, SelectClassClick, SearchClassTableClick,
    EduClick, LoveClick, FriendClick, ActiveClick, LikeWallClick,
]
export const headImgArr = [Scan, Money, Wallet]
export const headTextArr = ["扫一扫", "付钱", "卡包"]