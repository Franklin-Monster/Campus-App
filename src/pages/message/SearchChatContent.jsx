import React from 'react'
import './css/search-chat-content'

// component
import SearchBar from '@c/search-bar'
import ReturnTitle from '@c/return-title'

const SearchChatContent = () => {
    return (
        <div id="SearchChatContent">
            <div className="search-header">
                <ReturnTitle text="查找聊天内容" />
            </div>
            <div className="search-body">
                <div className="search-bar-content">
                    <SearchBar placeholder="查找聊天内容" />
                </div>
                <div className="search-nav-content">
                    <div className="search-nav-title">
                        快速搜索聊天内容
                    </div>
                    <div className="search-nav-item">
                            <span>群成员</span>
                            <span>日期</span>
                            <span>图片或视频</span>
                            <span>文件</span>
                            <span>链接</span>
                            <span>课程</span>
                    </div>
                </div>
            </div>
            <div className="search-footer">

            </div>
        </div>
    )
}

export default SearchChatContent