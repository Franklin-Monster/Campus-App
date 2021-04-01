import React from 'react'
import '../css/balance-shoppingcar'

// component
import Message from '@c/message'
import ReturnTitle from '@c/return-title'

// image
import RedPaper from '../img/red-paper'
import RightArrowThin from '../img/right-arrow-thin'

const BalanceShoppingCar = props => {
    
    return (
        <div id="BalanceShoppingCar">
            <div className="balance-header">
                <ReturnTitle text="确认订单"
                    returnClick={() => props.history.push('/fooddelivery')} />
                <div className="select-delivery-way-content">
                    <div className="select-delivery-title">
                        <span>外卖配送</span>
                        <span>到店自取</span>
                    </div>
                    <div className="select-delivery-way">
                        <div className="delivery-way-content">
                            <div className="delivery-info">
                                <div className="terminal-info">
                                    <div className="place-info">
                                        <span>天津城建大学骏善斋201</span>
                                        <span>
                                            <img src={RightArrowThin} alt="arrow" />
                                        </span>
                                    </div>
                                    <div className="person-info">
                                        王瀚堃 先生 15076935128
                                </div>
                                </div>
                                <div className="time-info">
                                    <span>立即送出</span>
                                    <span>大约18:00送达
                                    <img src={RightArrowThin} alt="arrow" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="balance-body">
                <div className="order-info-content">
                    <div className="shop-name">
                        {decodeURI(props.location.query.paramsObj.name)}
                    </div>
                    <div className="shopping-car-content">
                        {
                            props.location.query.shoppingCar.map(item => {
                                return (
                                    <div className="shopping-car-item" key={item.avator}>
                                        <div className="car-item-left">
                                            <img src={item.avator} alt="shop" />
                                        </div>
                                        <div className="car-item-middle">
                                            <div className="car-item-name">
                                                {item.name}
                                            </div>
                                            <div className="car-item-count">
                                                ×{item.selectCount}
                                            </div>
                                        </div>
                                        <div className="car-item-right">
                                            <span>￥</span>
                                            {item.price}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="delivery-money">
                        <span>配送费</span>
                        <span>￥{decodeURI(props.location.query.paramsObj.delivery)}</span>
                    </div>
                    <div className="order-red-paper">
                        <span><img src={RedPaper} alt="red" />红包</span>
                        <span><img src={RightArrowThin} alt="arrow" /></span>
                    </div>
                    <div className="order-money">
                        <span>￥</span>
                        {props.location.query.totalMoney}
                    </div>
                </div>
                <div className="order-plus-content">
                    <div className="order-plus-item">
                        <span>备注</span>
                        <span>口味、偏好等要求
                        <img src={RightArrowThin} alt="arrow" />
                        </span>
                    </div>
                    <div className="order-plus-item">
                        <span>餐具数量</span>
                        <span>依据餐量提供
                        <img src={RightArrowThin} alt="arrow" />
                        </span>
                    </div>
                </div>
            </div>
            <div className="balance-footer-block"></div>
            <div className="balance-footer">
                <span className="order-total-money">
                    <span>￥</span>
                    {props.location.query.totalMoney}
                </span>
                <span className="order-submit-button"
                    onClick={() => {
                        Message({
                            type: 'success',
                            text: '提交订单成功！'
                        })
                        props.history.push({
                            pathname: '/paydeliveryorder',
                            query: {
                                name: decodeURI(props.location.query.paramsObj.name),
                                shoppingCar: props.location.query.shoppingCar,
                                totalMoney: props.location.query.totalMoney
                            }
                        })
                    }}>
                    提交订单
                </span>
            </div>
        </div>
    )
}

export default BalanceShoppingCar