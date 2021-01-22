import React from 'react'
import ReturnTitle from '@c/return-title'
import './css/friend-info'

// image
import More from './img/more'
import Avator from './img/avator'

// component
import Button from '@c/button'
import ArrowMenu from '@c/arrow-menu'

const FriendInfo = (props) => {
    const goSendMessage = () => {
        props.history.push('/sendmessage')
    }
    
    return (
        <div id="FriendInfo">
            <div className="friend-header">
                <ReturnTitle arrowColor='black' background="#FAFAFA" text="" rightImg={More} />
            </div>
            <div className="friend-body">
                <div className="friend-base">
                    <div className="friend-avator">
                        <img src={Avator} alt="avator" />
                    </div>
                    <div className="friend-intro">
                        <div className="friend-name">
                            Franklin
                    </div>
                        <div className="friend-number">
                            学号：1705080106
                    </div>
                    </div>
                </div>
                <div className="friend-info">
                    <ArrowMenu text="备注" height="2rem" fontSize="1.1rem" />
                    <ArrowMenu text="所属架构" height="2rem" fontSize="1.1rem" />
                    <ArrowMenu text="个人空间" height="2rem" fontSize="1.1rem" />
                </div>
                <div className="friend-button">
                    <Button text="发消息"
                        background="#3775F6"
                        color="#fff"
                        margin="2rem auto"
                        onClick={goSendMessage} />
                    <Button text="打电话" background="#00FF00" color="#fff" margin=".5rem auto" />
                </div>
            </div>
            <div className="friend-footer"></div>
        </div>
    )
}

export default FriendInfo