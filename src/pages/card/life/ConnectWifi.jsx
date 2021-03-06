import React, { useState } from 'react'
import {
    connectWifiHeadItemArr,
    connectWifiFootItemArr,
    connectWifiSwiperImgArr
} from './help'
import './css/connect-wifi'

// component
import ReturnTitle from '@c/return-title'
import CardItem from '@c/card-item'
import AutoSwiper from '@c/auto-swiper'
import Button from '@c/button'

// image
import WiFi from './img/wifi'

const ConnectWifi = () => {
    const [isConnect, setIsConnect] = useState(false)
    const loginClick = () => {
        setIsConnect(true)
    }
    
    return (
        <div id="ConnectWifi">
            <div className="net-header">
                <ReturnTitle text="校园WiFi" background="#FF9900" />
            </div>
            <div className="net-body">
                {
                    isConnect ? (
                        <div className="wifi-connect">
                            <div className="check-wifi">
                                <img src={WiFi} alt="wifi" />
                                <div className="wifi-text">
                                    <div className="wifi-name">Tcu-Internet</div>
                                    <div className="wifi-state">已连接到互联网</div>
                                </div>
                            </div>
                            <div className="wifi-set">
                                {
                                    connectWifiHeadItemArr.map((item, index) => {
                                        return <CardItem
                                            img={item.img}
                                            text={item.text}
                                            width="20%"
                                            key={index} />
                                    })
                                }
                            </div>
                        </div>
                    ) : (
                        <div className="wifi-not-connect">
                            <div className="input-item">
                                <span>账号</span>
                                <input type="number" placeholder="请输入您的校园网账号" />
                            </div>
                            <div className="input-item">
                                <span>密码</span>
                                <input type="password" placeholder="请输入您的网络密码" />
                            </div>
                            <div className="select-item">
                                <span>记住密码<input type="checkbox" /></span>
                                <span>自动登录<input type="checkbox" /></span>
                                <Button text="登录" margin="1rem" onClick={loginClick} />
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="net-footer">
                <AutoSwiper imgArr={connectWifiSwiperImgArr} />
                <div className="net-footer-card">
                    {
                        connectWifiFootItemArr.map((item, index) => {
                            return <CardItem img={item.img} text={item.text} width="24%" key={index} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ConnectWifi