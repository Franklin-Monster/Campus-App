import React from 'react'
import './css/message-action'
import { Modal } from 'antd-mobile'

// component
import ArrowMenu from '@c/arrow-menu'
import ReturnTitle from '@c/return-title'
import { List, Switch } from 'antd-mobile'

const MessageAction = props => {
    // 清空聊天记录
    const clearChat = () => {
        Modal.alert('注意', '您确定要清空聊天记录吗？', [
            { text: '取消', onPress: () => console.log('cancel'), style: { color: 'blue' } },
            { text: '清空', onPress: () => console.log('ok'), style: { color: 'red' } },
        ])
    }

    return (
        <div id="MessageAction">
            <div className="action-header">
                <ReturnTitle
                    arrowColor='black'
                    background="#f1f2f3"
                    color="#000"
                    text="聊天设置" />
            </div>
            <div className="action-body">
                <ArrowMenu text="查找聊天内容" margin=".2rem auto"
                    onClick={() => props.history.push('/searchchatcontent')} />
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
                <ArrowMenu text="清空聊天记录" margin=".2rem auto" onClick={clearChat} />
                <ArrowMenu text="投诉" margin=".2rem auto" />

            </div>
            <div className="action-footer"> </div>
        </div>
    )
}

export default MessageAction