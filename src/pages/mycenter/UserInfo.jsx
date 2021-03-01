import React from 'react'
import './css/user-info'
import { userInfoItemArr } from './help'

// component
import TextRow from '@c/text-row'
import ReturnTitle from '@c/return-title'

// image
import Franklin from './img/Franklin'

const UserInfo = () => {
    return (
        <div id="UserInfo">
            <div className="info-header">
                <ReturnTitle text="个人信息" />
                <div className="user-avator">
                    <img src={Franklin} alt="avator" />
                </div>
            </div>
            <div className="info-body">
                <div className="user-info">
                    {
                        userInfoItemArr.map((item, index) => {
                            return (
                                <TextRow frontText={item.key} lastText={item.value} width="90%" key={index} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="info-footer"></div>
        </div>
    )
}

export default UserInfo