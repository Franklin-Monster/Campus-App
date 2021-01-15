import Loadable from './loadble';
const Message = Loadable(() => import('../../pages/message/Message'))
const Card = Loadable(() => import('../../pages/card/Card'))
const List = Loadable(() => import('../../pages/list/List'))
const MyCenter = Loadable(() => import('../../pages/mycenter/MyCenter'))
const PhoneLogin = Loadable(() => import('../login/phoneLogin'))
const WxLogin = Loadable(() => import('../login/wxLogin'))
const Login = Loadable(() => import('../login/index'))
const PayCenter = Loadable(() => import('../../pages/card/pages/paycenter/PayCenter'))
const PayNet = Loadable(() => import('../../pages/card/pages/paycenter/PayNet'))
const PayPhone = Loadable(() => import('../../pages/card/pages/paycenter/PayPhone'))
const PayCard = Loadable(() => import('../../pages/card/pages/paycenter/PayCard'))
const ConnectNet = Loadable(() => import('../../pages/card/pages/connect-net/ConnectNet'))
const routes = [
    {
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
        path: '/connectnet',
        component: ConnectNet
    }

]
export default routes


