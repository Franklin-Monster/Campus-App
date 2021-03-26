import React, { useEffect, useMemo, useState } from 'react'
import '../css/pay-delivery-order'

// component
import ReturnTitle from '@c/return-title'

// image
import WxPay from '../img/wx-pay'
import AntPay from '../img/ant-pay'
import UnionPay from '../img/union-pay'
import RightArrowThin from '../img/right-arrow-thin'

const PayDeliveryOrder = props => {
    const [orderName, setOrderName] = useState('')
    const [orderTotalMoney, setOrderTotalMoney] = useState(0)

    // 格式化地址栏参数
    useMemo(() => {
        const searchParams = props.location.search.split('&')
        searchParams.shift()
        const tempObj = {}
        searchParams.map(item => {
            const params = item.split('=')
            tempObj[params[0]] = params[1]
            return null
        })
        setOrderName(tempObj.name)
        setOrderTotalMoney(tempObj.totalMoney)
    }, [props])

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
                        <span>￥</span>{orderTotalMoney}
                    </div>
                    <div className="pay-name">
                        {decodeURI(orderName)} &nbsp;&nbsp;订单详情
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
                <div className="pay-confirm-button" onClick={() => props.history.push({
                    pathname: '/paydeliveryfinish',
                    query: {
                        shoppingCar: props.location.query.shoppingCar
                    }
                })}>
                    确认支付
                </div>
            </div>
        </div>
    )
}

export default PayDeliveryOrder