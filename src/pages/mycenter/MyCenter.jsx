import React, { useState } from 'react'
import { myCenterCardItemArr, myCenterArrowMenuArr } from './help'
import './css/my-center'

// components
import CardItem from '@c/card-item'
import ArrowMenu from '@c/arrow-menu'

// image
import Avator from './img/user'
import RightArrow from './img/right-arrow'

const MyCenter = (props) => {
    const [userName, setUserName] = useState('Franklin')
    const [userClass, setUserClass] = useState('17信息1班')
    const [userGender, setUserGender] = useState('男')
    const [userCollege, setUserCollege] = useState('经济与管理学院')
    const [userAvator, setUserAvator] = useState(Avator)

    return (
        <div id="MyCenter">
            <div className="mycenter-header">
                <div className="mycenter-header-avator">
                    <img src={userAvator} alt="avator" />
                </div>
                <div className="mycenter-header-text">
                    <div className="text-name"> {userName} </div>
                    <div className="text-class"> {userClass} </div>
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
                                        key={index}
                                        width="20%"
                                        height="20%"
                                        fontSize=".8rem"
                                        margin=".5rem .25rem"
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                {
                    myCenterArrowMenuArr.map((item, index) => {
                        return (
                            <ArrowMenu
                                frontImg={item.img}
                                text={item.text}
                                key={index}
                                margin=".2rem 0"
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