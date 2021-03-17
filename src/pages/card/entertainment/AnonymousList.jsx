import React from 'react'
import './css/anonymous-list'

// component
import SearchBar from '@c/search-bar'
import ReturnTitle from '@c/return-title'

// image
import Like from './img/like'
import Relay from './img/relay'
import Comment from './img/comment'

const AnonymousList = props => {
    return (
        <div id="AnonymousList">
            <div className="anony-header">
                <ReturnTitle text="校言" />
                <div className="header-search">
                    <SearchBar placeholder="请输入关键字查找" />
                </div>
            </div>
            <div className="anony-body">
                <div className="post-content">
                    <div className="post-item" onClick={() => props.history.push('/anonymousitem')}>
                        <div className="item-name">
                            Franklin
                        </div>
                        <div className="item-content">
                            给对方噶水电费规划水电费规划水
                            电费规划水电费规划水电费规划水电费
                            规划水电费规划水电费规划水电费规划
                            水电费规划水电费规划
                        </div>
                        <div className="item-operate">
                            <div className="operate-box"><img src={Relay} alt="relay" />12</div>
                            <div className="operate-box"><img src={Comment} alt="comment" />32</div>
                            <div className="operate-box"><img src={Like} alt="like" />543</div>
                        </div>
                    </div>
                    <div className="post-item">
                        <div className="item-name">
                            Franklin
                        </div>
                        <div className="item-content">
                            给对方噶水电费规划
                        </div>
                        <div className="item-operate">
                            <div className="operate-box"><img src={Relay} alt="relay" />12</div>
                            <div className="operate-box"><img src={Comment} alt="comment" />32</div>
                            <div className="operate-box"><img src={Like} alt="like" />543</div>
                        </div>
                    </div>
                    <div className="post-item">
                        <div className="item-name">
                            Franklin
                        </div>
                        <div className="item-content">
                            给对方噶水电费规划
                        </div>
                        <div className="item-operate">
                            <div className="operate-box"><img src={Relay} alt="relay" />12</div>
                            <div className="operate-box"><img src={Comment} alt="comment" />32</div>
                            <div className="operate-box"><img src={Like} alt="like" />543</div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="anony-footer">

            </div>
        </div>
    )
}

export default AnonymousList
