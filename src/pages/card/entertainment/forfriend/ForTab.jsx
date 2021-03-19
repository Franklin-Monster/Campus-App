import React from 'react'
import '../css/for-tab'

// image
import Mine from '../img/mine'
import Slide from '../img/slide'
import Message from '../img/message'

const ForTab = props => {
    return (
        <div id="ForTab">
            <div className="footer-tab">
                <div className="footer-tab-item" onClick={() => props.goForFriend()}>
                    <img src={Slide} alt="slide" />
                    <div className="tab-item-text">
                        划一划
                        </div>
                </div>
                <div className="footer-tab-item">
                    <img src={Message} alt="message" onClick={() => props.goForMessage()} />
                    <div className="tab-item-text">
                        消息
                        </div>
                </div>
                <div className="footer-tab-item">
                    <img src={Mine} alt="mine" onClick={() => props.goForMine()} />
                    <div className="tab-item-text">
                        我
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ForTab