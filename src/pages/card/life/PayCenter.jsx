import React from 'react'
import { payCenterCardItemArr } from './help'
import './css/pay-center'

// component
import CardItem from '@c/card-item'
import AutoSwiper from '@c/auto-swiper'
import ReturnTitle from '@c/return-title'

// image
import Swiper1 from './img/swiper1.jpeg'
import Swiper2 from './img/swiper2.jpeg'
import Swiper3 from './img/swiper3.jpeg'

const PayCenter = (props) => {
    return (
        <div id="PayCenter">
            <div className="paycenter-header">
                 <ReturnTitle text="充值缴费" />
                 <div className="header-swiper">
                    <AutoSwiper imgArr={[Swiper1, Swiper2, Swiper3]} />
                </div>
            </div>
            <div className="paycenter-body">
                <div className="body-content">
                    <div className="body-item">
                        {
                            payCenterCardItemArr.map((item, index) => {
                                return (
                                    <CardItem
                                        text={item.text}
                                        img={item.img}
                                        key={index}
                                        width="20%"
                                        height="20%"
                                        onClick={() => props.history.push(item.route)} />
                                )
                            })
                        }
                        <CardItem text="账单查询" img={null} width="20%" height="20%" visibility="hidden" />
                    </div>
                </div>
            </div>
            <div className="paycenter-footer"> </div>
        </div>
    )
}


export default PayCenter