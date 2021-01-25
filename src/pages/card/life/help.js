// pay-center image
import List from './img/list'
import PayNet from './img/pay-net'
import PayAir from './img/pay-air'
import PayTele from './img/pay-tele'
import PayCard from './img/pay-card'
import PayStudy from './img/pay-study'
import PayPower from './img/pay-power'

// connect-net image
import Fn from './img/fn'
import Help from './img/help'
import Wish from './img/wish'
import Safe from './img/safe'
import Speed from './img/speed'
import Install from './img/install'
import Swiper1 from './img/swiper1.jpeg'
import Swiper2 from './img/swiper2.jpeg'
import Swiper3 from './img/swiper3.jpeg'

// pay-center js
const payCenterCardItemArr = [
    {
        img: PayNet,
        text: "充网费",
        route: "/paynent"
    },
    {
        img: PayAir,
        text: "充空调费",
        route: "/notfound"
    },
    {
        img: PayTele,
        text: "充话费",
        route: "/payphone"
    },
    {
        img: PayCard,
        text: "充一卡通",
        route: "/paycard"
    },
    {
        img: PayStudy,
        text: "交学费",
        route: "/notfound"
    },
    {
        img: PayPower,
        text: "交电费",
        route: "/notfound"
    },
    {
        img: List,
        text: "账单查询",
        route: "/notfound"
    },
]

// connect-net js
const connectWifiHeadItemArr = [
    {
        img: Safe,
        text: "网络监测"
    },
    {
        img: Speed,
        text: "网络测速"
    },
    {
        img: Install,
        text: "WiFi设置"
    },
]
const connectWifiFootItemArr = [
    {
        img: Fn,
        text: "功能介绍"
    },
    {
        img: Help,
        text: "使用帮助"
    },
    {
        img: Wish,
        text: "志愿服务"
    },
]
const connectWifiSwiperImgArr = [Swiper1, Swiper2, Swiper3]

export {
    payCenterCardItemArr,
    connectWifiHeadItemArr,
    connectWifiFootItemArr,
    connectWifiSwiperImgArr
}