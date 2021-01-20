import Loadable from './loadble';
const Message = Loadable(() => import('@p/message/Message'))
const Card = Loadable(() => import('@p/card/Card'))
const List = Loadable(() => import('@p/list/List'))
const MyCenter = Loadable(() => import('@p/mycenter/MyCenter'))
const PhoneLogin = Loadable(() => import('../login/phoneLogin'))
const WxLogin = Loadable(() => import('../login/wxLogin'))
const Login = Loadable(() => import('../login/index'))
const PayCenter = Loadable(() => import('@p/card/pages/paycenter/PayCenter'))
const PayNet = Loadable(() => import('@p/card/pages/paycenter/PayNet'))
const PayPhone = Loadable(() => import('@p/card/pages/paycenter/PayPhone'))
const PayCard = Loadable(() => import('@p/card/pages/paycenter/PayCard'))
const ConnectNet = Loadable(() => import('@p/card/pages/connect-net/ConnectNet'))
const LeaveSchool = Loadable(() => import('@p/card/pages/leave-school/LeaveSchool'))
const ApplyProcess = Loadable(() => import('@p/card/pages/leave-school/ApplyProcess'))
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
    },
    {
        path: '/leaveschool',
        component: LeaveSchool
    },
    {
        path: '/applyprocess',
        component: ApplyProcess
    }

]
export default routes


