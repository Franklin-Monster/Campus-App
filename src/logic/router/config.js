import { Redirect } from 'react-router-dom'
import Loadable from './loadble';
const Message = Loadable(() => import('../../pages/message/Message'))
const Card = Loadable(() => import('../../pages/card/Card'))
const List = Loadable(() => import('../../pages/list/List'))
const MyCenter = Loadable(() => import('../../pages/mycenter/MyCenter'))
const PhoneLogin = Loadable(() => import('../login/phoneLogin'))
const WxLogin = Loadable(() => import('../login/wxLogin'))
const Login = Loadable(() => import('../login/index'))
const Register = Loadable(() => import('../register/index'))
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
        path: '/register',
        component: Register
    }

]
export default routes