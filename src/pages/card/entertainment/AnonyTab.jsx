import React from 'react'
import './css/anony-tab'

// image
import BBS from './img/bbs'
import AnonyMessage from './img/anony-message'
import AnonyMyCenter from './img/anony-mycenter'

const AnonyTab = props => {
    return (
        <div id="AnonyTab">
            <div className="anony-footer-tab-content">
                <div className="anony-footer-tab-item">
                    <img src={BBS} alt="bbs" />
                    <div>校言</div>
                </div>
                <div className="anony-footer-tab-item">
                    <img src={AnonyMessage} alt="message" />
                    <div>消息</div>
                </div>
                <div className="anony-footer-tab-item">
                    <img src={AnonyMyCenter} alt="mine" />
                    <div>我的</div>
                </div>
            </div>
        </div>
    )
}
export default AnonyTab