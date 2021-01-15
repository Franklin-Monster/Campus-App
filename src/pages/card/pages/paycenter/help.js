// image
import List from './img/list'
import PayNet from './img/pay-net'
import PayAir from './img/pay-air'
import PayTele from './img/pay-tele'
import PayCard from './img/pay-card'
import PayStudy from './img/pay-study'
import PayPower from './img/pay-power'
import { goRoute } from '../../../../static/js/fun'

const ListClick = () => console.log(123)
const PayNetClick = () => {
    goRoute('/paynet')
}
const PayPhoneClick = () => {
    goRoute('/payphone')
}
const PayCardClick = () => {
    goRoute('/paycard')
}

const PayAirClick = () => console.log(33)
const PayStudyClick = () => console.log(22)
const PayPowerClick = () => console.log(33)
export const paycenterImgArr = [PayNet, PayAir, PayTele, PayCard, PayStudy, PayPower, List]
export const paycenterTextArr = ['充网费', '充空调费', '充话费', '充一卡通', '交学费', '交电费', '账单查询']
export const paycenterClickArr = [PayNetClick, PayAirClick, PayPhoneClick, PayCardClick, PayStudyClick, PayPowerClick, ListClick]