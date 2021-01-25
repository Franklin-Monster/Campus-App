import React from 'react'

import './css/friend-info'

// image
import More from './img/more'
import Avator from './img/avator'

// component
import Button from '@c/button'
import { Modal } from 'antd-mobile'
import ArrowMenu from '@c/arrow-menu'
import ReturnTitle from '@c/return-title'


const FriendInfo = (props) => {
    // 更改备注
    const changeRemark = () => {
        Modal.prompt('备注', '',
            [
                { text: '取消' },
                { text: '确定', onPress: value => console.log(`输入的内容:${value}`) },
            ], 'default', 'Franklin')
    }

    return (
        <div id="FriendInfo">
            <div className="friend-header">
                <ReturnTitle
                    arrowColor='black'
                    background="#FAFAFA"
                    text=""
                    rightImg={More}
                    rightImgClick={() => props.history.push('/friendaction')} />
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
                    <ArrowMenu text="备注" height="2rem" fontSize="1.1rem"
                        onClick={changeRemark} />
                    <ArrowMenu text="所属架构" height="2rem" fontSize="1.1rem" />
                    <ArrowMenu text="个人空间" height="2rem" fontSize="1.1rem" />
                </div>
                <div className="friend-button">
                    <Button text="发消息"
                        background="#3775F6"
                        color="#fff"
                        margin="2rem auto"
                        onClick={() => props.history.push('/sendmessage')} />
                    <Button text="打电话" background="#00FF00" color="#fff" margin=".5rem auto" />
                </div>
            </div>
            <div className="friend-footer"></div>
        </div>
    )
}

export default FriendInfo