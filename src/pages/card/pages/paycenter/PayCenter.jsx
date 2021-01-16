import React from 'react'
import { paycenterImgArr, paycenterTextArr, paycenterClickArr } from './help'
import { returnBack } from '../../../../static/js/fun'
import './css/paycenter'

// component
import AutoSwiper from '@c/auto-swiper'
import CardItem from '@c/card-item'

// image
import Swiper1 from './img/swiper1.jpeg'
import Swiper2 from './img/swiper2.jpeg'
import Swiper3 from './img/swiper3.jpeg'
import ReturnArrow from './img/return'
const PayCenter = () => {
    return (
        <div id="PayCenter">
            <div className="paycenter-header">
                <img src={ReturnArrow} alt='return' onClick={returnBack} />充值缴费
            </div>
            <div className="paycenter-body">
                <div className="body-swiper">
                    <AutoSwiper imgArr={[Swiper1, Swiper2, Swiper3]} />
                </div>
                <div className="body-content">
                    <div className="body-item">
                        {
                            paycenterImgArr.map((item, index) => {
                                return (
                                    <CardItem
                                        text={paycenterTextArr[index]}
                                        img={item}
                                        key={item}
                                        width="20%"
                                        height="20%"
                                        onClick={paycenterClickArr[index]} />
                                )
                            })
                        }
                        <CardItem text="账单查询" img={null} width="20%" height="20%" visibility="hidden" />
                    </div>
                </div>
            </div>
            <div className="paycenter-footer">

            </div>
        </div>
    )
}
export default PayCenter