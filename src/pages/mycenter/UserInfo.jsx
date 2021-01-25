import React from 'react'
import './css/user-info'

// component
import TextRow from '@c/text-row'
import ReturnTitle from '@c/return-title'

// image
import UserAvator from './img/user'

const UserInfo = () => {
    return (
        <div id="UserInfo">
            <div className="info-header">
                <ReturnTitle text="个人信息" />
                <div className="user-avator">
                    <img src={UserAvator} alt="avator" />
                </div>
            </div>
            <div className="info-body">
                <div className="user-info">
                    <TextRow frontText="姓名" lastText="Franklin" width="90%" />
                    <TextRow frontText="姓别" lastText="男" width="90%" />
                    <TextRow frontText="学校" lastText="天津城建大学" width="90%" />
                    <TextRow frontText="学院" lastText="经济与管理学院" width="90%" />
                    <TextRow frontText="专业" lastText="信息管理与信息系统" width="90%" />
                    <TextRow frontText="班级" lastText="1班" width="90%" />
                    <TextRow frontText="班主任" lastText="Mr Dong" width="90%" />
                    <TextRow frontText="辅导员" lastText="Ms Xv" width="90%" />
                </div>
            </div>

            <div className="info-footer">

            </div>
        </div>
    )
}

export default UserInfo