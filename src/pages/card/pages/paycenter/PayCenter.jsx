import React from 'react'
import { paycenterImgArr, paycenterTextArr, paycenterClickArr } from './help'
import { returnBack } from '../../../../static/js/fun'
import './css/paycenter'

// component
import AutoSwiper from '../../../../components/auto-swiper'
import CardItem from '../../../../components/card-item'

// image
import img1 from './img/img1.jpeg'
import img2 from './img/img2.jpeg'
import img3 from './img/img3.jpeg'
import ReturnArrow from './img/return'
const PayCenter = () => {
    return (
        <div id="PayCenter">
            <div className="paycenter-header">
                <img src={ReturnArrow} alt='return' onClick={returnBack} />充值缴费
            </div>
            <div className="paycenter-body">
                <div className="body-swiper">
                    <AutoSwiper imgArr={[img1, img2, img3]} />
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
                                        width="4rem"
                                        height="4rem"
                                        onClick={paycenterClickArr[index]} />
                                )
                            })
                        }
                        <CardItem text="账单查询" img={null} width="4rem" height="4rem" visibility="hidden" />
                    </div>
                </div>
            </div>
            <div className="paycenter-footer">

            </div>
        </div>
    )
}
export default PayCenter