import React, { useRef, useEffect } from 'react'
import './css/video-chat'

// component 
import Message from '@c/message'

// image
import Reduce from './img/reduce'
import RingOff from './img/ring-off'
import Franklin from './img/Franklin'
import AudioPhone from './img/audio-phone'
import AudioUrl from './img/video.mp3'

const VideoChat = props => {
    const videoRef = useRef()
    useEffect(() => {
        getMedia();
    }, [])

    // 挂断
    const ringOffClick = async () => {
        Message({
            type: 'warn',
            text: '已挂断'
        })
        sessionStorage.setItem("isRingOff", 'ringoff')
        sessionStorage.setItem("media", true)
        setTimeout(() => {
            props.history.go(-1)
        }, 1000);
    }

    // 获取摄像头
    const getMedia = async () => {
        const video = videoRef.current
        const constraints = {
            video: { width: '100%', height: 500 },
            audio: false,
        };
        const MediaStream = await navigator.mediaDevices.getUserMedia(constraints)
        video.srcObject = MediaStream
        video.play()
    }

    return (
        <div id="VideoChat">
            <div className="video-header">
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
            <div className="video-body">
                <video className="video-content"
                    ref={videoRef}
                    width="1000px"
                    height="100%"
                    autoPlay={true}>
                </video>
            </div>
            <div className="video-footer">
                <div className="footer-item" onClick={ringOffClick}>
                    <div className="item-icon">
                        <img src={RingOff} alt="hung" />
                    </div>
                    <div className="item-text">
                        挂断
                    </div>
                </div>
                <div className="footer-item" >
                    <div className="item-icon">
                        <img src={AudioPhone} alt="voice" onClick={() => props.history.push('/audiochat')} />
                    </div>
                    <div className="item-text">
                        切换到语音通话
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoChat