import React, { useRef, useEffect } from 'react'
import './css/video-chat'
import { returnBack } from '@/static/js/fun'
// component 
import Message from '@c/message'

// image
import Reduce from './img/reduce'
import ringOff from './img/ring-off'
import Express from './img/express'
import VoicePhone from './img/voice-phone'
import audioUrl from './img/video.mp3'

const VideoChat = () => {
    const videoRef = useRef()
    useEffect(() => {
        const video = videoRef.current
        getMedia(video);
    }, [])

    const ringOffClick = async () => {
        // console.log(mediaStreamTrack)
        // mediaStreamTrack && mediaStreamTrack.stop()
        Message({
            type: 'warn',
            text: '已挂断'
        })
        returnBack()
    }
    async function getMedia () {
        const video = videoRef.current
        const constraints = {
            video: { width: 500, height: 500 },
            audio: false,
        };
        const MediaStream = await navigator.mediaDevices.getUserMedia(constraints)
        video.srcObject = MediaStream
        video.play()

    }
    let captureImage = () => {
        let video = videoRef.current;
        let canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
        let a_down = document.createElement("a");
        a_down.src = ""
        return canvas.toDataURL("image/jpeg");
    };


    return (
        <div id="VideoChat">
            <div className="video-header">
                <audio style={{ height: '0' }} src={audioUrl} loop controls="controls" autoPlay></audio>
                <div className="header-reduce">
                    <img src={Reduce} alt="reduce" />
                </div>
                <div className="friend-info">
                    <div className="friend-avator">
                        <img src={Express} alt="avator" />
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
                {/* <button
                        onClick={() => {
                            getMedia();
                        }}
                    >
                        打开摄像头
        </button>
                    <br />
                    <button
                        onClick={() => {
                            captureImage();
                        }}
                    >
                        截取当前帧
        </button> */}
                <div className="footer-item" onClick={ringOffClick}>
                    <div className="item-icon">
                        <img src={ringOff} alt="hung" />
                    </div>
                    <div className="item-text">
                        挂断
                    </div>
                </div>
                <div className="footer-item">
                    <div className="item-icon">
                        <img src={VoicePhone} alt="voice" />
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