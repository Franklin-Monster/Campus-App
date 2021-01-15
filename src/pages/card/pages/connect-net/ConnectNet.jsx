import React from 'react'
import './css/connectnet'

// component
import ReturnTitle from '../../../../components/return-title'

// image
import WiFi from './img/wifi'
const ConnectNet = (props) => {
    return (
        <div id="ConnectNet">
            <div className="net-header">
                <ReturnTitle text="校园WiFi" background="#FF9900"/>
            </div>
            <div className="net-body">
                <div className="check-wifi">
                    <img src={WiFi} alt="wifi"/>
                    <div className="wifi-text">
                        <div className="wifi-name"></div>
                        <div className="wifi-state"></div>
                    </div>
                </div>
                {/* <div className="input-item">
                    <span>账号</span> <input type="number" placeholder="请输入账号"/>
                </div>
                <div className="input-item">
                    <span>密码</span> <input type="password" placeholder="请输入密码"/>
                </div> */}
            </div>
            <div className="net-footer">

            </div>
        </div>
    )
}

export default ConnectNet