import React, { useRef } from 'react'
import { withRouter } from 'react-router-dom';
import { testFriendData } from '@/static/js/testData'
import './list.scss'
// component
import SearchBar from '@c/search-bar'
import ArrowMenu from '@c/arrow-menu'
import DivideGroupItem from './childComp/divide-group-item'

// image
import Avator from './img/user'
import Arrow from './img/eee-arrow'

const List = (props) => {
    const addressBodyRef = useRef()
    const groupBodyRef = useRef()
    
    const groupTab = () => {
        addressBodyRef.current.style.transform = 'translateX(-120%)'
        addressBodyRef.current.style.width = '0'
        groupBodyRef.current.style.width = '100%'
    }
    const addressTab = () => {
        addressBodyRef.current.style.transform = 'translateX(0%)'
        addressBodyRef.current.style.width = '100%'
        groupBodyRef.current.style.width = '0'
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
                        <DivideGroupItem groupName="我的班级" groupMember={testFriendData} />
                        <DivideGroupItem groupName="我的专业" groupMember={testFriendData} />
                        <DivideGroupItem groupName="我的老师" groupMember={testFriendData} />
                    </div>
                    <div className="group-body" ref={groupBodyRef}>
                        <DivideGroupItem groupName="学习群" groupMember={testFriendData} />
                        <DivideGroupItem groupName="好友群" groupMember={testFriendData} />
                        <DivideGroupItem groupName="寝室群" groupMember={testFriendData} />
                    </div>
                </div>
            </div>
            <div className="list-footer">

            </div>
        </div>
    )
}

export default withRouter(List)