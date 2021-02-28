import React, { useEffect, useRef, useState } from 'react'
import './css/send-message'
import { sendPlusItemArr } from './help'

// component
import ReturnTitle from '@c/return-title'
import { ImagePicker } from 'antd-mobile'

// image
import More from './img/more'
import Plus from './img/plus'
import Voice from './img/voice'
import Express from './img/express'
import Franklin from './img/Franklin'

const SendMessage = props => {
    const footerRef = useRef()
    const [mySendMessage, setMySendMessage] = useState([])
    const propsQuery = props.location.query

    // 接收拍摄的照片
    useEffect(() => {
        try {
            if (propsQuery.photoSrc) {
                setMySendMessage(mes => [...mes, {
                    type: 'image',
                    value: propsQuery.photoSrc
                }])
            }
        } catch (err) {

        }
    }, [propsQuery])

    // 监听选择图片
    const onImageChange = files => {
        files.forEach(item => {
            setMySendMessage(mes => [...mes, {
                type: 'image',
                value: item.url
            }])
        })
    }

    // 显示更多菜单
    const sendPlusClick = () => {
        footerRef.current.style.height = '15rem'
    }

    // 隐藏更多菜单
    const bodyClick = () => {
        footerRef.current.style.height = '2.4rem'
    }

    // 发送文字消息
    const sendMessage = e => {
        if (!e.target.value) return
        if (e.code === 'Enter') {
            const value = e.target.value
            setMySendMessage(mes => [...mes, {
                type: 'text',
                value
            }])
            e.target.value = ''
        }
    }

    return (
        <div id="SendMessage">

            <div className="send-header">
                <ReturnTitle
                    arrowColor='black'
                    background="#FAFAFA"
                    // text={props.name} 
                    text='Franklin'
                    color="#000"
                    rightImg={More}
                    rightImgClick={() => props.history.push('/messageaction')} />
            </div>
            <div className="send-header-block"></div>
            <div className="send-body" onClick={bodyClick}>
                <div className="message-box">
                    {
                        mySendMessage.map((item, index) => {
                            switch (item.type) {
                                case 'text':
                                    return (
                                        <div className="message-item" key={index}>
                                            <div className="message-avator">
                                                <img src={Franklin} alt="avator" />
                                            </div>
                                            <div className="message-wrap">
                                                <div className="message-content">
                                                    {item.value}
                                                </div>
                                                <div className="message-tria"></div>
                                            </div>
                                        </div>
                                    )
                                case 'image':
                                    return (
                                        <div className="message-item" key={index}>
                                            <div className="message-avator">
                                                <img src={Franklin} alt="avator" />
                                            </div>
                                            <div className="message-wrap">
                                                <div className="message-content">
                                                    <img src={item.value} alt="img" />
                                                </div>
                                                <div className="message-tria"></div>
                                            </div>
                                        </div>
                                    )
                                default: return null
                            }

                        })
                    }
                </div>
            </div>
            <div className="send-footer-block"></div>
            <div className="send-footer" ref={footerRef}>
                <div className="send-content">
                    <img src={Voice} alt="voice" />
                    <div className="send-input">
                        <input type="text" onKeyDown={sendMessage} />
                    </div>
                    <img src={Express} alt="express" />
                    <img src={Plus} alt="plus" onClick={sendPlusClick} />
                </div>
                <div className="send-plus">
                    <div className="plus-content">
                        <div className="upload-image">
                            <ImagePicker
                                onChange={onImageChange}
                                onImageClick={(index, fs) => console.log(index, fs)}
                                multiple={true}
                            />
                        </div>
                        {
                            sendPlusItemArr.map((item, index) => {
                                return (
                                    <div className="plus-item" key={index} onClick={item.onClick}>
                                        <div><img src={item.img} alt={index} /></div>
                                        <div>{item.text}</div>
                                    </div>
                                )
                            })
                        }

                        <div className="plus-item" style={{ visibility: 'hidden' }}>
                            <div><img src={More} alt="none" /></div>
                            <div>照片</div>
                        </div>
                        <div className="plus-item" style={{ visibility: 'hidden' }}>
                            <div><img src={More} alt="none" /></div>
                            <div>照片</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SendMessage