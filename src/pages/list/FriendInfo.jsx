import React, { useMemo, useState } from 'react'
import './css/friend-info'

// image
import More from './img/more'

// component
import Button from '@c/button'
import { Modal } from 'antd-mobile'
import ArrowMenu from '@c/arrow-menu'
import ReturnTitle from '@c/return-title'

const FriendInfo = props => {
    const [friendName, setFriendName] = useState('')
    const [friendMessage, setFriendMessage] = useState('')
    const [friendAvator, setFriendAvator] = useState('')

    // 格式化地址栏参数
    useMemo(() => {
        const searchParams = props.location.search.split('&')
        searchParams.shift()
        const tempObj = {}
        searchParams.map(item => {
            const params = item.split('=')
            tempObj[params[0]] = params[1]
            return null
        })
        setFriendAvator(tempObj.avator)
        setFriendName(decodeURI(tempObj.name))
        setFriendMessage(decodeURI(tempObj.message))
    }, [props])

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
                    background="#f1f2f3"
                    text=""
                    rightImg={More}
                    rightImgClick={() => props.history.push('/friendaction')} />
            </div>
            <div className="friend-body">
                <div className="friend-base">
                    <div className="friend-avator">
                        <img src={friendAvator} alt="avator" />
                    </div>
                    <div className="friend-intro">
                        <div className="friend-name">
                            {friendName}
                        </div>
                        <div className="friend-number">
                            学号：1705080106
                    </div>
                    </div>
                </div>
                <div className="friend-info">
                    <ArrowMenu text="备注" height="2rem"
                        onClick={changeRemark} />
                    <ArrowMenu text="所属架构" height="2rem" />
                    <ArrowMenu text="个人空间" height="2rem" />
                </div>
                <div className="friend-button">
                    <Button text="发消息"
                        background="#3775F6"
                        color="#fff"
                        margin="2rem auto"
                        onClick={() => props.history.push(`/sendmessage/?&name=${friendName}&message=${friendMessage}&avator=${friendAvator}`)} />
                    <Button text="打电话"
                        background="#00FF00"
                        color="#fff"
                        margin=".5rem auto"
                        onClick={() => props.history.push('/audiochat')} />
                </div>
            </div>
            <div className="friend-footer"></div>
        </div>
    )
}

export default FriendInfo