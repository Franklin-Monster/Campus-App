import React, { useState, useEffect } from 'react'
import { Redirect, NavLink, withRouter } from 'react-router-dom'
import TabRoute from '../../logic/router/index'
import { pathnameToTitle } from '../../static/js/fun'
import './tab.scss'


// image
import messageImg from '../../assets/images/message'
import cardImg from '../../assets/images/card'
import listImg from '../../assets/images/list'
import myCenterImg from '../../assets/images/mycenter'

const Tab = (props) => {
    const [title, setTitle] = useState('消息')
    const [showTab, setShowTab] = useState(true)
    const pathname = window.location.pathname

    // 监听路由
    useEffect(() => {
        setTitle(pathnameToTitle(pathname))
        if (!pathnameToTitle(pathname)) {
            setShowTab(false)
        } else setShowTab(true)
    }, [pathname])

    return <div id="Tab">
        <div className="app-header" style={{ display: showTab ? 'block' : 'none' }}>{title}</div>
        <div className="app-header-block" style={{ display: showTab ? 'block' : 'none' }}></div>
        <div className="route">
            {
                props.location.pathname === '/' && <Redirect push to="/message" />
            }
            <TabRoute></TabRoute>
        </div>
        <div className="app-footer-block" style={{ display: showTab ? 'block' : 'none' }}></div>
        <div className="app-footer-tab" style={{ display: showTab ? 'flex' : 'none' }}>
            <div className="app-footer-tab-item">
                <NavLink to="/message"
                    activeStyle={{
                        color: "#3775F6",
                    }}
                >
                    <img src={messageImg} alt="message" />
                    <div className="app-footer-tab-item-text">消息</div>
                </NavLink>
            </div>
            <div className="app-footer-tab-item">
                <NavLink to="/list"
                    activeStyle={{
                        color: "#3775F6",
                    }}>
                    <img src={listImg} alt="list" />
                    <div className="app-footer-tab-item-text">通讯录</div>
                </NavLink>
            </div>
            <div className="app-footer-tab-item">
                <NavLink to="/card"
                    activeStyle={{
                        color: "#3775F6",
                    }} >
                    <img src={cardImg} alt="card" />
                    <div className="app-footer-tab-item-text">应用</div>
                </NavLink>
            </div>
            <div className="app-footer-tab-item">
                <NavLink to="/mycenter"
                    activeStyle={{
                        color: "#3775F6",
                    }}>
                    <img src={myCenterImg} alt="mycenter" />
                    <div className="app-footer-tab-item-text">我的</div>
                </NavLink>
            </div>
        </div>
    </div>
}
export default withRouter(Tab)