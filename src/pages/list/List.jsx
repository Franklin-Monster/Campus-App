import React, { useRef } from 'react'
import { withRouter } from 'react-router-dom';
import { testFriendData } from '@/static/js/testData'
import './css/list'
// component
import SearchBar from '@c/search-bar'
import ArrowMenu from '@c/arrow-menu'
import DivideGroupItem from './childComp/divide-group-item'

// image
import Avator from './img/user'
import Arrow from './img/eee-arrow'

const List = () => {
    const addressBodyRef = useRef()
    const groupBodyRef = useRef()

    const groupTab = () => {
        addressBodyRef.current.style.transform = 'translateX(-100%)'
        groupBodyRef.current.style.width = '100%'
        addressBodyRef.current.style.width = '0'
    }
    const addressTab = () => {
        addressBodyRef.current.style.transform = 'translateX(0%)'
        groupBodyRef.current.style.width = '0'
        addressBodyRef.current.style.width = '100%'
    }

    return (
        <div id="List">
            <div className="list-header">
                <div className="header-searchBar">
                    <SearchBar placeholder="搜索"></SearchBar>
                </div>
                <div className="header-item">
                    <ArrowMenu frontImg={Avator} endImg={Arrow} text="新朋友"></ArrowMenu>
                    <ArrowMenu frontImg={Avator} endImg={Arrow} text="新朋友"></ArrowMenu>
                </div>
            </div>
            <div className="list-body">
                <div className="body-tab">
                    <div className="body-tab-item" onClick={addressTab}>通讯录</div>
                    <div className="body-tab-item" onClick={groupTab}>群聊</div>
                </div>
                <div className="body-content">
                    <div className="address-body" ref={addressBodyRef}>
                        <DivideGroupItem groupName="我的同学" groupMember={testFriendData} />
                        <DivideGroupItem groupName="我的老师" groupMember={testFriendData} />
                        <DivideGroupItem groupName="我的好友" groupMember={testFriendData} />
                    </div>
                    <div className="group-body" ref={groupBodyRef}>
                        <DivideGroupItem groupName="IT项目管理课程群" groupMember={testFriendData} />
                        <DivideGroupItem groupName="信息系统分析与设计课程群" groupMember={testFriendData} />
                        <DivideGroupItem groupName="数据结构与算法课程群" groupMember={testFriendData} />
                    </div>
                </div>
            </div>
            <div className="list-footer">

            </div>
        </div>
    )
}

export default withRouter(List)