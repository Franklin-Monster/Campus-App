import React, { useEffect, useRef, useState } from 'react'
import { withRouter } from 'react-router-dom';
import { testFriendData } from '@/static/js/testData'
import './css/list'
import { getTeacherList, getStudentList } from '@api'

// component
import SearchBar from '@c/search-bar'
import ArrowMenu from '@c/arrow-menu'
import DivideGroupItem from './childComp/divide-group-item'

// image
import User from './img/user'
import Notice from './img/notice'
import Arrow from './img/eee-arrow'

const List = () => {
    const [teacherList, setTeacherList] = useState([])
    const [studentList, setStudentList] = useState([])
    const addressBodyRef = useRef()
    const groupBodyRef = useRef()

    // 获取师生列表
    useEffect(() => {
        getTeacherList().then(res => setTeacherList(res.data))
        getStudentList().then(res => setStudentList(res.data))
    }, [])


    // 切换tab
    const groupTab = () => {
        addressBodyRef.current.style.transform = 'translateX(-200%)'
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
                    <SearchBar placeholder="搜索好友"></SearchBar>
                </div>
                <div className="header-item">
                    <ArrowMenu
                        frontImg={User}
                        endImg={Arrow}
                        text="新的联系人"
                        fontSize=".8rem"
                        frontImgWidth="1rem"
                        frontImgHeight="1rem" />
                    <ArrowMenu
                        frontImg={Notice}
                        endImg={Arrow}
                        text="课程群通知"
                        fontSize=".8rem"
                        frontImgWidth="1rem"
                        frontImgHeight="1rem" />
                </div>
            </div>
            <div className="list-body">
                <div className="body-tab">
                    <div className="body-tab-item" onClick={addressTab}>通讯录</div>
                    <div className="body-tab-item" onClick={groupTab}>群聊</div>
                </div>
                <div className="body-content">
                    <div className="address-body" ref={addressBodyRef}>
                        <DivideGroupItem groupName="我的同学" groupMember={testFriendData.concat(studentList)} />
                        <DivideGroupItem groupName="我的教师" groupMember={teacherList} />
                        <DivideGroupItem groupName="我的好友" groupMember={testFriendData.concat(studentList)} />
                    </div>
                    <div className="group-body" ref={groupBodyRef}>
                        <DivideGroupItem groupName="IT项目管理课程群" groupMember={testFriendData} />
                        <DivideGroupItem groupName="信息系统分析与设计课程群" groupMember={testFriendData} />
                        <DivideGroupItem groupName="数据结构与算法课程群" groupMember={testFriendData} />
                    </div>
                </div>
            </div>
            <div className="list-tab-block"></div>
            <div className="list-footer"></div>
        </div>
    )
}

export default withRouter(List)