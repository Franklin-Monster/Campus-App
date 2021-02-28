import React from 'react'

// component
import './css/message'
import SearchBar from '@c/search-bar'

// img
import Franklin from './img/Franklin'

const Message = (props) => {
    return (
        <div id="Message">
            <div className="message-header">
                <SearchBar placeholder="搜索" />
            </div>
            <div className="message-body">
                <div className="message-box">
                    <div className="message-item"
                        onClick={() => props.history.push('/friendinfo')}>
                        <div className="message-avator">
                            <img src={Franklin} alt="avator" />
                        </div>
                        <div className="message-info">
                            <div className="message-name">
                                Franklin
                            </div>
                            <div className="message-content">
                                哈哈哈哈哈哈哈笑死我了！！！
                            </div>
                        </div>
                    </div>
                    <div className="message-item"
                        onClick={() => props.history.push('/friendinfo')}>
                        <div className="message-avator">
                            <img src={Franklin} alt="avator" />
                        </div>
                        <div className="message-info">
                            <div className="message-name">
                                Franklin
                            </div>
                            <div className="message-content">
                                哈哈哈哈哈
                            </div>
                        </div>
                    </div>
                    <div className="message-item"
                        onClick={() => props.history.push('/friendinfo')}>
                        <div className="message-avator">
                            <img src={Franklin} alt="avator" />
                        </div>
                        <div className="message-info">
                            <div className="message-name">
                                Franklin
                            </div>
                            <div className="message-content">
                                哈哈哈哈哈
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="message">

            </div>

        </div>
    )
}

export default Message