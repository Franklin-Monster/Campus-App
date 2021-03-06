import Loadable from './loadble'

const Message = Loadable(() => import('@p/message/Message'))
const Card = Loadable(() => import('@p/card/Card'))
const List = Loadable(() => import('@p/list/List'))
const MyCenter = Loadable(() => import('@p/mycenter/MyCenter'))
const PhoneLogin = Loadable(() => import('@/logic/login/phoneLogin'))
const WxLogin = Loadable(() => import('@/logic/login/wxLogin'))
const Login = Loadable(() => import('@/logic/login/index'))
const PayCenter = Loadable(() => import('@p/card/life/PayCenter'))
const PayNet = Loadable(() => import('@p/card/life/PayNet'))
const PayPhone = Loadable(() => import('@p/card/life/PayPhone'))
const PayCard = Loadable(() => import('@p/card/life/PayCard'))
const ConnectWifi = Loadable(() => import('@p/card/life/ConnectWifi'))
const LeaveSchool = Loadable(() => import('@p/card/life/LeaveSchool'))
const ApplyProcess = Loadable(() => import('@p/card/life/ApplyProcess'))
const FriendInfo = Loadable(() => import('@p/list/FriendInfo'))
const FriendAction = Loadable(() => import('@p/list/FriendAction'))
const SendMessage = Loadable(() => import('@p/message/SendMessage'))
const MessageAction = Loadable(() => import('@p/message/MessageAction'))
const GroupMessageAction = Loadable(() => import('@p/message/GroupMessageAction'))
const UserInfo = Loadable(() => import('@p/mycenter/UserInfo'))
const UserInstall = Loadable(() => import('@p/mycenter/UserInstall'))
const NotFound = Loadable(() => import('@p/notfound/NotFound.jsx'))
const ServiceOrder = Loadable(() => import('@p/card/life/ServiceOrder'))
const ForFriend = Loadable(() => import('@p/card/entertainment/forfriend/ForFriend'))
const ForMessage = Loadable(() => import('@p/card/entertainment/forfriend/ForMessage'))
const ForMine = Loadable(() => import('@p/card/entertainment/forfriend/ForMine'))
const ForSendMessage = Loadable(() => import('@p/card/entertainment/forfriend/ForSendMessage'))
const VideoChat = Loadable(() => import('@p/message/VideoChat'))
const AudioChat = Loadable(() => import('@p/message/AudioChat'))
const TakePhoto = Loadable(() => import('@p/message/TakePhoto'))
const TakePhotoFinish = Loadable(() => import('@p/message/TakePhotoFinish'))
const AddFriend = Loadable(() => import('@p/list/AddFriend'))
const NewsList = Loadable(() => import('@p/card/entertainment/NewsList'))
const NewsArticle = Loadable(() => import('@p/card/entertainment/NewsArticle'))
const AnonymousList = Loadable(() => import('@p/card/entertainment/AnonymousList'))
const AnonymousItem = Loadable(() => import('@p/card/entertainment/AnonymousItem'))
const FoodDelivery = Loadable(() => import('@p/card/life/fooddelivery/FoodDelivery'))
const ShopItem = Loadable(() => import('@p/card/life/fooddelivery/ShopItem'))
const BalanceShoppingCar = Loadable(() => import('@p/card/life/fooddelivery/BalanceShoppingCar'))
const PayDeliveryOrder = Loadable(() => import('@p/card/life/fooddelivery/PayDeliveryOrder'))
const PayDeliveryFinish = Loadable(() => import('@p/card/life/fooddelivery/PayDeliveryFinish'))
const SearchChatContent = Loadable(() => import('@p/message/SearchChatContent'))
const FriendCircle = Loadable(() => import('@p/mycenter/FriendCircle'))
const WriteDynamic = Loadable(() => import('@p/mycenter/WriteDynamic'))
const TodoMatter = Loadable(() => import('@p/mycenter/TodoMatter'))
const TodoList = Loadable(() => import('@p/mycenter/TodoList'))
const MyCourseList = Loadable(() => import('@p/card/study/MyCourseList'))
const MyCourseDetail = Loadable(() => import('@p/card/study/MyCourseDetail'))
const QueryGrade = Loadable(() => import('@p/card/study/QueryGrade'))

const routes = [{
        path: '/message',
        component: Message
    },
    {
        path: '/list',
        component: List
    },
    {
        path: '/card',
        component: Card
    },
    {
        path: '/mycenter',
        component: MyCenter
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/phonelogin',
        component: PhoneLogin
    },
    {
        path: '/wxlogin',
        component: WxLogin
    },
    {
        path: '/paycenter',
        component: PayCenter
    },
    {
        path: '/paynet',
        component: PayNet
    },
    {
        path: '/payphone',
        component: PayPhone
    },
    {
        path: '/paycard',
        component: PayCard
    },
    {
        path: '/connectwifi',
        component: ConnectWifi
    },
    {
        path: '/leaveschool',
        component: LeaveSchool
    },
    {
        path: '/applyprocess',
        component: ApplyProcess
    },
    {
        path: '/friendinfo',
        component: FriendInfo
    },
    {
        path: '/friendaction',
        component: FriendAction
    },
    {
        path: '/sendmessage',
        component: SendMessage
    },
    {
        path: '/messageaction',
        component: MessageAction
    },
    {
        path: '/groupmessageaction',
        component: GroupMessageAction
    },
    {
        path: '/userinfo',
        component: UserInfo
    },
    {
        path: '/userinstall',
        component: UserInstall
    },
    {
        path: '/notfound',
        component: NotFound
    },
    {
        path: '/serviceorder',
        component: ServiceOrder
    },
    {
        path: '/forfriend',
        component: ForFriend
    },
    {
        path: '/formessage',
        component: ForMessage
    },
    {
        path: '/formine',
        component: ForMine
    },
    {
        path: '/forsendmessage',
        component: ForSendMessage
    },
    {
        path: '/videochat',
        component: VideoChat
    },
    {
        path: '/audiochat',
        component: AudioChat
    },
    {
        path: '/takephoto',
        component: TakePhoto
    },
    {
        path: '/takephotofinish',
        component: TakePhotoFinish
    },
    {
        path: '/addfriend',
        component: AddFriend
    },
    {
        path: '/newslist',
        component: NewsList
    },
    {
        path: '/newsarticle',
        component: NewsArticle
    },
    {
        path: '/anonymouslist',
        component: AnonymousList
    },
    {
        path: '/anonymousitem',
        component: AnonymousItem
    },
    {
        path: '/fooddelivery',
        component: FoodDelivery
    },
    {
        path: '/shopitem',
        component: ShopItem
    },
    {
        path: '/balanceshoppingcar',
        component: BalanceShoppingCar
    },
    {
        path: '/paydeliveryorder',
        component: PayDeliveryOrder
    },
    {
        path: '/paydeliveryfinish',
        component: PayDeliveryFinish
    },
    {
        path: '/searchchatcontent',
        component: SearchChatContent
    },
    {
        path: '/friendcircle',
        component: FriendCircle
    },
    {
        path: '/writedynamic',
        component: WriteDynamic
    },
    {
        path: '/todomatter',
        component: TodoMatter
    },
    {
        path: '/todolist',
        component: TodoList
    },
    {
        path: '/mycourselist',
        component: MyCourseList
    },
    {
        path: '/mycoursedetail',
        component: MyCourseDetail
    },
    {
        path: '/querygrade',
        component: QueryGrade
    },
]

export default routes