import React, { useState } from 'react'
import Avator from './img/user.png'
import './MyCenter.scss'
import ArrowMenu from '../../components/arrow-menu'
import Arrow from './img/eee-arrow.png'
const MyCenter = (props) => {
    const [userName, setUserName] = useState('Franklin')
    const [userClass, setUserClass] = useState('17信息1班')
    const [userGender, setUserGender] = useState('男')
    const [userAvator, setUserAvator] = useState(Avator)
    return (
        <div id="MyCenter">
            <div className="mycenter-header">
                <div className="mycenter-header-avator">
                    <img src={userAvator} alt="avator"></img>
                </div>
                <div className="mycenter-header-text">
                    <div className="text-name"> {userName} </div>
                    <div className="text-class"> {userClass} </div>
                </div>
                <div className="mycenter-header-arrow">
                    <img src={require("./img/right-arrow.png").default} alt="arrow"></img>
                </div>
            </div>
            <div className="mycenter-body">
                {/* <div className="mycenter-body-item">
                    <span className="item-img">
                    <img src={userAvator} alt="avator"></img>
                    </span>
                    <span className="item-text">12356</span>
                    <span className="item-arrow">
                    <img src={require("./img/right-arrow.png").default} alt="arrow"></img>
                    </span>
                </div> */}
                <ArrowMenu text="123" frontImg={Avator} endImg={Arrow}></ArrowMenu>
                <ArrowMenu text="123" frontImg={Avator} endImg={Arrow}></ArrowMenu>
                <ArrowMenu text="123" frontImg={Avator} endImg={Arrow}></ArrowMenu>
                <ArrowMenu text="123" frontImg={Avator} endImg={Arrow}></ArrowMenu>
                <ArrowMenu text="123" frontImg={Avator} endImg={Arrow}></ArrowMenu>
                <ArrowMenu text="123" frontImg={Avator} endImg={Arrow}></ArrowMenu>
                <ArrowMenu text="123" frontImg={Avator} endImg={Arrow}></ArrowMenu>
                <ArrowMenu text="123" frontImg={Avator} endImg={Arrow}></ArrowMenu>
                <ArrowMenu text="123" frontImg={Avator} endImg={Arrow}></ArrowMenu>
                <ArrowMenu text="123" frontImg={Avator} endImg={Arrow}></ArrowMenu>
                <ArrowMenu text="123" frontImg={Avator} endImg={Arrow}></ArrowMenu>
                <ArrowMenu text="123" frontImg={Avator} endImg={Arrow}></ArrowMenu>


            </div>
            <div className="mycenter-footer">

            </div>
        </div>
    )
}

export default MyCenter