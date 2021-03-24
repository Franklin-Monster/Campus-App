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

// food-delivery image
import S1 from './img/s1'
import S2 from './img/s2'
import S3 from './img/s3'
import Dish from './img/dish'
import Fruit from './img/fruit'
import Drink from './img/drink'
import SuperMarket from './img/supermarket'
import Shop1 from './img/shop1'
import Shop2 from './img/shop2'
import Shop3 from './img/shop3'
import Shop4 from './img/shop4'
import Shop5 from './img/shop5'
import Shop6 from './img/shop6'
import Shop7 from './img/shop7'
import Shop8 from './img/shop8'
import Shop9 from './img/shop9'
import Shop10 from './img/shop10'
import Shop11 from './img/shop11'

// shop-item image
import Food1 from './img/food1'
import Food2 from './img/food2'
import Food3 from './img/food3'
import Food4 from './img/food4'
import Food5 from './img/food5'
import Food6 from './img/food6'
import Food7 from './img/food7'
import Food8 from './img/food8'
import Food9 from './img/food9'
import Food10 from './img/food10'
import Food11 from './img/food11'
import Food12 from './img/food12'
import Food13 from './img/food13'
import Food14 from './img/food14'
import Food15 from './img/food15'
import Food16 from './img/food16'
import Food17 from './img/food17'


// pay-center js
const payCenterCardItemArr = [{
        img: PayNet,
        text: "充网费",
        route: "/paynet"
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
const connectWifiHeadItemArr = [{
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
const connectWifiFootItemArr = [{
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


// foodDeliver
const foodDeliverySwiperArr = [S1, S2, S3]
const foodDeliveryClassify = [{
        image: Dish,
        text: '美食'
    },
    {
        image: Fruit,
        text: '水果蔬菜'
    },
    {
        image: Drink,
        text: '奶茶果汁'
    },
    {
        image: SuperMarket,
        text: '超市便利'
    }
]
const foodDeliveryShop = [{
        name: '四川风味',
        logo: Shop1,
        star: 4.9,
        count: 666,
        start: 0,
        delivery: 0,
        avager: 12,
        time: 15,
        place: '二食堂二楼',
        active: ['20减5', '30减10']
    },
    {
        name: '河南烩面',
        logo: Shop2,
        star: 4.8,
        count: 686,
        start: 10,
        delivery: 1,
        avager: 15,
        time: 12,
        place: '二食堂一楼',
        active: ['10减2', '20减5', '首单减2']
    },
    {
        name: '掉渣饼',
        star: 4.6,
        logo: Shop3,
        count: 824,
        start: 0,
        delivery: 0,
        avager: 6,
        time: 10,
        place: '二食堂一楼',
        active: ['买三赠一', '首单减1']
    },
    {
        name: '湖南风味',
        star: 4.8,
        logo: Shop4,
        count: 966,
        start: 10,
        delivery: 2,
        avager: 12,
        time: 16,
        place: '二食堂二楼',
        active: ['20减5', '30减10']
    },
    {
        name: '杭州小笼包',
        star: 4.9,
        logo: Shop5,
        count: 1236,
        start: 0,
        delivery: 0,
        avager: 5,
        time: 10,
        place: '二食堂一楼',
        active: ['5减1', '10减3']
    },
    {
        name: '鸭血粉丝',
        star: 4.5,
        logo: Shop6,
        count: 548,
        start: 12,
        delivery: 1,
        avager: 15,
        time: 13,
        place: '一食堂一楼',
        active: ['15减2', '30减5']
    },
    {
        name: '兰州拉面',
        star: 4.8,
        logo: Shop7,
        count: 1123,
        start: 8,
        delivery: 0,
        avager: 10,
        time: 12,
        place: '二食堂一楼',
        active: ['10减1', '20减3']
    },
    {
        name: '旋转小火锅',
        star: 4.9,
        logo: Shop8,
        count: 1125,
        start: 10,
        delivery: 1,
        avager: 12,
        time: 16,
        place: '一食堂二楼',
        active: ['10减2', '20减5', '30减10', '50减15']
    },
    {
        name: '经典小炒',
        star: 4.7,
        logo: Shop9,
        count: 1100,
        start: 10,
        delivery: 2,
        avager: 10,
        time: 13,
        place: '二食堂二楼',
        active: ['18减3', '25减5']
    },
    {
        name: '麻辣香锅',
        star: 4.6,
        logo: Shop10,
        count: 1125,
        start: 10,
        delivery: 1,
        avager: 12,
        time: 16,
        place: '一食堂二楼',
        active: ['10减3', '20减7', '30减12']
    },
    {
        name: '飘香烤鱼',
        star: 5.0,
        logo: Shop11,
        count: 328,
        start: 20,
        delivery: 2,
        avager: 25,
        time: 18,
        place: '二食堂三楼',
        active: ['25减2', '30减5', '50减10']
    }
]

// shopitem
const shopItemFood = [{
        classify: '本店热销',
        name: '精品黄焖鸡',
        avator: Food1,
        info: '本店销量第1名',
        count: 686,
        price: 12,
        discount: '7.6折，限1份'
    },
    {
        classify: '本店热销',
        name: '咖喱牛肉饭',
        avator: Food2,
        info: '本店销量第3名',
        count: 624,
        price: 11,
        discount: '7.8折，限1份'
    },
    {
        classify: '本店热销',
        name: '水煮肉片',
        avator: Food3,
        info: '本店销量第2名',
        count: 656,
        price: 7,
        discount: '8折，限2份'
    },
    {
        classify: '今日精品',
        name: '杭椒牛柳',
        avator: Food4,
        info: '',
        count: 356,
        price: 5,
        discount: ''
    },
    {
        classify: '今日精品',
        name: '毛血旺',
        avator: Food5,
        info: '',
        count: 588,
        price: 6,
        discount: ''
    },
    {
        classify: '今日精品',
        name: '西红柿炒鸡蛋',
        avator: Food6,
        info: '',
        count: 234,
        price: 3,
        discount: ''
    },
    {
        classify: '特色菜',
        name: '酸辣土豆丝',
        avator: Food7,
        info: '',
        count: 359,
        price: 2,
        discount: ''
    },
    {
        classify: '特色菜',
        name: '糖醋里脊',
        avator: Food8,
        info: '',
        count: 162,
        price: 5,
        discount: ''
    },
    {
        classify: '特色菜',
        name: '干烧鱼',
        avator: Food9,
        info: '',
        count: 86,
        price: 7,
        discount: ''
    },
    {
        classify: '特色菜',
        name: '黄焖大虾',
        avator: Food10,
        info: '',
        count: 99,
        price: 8,
        discount: ''
    },
    {
        classify: '特色菜',
        name: '香辣鸡翅',
        avator: Food11,
        info: '',
        count: 224,
        price: 5,
        discount: ''
    },
    {
        classify: '主食',
        name: '馒头',
        avator: Food12,
        info: '',
        count: 464,
        price: 1,
        discount: ''
    },
    {
        classify: '主食',
        name: '拉面',
        avator: Food13,
        info: '',
        count: 124,
        price: 4,
        discount: ''
    },
    {
        classify: '主食',
        name: '煎饼果子',
        avator: Food14,
        info: '',
        count: 84,
        price: 5,
        discount: ''
    },
    {
        classify: '主食',
        name: '手抓饼',
        avator: Food15,
        info: '',
        count: 374,
        price: 3,
        discount: ''
    },
    {
        classify: '主食',
        name: '米饭',
        avator: Food16,
        info: '',
        count: 1824,
        price: 1,
        discount: ''
    },
    {
        classify: '主食',
        name: '小笼包',
        avator: Food17,
        info: '',
        count: 668,
        price: 3,
        discount: ''
    }
]
export {
    payCenterCardItemArr,
    connectWifiHeadItemArr,
    connectWifiFootItemArr,
    connectWifiSwiperImgArr,
    foodDeliverySwiperArr,
    foodDeliveryClassify,
    foodDeliveryShop,
    shopItemFood
}