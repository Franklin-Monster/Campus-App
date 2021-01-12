import React, { useState, useEffect } from 'react'
import { Redirect, NavLink, withRouter } from 'react-router-dom'
import TabRoute from '../../logic/router/index'

// image
import messageImg from '../../assets/images/message'
import cardImg from '../../assets/images/card'
import listImg from '../../assets/images/list'
import myCenterImg from '../../assets/images/mycenter'
import { pathnameToTitle } from '../../static/js/changeTabTitle'
import './tab.scss'
const Tab = (props) => {
    const [title, setTitle] = useState('消息')
    let pathname = window.location.pathname
    // 监听路由更改title
    useEffect(() => {
        setTitle(pathnameToTitle(window.location.pathname))
    }, [pathname])

    return <div id="Tab">
        <div className="app-header">{title}</div>
        <div className="app-header-block"></div>
        <div className="route">
            {
                props.location.pathname === '/' && <Redirect push to="/message" />
            }
            <TabRoute></TabRoute>
        </div>
        <div className="app-footer-block"></div>
        <div className="app-footer-tab" >
            <div className="app-footer-tab-item">
                <NavLink to="/message" >
                    <img src={messageImg} alt="message" />
                    <div className="app-footer-tab-item-text">消息</div>
                </NavLink>
            </div>
            <div className="app-footer-tab-item">
                <NavLink to="/list">
                    <img src={listImg} alt="list" />
                    <div className="app-footer-tab-item-text">通讯录</div>
                </NavLink>
            </div>
            <div className="app-footer-tab-item">
                <NavLink to="/card" >
                    <img src={cardImg} alt="card" />
                    <div className="app-footer-tab-item-text">应用</div>
                </NavLink>
            </div>
            <div className="app-footer-tab-item">
                <NavLink to="/mycenter">
                    <img src={myCenterImg} alt="mycenter" />
                    <div className="app-footer-tab-item-text">我的</div>
                </NavLink>
            </div>
        </div>

    </div>
}
export default withRouter(Tab)