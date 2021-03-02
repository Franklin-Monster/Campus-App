import React from 'react'
import './css/add-friend'

// component
import ArrowMenu from '@c/arrow-menu'
import ReturnTitle from '@c/return-title'

// image
import Scan from './img/scan'
import CodeCard from './img/code-card'
import CreateGroup from './img/create-group'

const AddFriend = () => {
    return (
        <div id="AddFriend">
            <div className="add-header">
                <ReturnTitle text="添加朋友" />
            </div>
            <div className="add-body">
                <div className="input-search">
                    <input type="text" placeholder="学号/手机号" />
                </div>
                <div className="other-search">
                    <ArrowMenu frontImg={CreateGroup} text="面对面建群" />
                    <ArrowMenu frontImg={Scan} text="扫一扫添加朋友" />
                    <ArrowMenu frontImg={CodeCard} text="我的二维码名片" />
                </div>
            </div>
            <div className="add-footer">

            </div>
        </div>
    )
}

export default AddFriend