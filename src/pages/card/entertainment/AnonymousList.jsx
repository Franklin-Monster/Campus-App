import React, { useEffect, useState } from 'react'
import './css/anonymous-list'
import { getInvitationList } from '@api'

// component
import AnonyTab from './AnonyTab'
import SearchBar from '@c/search-bar'
import ReturnTitle from '@c/return-title'

// image
import Add from './img/add'
import Like from './img/like'
import Relay from './img/relay'
import Comment from './img/comment'

const AnonymousList = props => {
    const [invitationList, setInvitationList] = useState([])

    // 获取帖子列表
    useEffect(() => {
        getInvitationList().then(res => setInvitationList(res.data))
    }, [])

    return (
        <div id="AnonymousList">
            <div className="anony-header">
                <ReturnTitle text="校言" rightImg={Add} />
                <div className="header-search">
                    <SearchBar placeholder="请输入关键字查找" />
                </div>
            </div>
            <div className="anony-body">
                <div className="post-content">
                    {
                        invitationList.map(item => {
                            return (
                                <div className="post-item"
                                    key={item.content}
                                    onClick={() => props.history.push(`/anonymousitem?&name=${item.master_name}&content=${item.content}&forward=${item.forward}&comment=${item.comment}&like=${item.like}`)}>
                                    <div className="item-name">
                                        {item.name}
                                    </div>
                                    <div className="item-content">
                                        {item.content}
                                    </div>
                                    <div className="item-operate">
                                        <div className="operate-box"><img src={Relay} alt="relay" />
                                            {item.forward}
                                        </div>
                                        <div className="operate-box"><img src={Comment} alt="comment" />
                                            {item.comment}
                                        </div>
                                        <div className="operate-box"><img src={Like} alt="like" />
                                            {item.like}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="anony-footer-block"></div>
            <div className="anony-footer"><AnonyTab /></div>
        </div>
    )
}

export default AnonymousList
