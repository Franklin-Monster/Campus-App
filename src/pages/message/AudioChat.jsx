import React from 'react'
import './css/audio-chat'

// component 
import Message from '@c/message'

// image
import Reduce from './img/reduce'
import RingOff from './img/ring-off'
import Franklin from './img/Franklin'
import VideoPhone from './img/video-phone'
import AudioUrl from './img/video.mp3'

const AudioChat = (props) => {
    // 挂断
    const ringOffClick = async () => {
        Message({
            type: 'warn',
            text: '已挂断'
        })
        setTimeout(() => {
            window.location.replace('/sendmessage')
        }, 1000);
    }

    return (
        <div id="AudioChat">
            <div className="audio-header">
                <audio style={{ height: '0' }} src={AudioUrl} loop controls="controls" autoPlay></audio>
                <div className="header-reduce">
                    <img src={Reduce} alt="reduce" />
                </div>
                <div className="friend-info">
                    <div className="friend-avator">
                        <img src={Franklin} alt="avator" />
                    </div>
                    <div className="friend-text">
                        <div className="friend-name">
                            Franklin
                        </div>
                        <div className="friend-state">
                            正在等待对方接受邀请...
                        </div>
                    </div>
                </div>
            </div>
            <div className="audio-body">

            </div>
            <div className="audio-footer">
                <div className="footer-item" onClick={ringOffClick}>
                    <div className="item-icon">
                        <img src={RingOff} alt="hung" />
                    </div>
                    <div className="item-text">
                        挂断
                    </div>
                </div>
                <div className="footer-item">
                    <div className="item-icon">
                        <img src={VideoPhone} alt="voice" onClick={() => props.history.push('/videochat')} />
                    </div>
                    <div className="item-text">
                        切换到视频通话
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AudioChat