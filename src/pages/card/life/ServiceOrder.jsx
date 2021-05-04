import React from 'react'
import './css/service-order'

// component
import CardItem from '@c/card-item'
import AutoSwiper from '@c/auto-swiper'
import ReturnTitle from '@c/return-title'

// image
import Mind from './img/mind'
import Bathe from './img/bathe'
import HairCut from './img/haircut'

const ServiceOrder = props => {
    return (
        <div id="ServiceOrder">
            <div className="order-header">
                <ReturnTitle text="服务预约" />
            </div>
            <div className="order-body">
                <AutoSwiper imgArr={[Bathe, Mind, HairCut]} />
                <div className="order-card-content">
                    <CardItem img={Bathe} text="洗浴预约" />
                    <CardItem img={HairCut} text="理发预约" />
                    <CardItem img={Mind} text="心理健康" />
                </div>
            </div>
            <div className="order-footer"> </div>
        </div>
    )
}

export default ServiceOrder