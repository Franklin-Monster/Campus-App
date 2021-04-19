import React, { useState } from 'react'
import { classGroupMessage } from './help'
import { messageList } from '@/pages/card/entertainment/help'
import { getMessage } from '@/logic/net/api'

// component
import './css/message'
import SearchBar from '@c/search-bar'

// image
import Group from './img/group'
const Message = props => {
    //     const [classGroupMessage, setClassGroupClass] = useState([])
    //     getMessage().then(res => setClassGroupClass(res.data))
    return (
        <div id="Message">
            <div className="message-header">
                <SearchBar placeholder="搜索消息" />
            </div>
            <div className="message-body">
                <div className="message-box">
                    {
                        classGroupMessage.map(item => {
                            return (
                                <div className="message-item" key={item.name}>
                                    <div className="message-avator">
                                        <img src={Group} alt="avator" />
                                    </div>
                                    <div className="message-info"
                                        onClick={() => props.history.push(`/sendmessage/?&name=${item.name}&message=${item.content}&avator=${item.avator}&teacher=${item.teacher}`)}>
                                        <div className="message-name">{item.name}</div>
                                        <div className="message-content">{item.content}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {
                        messageList.map(item => {
                            return (
                                <div className="message-item" key={item.avator}>
                                    <div className="message-avator">
                                        <img src={item.avator} alt="avator"
                                            onClick={() => props.history.push(`/friendinfo/?&name=${item.name}&message=${item.content}&avator=${item.avator}`)} />
                                    </div>
                                    <div className="message-info"
                                        onClick={() => props.history.push(`/sendmessage/?&name=${item.name}&message=${item.content}&avator=${item.avator}`)}>
                                        <div className="message-name">{item.name}</div>
                                        <div className="message-content">{item.content}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="message-footer"></div>
        </div>
    )
}

export default Message