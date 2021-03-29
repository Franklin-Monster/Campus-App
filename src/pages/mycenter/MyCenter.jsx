import React from 'react'
import { myCenterCardItemArr, myCenterArrowMenuArr } from './help'
import './css/my-center'

// components
import CardItem from '@c/card-item'
import ArrowMenu from '@c/arrow-menu'

// image
import Franklin from './img/Franklin'
import RightArrow from './img/right-arrow'

const MyCenter = props => {

    return (
        <div id="MyCenter">
            <div className="mycenter-header">
                <div className="mycenter-header-avator">
                    <img src={Franklin} alt="avator" />
                </div>
                <div className="mycenter-header-text">
                    <div className="text-name">Franklin</div>
                    <div className="text-class">17信息1班</div>
                </div>
                <div className="mycenter-header-arrow">
                    <img
                        src={RightArrow}
                        alt="arrow"
                        onClick={() => props.history.push('/userinfo')} />
                </div>
            </div>
            <div className="mycenter-body">
                <div className="mycenter-card">
                    <div className="mycenter-card-title">我的事务</div>
                    <div className="mycenter-card-content">
                        {
                            myCenterCardItemArr.map((item, index) => {
                                return (
                                    <CardItem
                                        img={item.img}
                                        text={item.text}
                                        key={item.img + index}
                                        width="20%"
                                        height="20%"
                                        fontSize=".75rem"
                                        margin=".5rem .25rem"
                                        onClick={() => {
                                            if (item.route) props.history.push(item.route)
                                            else props.history.push('/notfound')
                                        }}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                {
                    myCenterArrowMenuArr.map(item => {
                        return (
                            <ArrowMenu
                                frontImg={item.img}
                                text={item.text}
                                key={item.text}
                                margin=".2rem 0"
                                fontSize=".85rem"
                                onClick={() => props.history.push(item.route)}
                            />
                        )
                    })
                }

            </div>
            <div className="mycenter-footer">  </div>
        </div>
    )
}

export default MyCenter