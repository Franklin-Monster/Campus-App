import React from 'react'
import '../css/pay-delivery-order'

// component
import Message from '@c/message'
import ReturnTitle from '@c/return-title'

// image
import WxPay from '../img/wx-pay'
import AntPay from '../img/ant-pay'
import UnionPay from '../img/union-pay'
import RightArrowThin from '../img/right-arrow-thin'

const PayDeliveryOrder = props => {

    return (
        <div id="PayDeliveryOrder">
            <div className="pay-header">
                <ReturnTitle text="支付订单"
                    returnClick={() => props.history.push('/fooddelivery')} />
                <div className="pay-info-content">
                    <div className="pay-last-time">
                        支付剩余时间15:00
                    </div>
                    <div className="pay-total-money">
                        <span>￥</span>{props.location.query.totalMoney}
                    </div>
                    <div className="pay-name">
                        {decodeURI(props.location.query.name)} &nbsp;&nbsp;订单详情
                        <img src={RightArrowThin} alt="arrow" />
                    </div>
                </div>
            </div>
            <div className="pay-body">
                <div className="pay-way-content">
                    <div className="pay-way-item">
                        <span>
                            <img src={WxPay} alt="wx" />
                            微信支付</span>
                        <span><img src={RightArrowThin} alt="arrow" /></span>
                    </div>
                    <div className="pay-way-item">
                        <span>
                            <img src={AntPay} alt="ant" />支付宝支付</span>
                        <span><img src={RightArrowThin} alt="arrow" /></span>
                    </div>
                    <div className="pay-way-item">
                        <span>
                            <img src={UnionPay} alt="union" />云闪付支付</span>
                        <span><img src={RightArrowThin} alt="arrow" /></span>
                    </div>
                </div>
            </div>
            <div className="pay-footer">
                <div className="pay-confirm-button" onClick={() => {
                    Message({
                        type: 'success',
                        text: '支付成功！'
                    })
                    props.history.push({
                        pathname: '/paydeliveryfinish',
                        query: {
                            orderName: props.location.query.name,
                            shoppingCar: props.location.query.shoppingCar,
                            orderTotalMoney: props.location.query.totalMoney
                        }
                    })
                }}>
                    确认支付
                </div>
            </div>
        </div>
    )
}

export default PayDeliveryOrder