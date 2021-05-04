import React from 'react'
import './css/friend-action'

// component
import Button from '@c/button'
import { Modal } from 'antd-mobile'
import { List, Switch } from 'antd-mobile'
import ArrowMenu from '@c/arrow-menu'
import ReturnTitle from '@c/return-title'

const FriendAction = () => {
    // 更改备注
    const changeRemark = () => {
        Modal.prompt('备注', '',
            [
                { text: '取消' },
                { text: '确定', onPress: value => console.log(`输入的内容:${value}`) },
            ], 'default', 'Franklin')
    }

    return (
        <div id="FriendAction" >
            <div className="action-header">
                <ReturnTitle
                    arrowColor='black'
                    background="#f1f2f3"
                    color="#000"
                    text="朋友设置" />
            </div>
            <div className="action-body">
                <ArrowMenu text="备注" onClick={changeRemark} />
                <ArrowMenu text="朋友权限" margin=".5rem auto" />
                <List.Item
                    extra={<Switch
                        checked={null} // this.state.checked
                        onChange={() => {
                            // 更改状态逻辑
                        }}
                    />}
                >加入黑名单</List.Item>
                <ArrowMenu text="投诉" margin=".5rem auto" />
                <Button
                    text="删除好友"
                    color="red"
                    padding=".5rem 0"
                    margin="2rem auto"
                    needConfirm={true}
                    confirmText="确定要删除该朋友吗？"
                    successText="删除成功" />
            </div>
            <div className="action-footer">

            </div>
        </div>
    )
}

export default FriendAction