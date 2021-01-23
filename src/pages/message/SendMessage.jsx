import React, { useRef } from 'react'
import ReturnTitle from '@c/return-title'
import './css/send-message'
import { sendPlusImgArr, sendPlusTextArr } from './help'

// image
import More from './img/more'
import Plus from './img/plus'
import Voice from './img/voice'
import Express from './img/express'

const SendMessage = (props) => {
    const footerRef = useRef()
    const sendPlusClick = () => {
        footerRef.current.style.height = '15rem'
    }
    const bodyClick = () => {
        footerRef.current.style.height = '2.4rem'
    }

    return (
        <div id="SendMessage">
            <div className="send-header">
                <ReturnTitle 
                arrowColor='black' 
                background="#FAFAFA" 
                text={props.name} 
                rightImg={More} 
                rightImgClick={() => props.history.push('/messageaction')}/>
            </div>
            <div className="send-body" onClick={bodyClick}>

            </div>
            <div className="send-footer" ref={footerRef}>
                <div className="send-content">
                    <img src={Voice} alt="voice" />
                    <div className="send-input">
                        <input type="text" />
                    </div>
                    <img src={Express} alt="express" />
                    <img src={Plus} alt="plus" onClick={sendPlusClick} />
                </div>
                <div className="send-plus">
                    <div className="plus-content">

                        {
                            sendPlusImgArr.map((item, index) => {
                                return (
                                    <div className="plus-item" key={index}>
                                        <div><img src={item} alt={index} /></div>
                                        <div>{sendPlusTextArr[index]}</div>
                                    </div>
                                )
                            })
                        }

                        <div className="plus-item" style={{ visibility: 'hidden' }}>
                            <div><img src={More} /></div>
                            <div>照片</div>
                        </div>
                        <div className="plus-item" style={{ visibility: 'hidden' }}>
                            <div><img src={More} /></div>
                            <div>照片</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SendMessage