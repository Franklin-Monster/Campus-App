import React, { useEffect, useState } from 'react'
import '../css/for-message'
import { getFriendMessage } from '@api'

// component
import ForTab from './ForTab'
import ReturnTitle from '@c/return-title'

// image
import Sort from '../img/sort'

const ForMessage = props => {
    const [messageList, setMessageList] = useState([])

    // 获取好友消息列表
    useEffect(() => {
        getFriendMessage().then(res => setMessageList(res.data))
    }, [])

    return (
        <div id="ForMessage">
            <div className='message-header'>
                <ReturnTitle text='休闲交友' returnClick={() => props.history.push('/card')} />
                <div className="header-title">
                    <div>消息</div>
                    <div><img src={Sort} alt="sort" /></div>
                </div>
            </div>
            <div className="header-block"></div>
            <div className='message-body'>
                <div className="message-box">
                    {
                        messageList.map(item => {
                            return (
                                <div className="message-item" key={item.content}>
                                    <div className="message-avator">
                                        <img src={require(`../img/p${item.message_id}`).default} alt="avator"
                                            onClick={() => props.history.push('/friendinfo')} />
                                    </div>
                                    <div className="message-info"
                                        onClick={() => props.history.push({
                                            pathname: `/forsendmessage/?&name=${item.name}&id=${item.message_id}&message=${item.content}`,
                                            // query: {
                                            //     name: item.name,
                                            //     avator: item.message_id,
                                            //     content: item.content
                                            // }
                                        })}>
                                        <div className="message-name">
                                            {item.name}
                                        </div>
                                        <div className="message-content">
                                            {item.content}
                                        </div>
                                    </div>
                                    <div className="message-time">
                                        {item.time}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="footer-block"></div>
            <div className='message-footer'>
                <ForTab goForFriend={() => props.history.push('/forfriend')}
                    goForMessage={() => props.history.push('/formessage')}
                    goForMine={() => props.history.push('/formine')} />
            </div>
        </div>
    )
}

export default ForMessage