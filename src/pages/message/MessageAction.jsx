import React from 'react'
import './css/message-action'

// component
import ArrowMenu from '@c/arrow-menu'
import ReturnTitle from '@c/return-title'
import { List, Switch } from 'antd-mobile'

const MessageAction = () => {
    return (
        <div id="MessageAction">
            <div className="action-header">
                <ReturnTitle
                    arrowColor='black'
                    background="#FAFAFA"
                    color="#000"
                    text="聊天设置" />
            </div>
            <div className="action-body">
                <ArrowMenu text="查找聊天内容" margin=".2rem auto"/>
                <List.Item
                    extra={<Switch
                        checked={null} // this.state.checked
                        onChange={() => {
                            // 更改状态逻辑
                        }}
                    />}
                >消息免打扰</List.Item>
                <List.Item
                    extra={<Switch
                        checked={null} // this.state.checked
                        onChange={() => {
                            // 更改状态逻辑
                        }}
                    />}
                >置顶聊天</List.Item>
                 <ArrowMenu text="清空聊天记录" margin=".2rem auto"/>
                 <ArrowMenu text="投诉" margin=".2rem auto" />

            </div>
            <div className="action-footer"> </div>
        </div>
    )
}

export default MessageAction