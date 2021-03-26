import React from 'react'
import '../css/pay-delivery-finish'

// component 
import ReturnTitle from '@c/return-title'

// image
import ChangeOrder from '../img/change-order'
import CancelOrder from '../img/cancel-order'
import OnlineMessage from '../img/online-message'

const PayDeliveryFinish = props => {
    return (
        <div id="PayDeliveryFinish">
            <div className="finish-header">
                <ReturnTitle text="等待送达" />
            </div>
            <div className="finish-body">
                <div className="finish-detail-content">
                    <div className="finish-detail-title">配送详情</div>
                    <div className="finish-detail-item">
                        <span>18:00</span>
                        <span>商品已下单</span>
                    </div>
                    <div className="finish-detail-item">
                        <span>18:01</span>
                        <span>商家已接单</span>
                    </div>
                    <div className="finish-detail-item">
                        <span>18:09</span>
                        <span>商家已出餐</span>
                    </div>
                    <div className="finish-detail-item">
                        <span>18:11</span>
                        <span>配送员已取餐</span>
                    </div>
                    <div className="finish-detail-item">
                        <span>18:11</span>
                        <span>等待送达</span>
                    </div>
                </div>
                <div className="order-info-content">
                    <div className="shop-name">
                        {decodeURI(props.location.query.orderName)}
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
                    <div className="order-money">
                        <span>￥</span>
                        {props.location.query.orderTotalMoney}
                    </div>
                </div>
            </div>
            <div className="finish-footer-block"></div>
            <div className="finish-footer">
                <div className="finish-box">
                    <div className="finish-time">
                        预计<span>18:20</span>送达
                    </div>
                    <div className="finish-operate-content">
                        <div className="finish-operate-item">
                            <img src={ChangeOrder} alt="change" />
                            <div className="finish-item-text">改订单信息</div>
                        </div>
                        <div className="finish-operate-item">
                            <img src={OnlineMessage} alt="message" />
                            <div className="finish-item-text">在线联系</div>
                        </div>
                        <div className="finish-operate-item">
                            <img src={CancelOrder} alt="cancel" />
                            <div className="finish-item-text">取消订单</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PayDeliveryFinish