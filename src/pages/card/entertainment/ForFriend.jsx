import React, { useState, useRef, useEffect } from 'react'

import Dragger from 'react-dragger-r'
import './css/for-friend'

// component
import ReturnTitle from '@c/return-title'

// image
import P1 from './img/p1'
import P2 from './img/p2'
import P3 from './img/p3'
import No from './img/no'
import Love from './img/love'
import Mine from './img/mine'
import Slide from './img/slide'
import Collect from './img/collect'
import Message from './img/message'

const ForFriend = () => {
    const [sildeImgArr, setSildeImgArr] = useState([P1, P2, P3])
    const img0Ref = useRef()
    const img1Ref = useRef()
    let imgRef = null
    let startX = null, endX = null
    useEffect(() => {
        imgRef = document.getElementById('imgRef')
    }, [])

    const handleTouchStart = e => {
        startX = e.touches[0].clientX
    }
    const handleTouchMove = e => {
        // endX = e.touches[0].clientX;
        // img1Ref.current.style.transform = `translateX(${endX}px)`

        // if (endX - startX > document.body.clientWidth / 2) {
        //     img1Ref.current.style.transform = `translateX(200%)`
        //     setSildeImgArr(sildeImgArr.filter((count, index) => index !== sildeImgArr.length - 1))
        // } else {
        //     img1Ref.current.style.transform = `translateX(0)`
        // }

    }
    const handleTouchEnd = e => {
        // sildeImgArr.pop()
        console.log(sildeImgArr)
    }

    // 点击喜欢按钮
    const loveClick = () => {
        // console.log(imgRef.style.transform)
        // imgRef.style.transform = `translateX(200%)`
        img1Ref.current.style.transform = `translateX(200%)`
        setSildeImgArr(sildeImgArr.filter((count, index) => index !== sildeImgArr.length - 1))
        setTimeout(() => {
            img1Ref.current.style.transform = `translateX(0)`
        }, 1000);
    }

    return (
        <div id="ForFriend">
            <div className="fri-header">
                <ReturnTitle text='休闲交友' />
            </div>
            <div className="fri-body">
                <div className="image-content">
                    {/* {
                        sildeImgArr.map(item => {
                            return (
                                <img src={item}
                                    key={item}
                                    alt="img"
                                    onTouchStart={handleTouchStart}
                                    onTouchMove={handleTouchMove}
                                    onTouchEnd={handleTouchEnd}
                                    ref={img1Ref}
                                    id="imgRef"
                                    style={{ zIndex: '2' }} />
                            )
                        })
                    } */}
                    <img src={sildeImgArr[sildeImgArr.length - 1]}
                        alt="img"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        ref={img1Ref}
                        style={{ zIndex: '2' }} />
                    <img src={sildeImgArr[sildeImgArr.length - 2]}
                        alt="img"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        ref={img0Ref}
                        style={{ zIndex: '1' }} />
                </div>
                <div className="button-content">
                    <img src={No} alt="no" />
                    <img src={Collect} alt="collect" />
                    <img src={Love} alt="love" onClick={loveClick} />
                </div>
            </div>
            <div className="fri-footer">
                <div className="footer-tab">
                    <div className="footer-tab-item">
                        <img src={Slide} alt="slide" />
                        <div className="tab-item-text">
                            划一划
                        </div>
                    </div>
                    <div className="footer-tab-item">
                        <img src={Message} alt="message" />
                        <div className="tab-item-text">
                            消息
                        </div>
                    </div>
                    <div className="footer-tab-item">
                        <img src={Mine} alt="mine" />
                        <div className="tab-item-text">
                            我
                        </div>
                    </div>
                </div>
            </div>
            {/* <Dragger>
                <img src={Img} alt="img" onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    ref={ref} />
            </Dragger> */}

        </div>
    )
}

export default ForFriend