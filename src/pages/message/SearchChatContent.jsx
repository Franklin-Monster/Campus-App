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
            </div>
            <div className="search-footer">

            </div>
        </div>
    )
}

export default SearchChatContent