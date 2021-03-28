import React, { useRef, useEffect } from 'react'
import { returnBack } from '@/static/js/fun'
import './css/take-photo'

// image
import TakePicture from './img/take-picture'
import ReturnArrow from './img/return-arrow'
import ChangeCamera from './img/change-camera'
import TakePhotoSound from './img/take-photo-sound.mp3'

const TakePhoto = props => {
    const videoRef = useRef()
    useEffect(() => {
        getMedia();
    }, [])

    // 获取摄像头
    const getMedia = async () => {
        const video = videoRef.current
        const constraints = {
            video: { width: '100%', height: '100%' },
            audio: false,
        };
        const MediaStream = await navigator.mediaDevices.getUserMedia(constraints)
        video.srcObject = MediaStream
        video.play()
    }

    // 拍照
    const takePhotoClick = () => {
        const audio = new Audio(TakePhotoSound)
        audio.play().then(() => {
            const video = videoRef.current
            const canvas = document.createElement("canvas")
            canvas.width = video.videoWidth
            canvas.height = video.videoHeight
            canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height)
            sessionStorage.setItem("media", true)
            props.history.push(`/takephotofinish/?&photo=${canvas.toDataURL("image/jpg")}`)
        })
    }

    return (
        <div id="TakePhoto">
            <div className="photo-header">
                <img src={ReturnArrow} alt="return" onClick={() => returnBack()} />
                <img src={ChangeCamera} alt="change" />
            </div>
            <div className="photo-body">
                <div className="video-body">
                    <video className="video-content"
                        ref={videoRef}
                        width="1000px"
                        height="100%"
                        autoPlay={true}>
                    </video>
                </div>
            </div>
            <div className="photo-footer">
                <img src={TakePicture} alt="take" onClick={takePhotoClick} />
            </div>
        </div>
    )
}

export default TakePhoto