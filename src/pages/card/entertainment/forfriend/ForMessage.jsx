import React from 'react'
import '../css/for-message'
import { messageList } from '../help'

// component
import ForTab from './ForTab'
import ReturnTitle from '@c/return-title'

// image
import Sort from '../img/sort'

const ForMessage = props => {
    return (
        <div id="ForMessage">
            <div className='message-header'>
                <ReturnTitle text='休闲交友' />
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
                                        <img src={item.avator} alt="avator"
                                            onClick={() => props.history.push('/friendinfo')} />
                                    </div>
                                    <div className="message-info"
                                        onClick={() => props.history.push({
                                            pathname: '/forsendmessage',
                                            query: {
                                                name: item.name,
                                                avator: item.avator,
                                                content: item.content
                                            }
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