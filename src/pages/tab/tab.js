import React, { useState } from 'react'
import { Redirect, NavLink, withRouter } from 'react-router-dom'
import TabRoute from '../../logic/router/index'
import messageImg from '../../assets/images/message.png'
import cardImg from '../../assets/images/card.png'
import listImg from '../../assets/images/list.png'
import myCenterImg from '../../assets/images/mycenter.png'
import './tab.scss'
const Tab = (props) => {
    const [title, setTitle] = useState('消息')
    const messageClick = () => {
        setTitle('消息')
    }
    const cardClick = () => {
        setTitle('应用')
    }
    const myCenterClick = () => {
        setTitle('我的')
    }
    const listClick = () => {
        setTitle('通讯录')
    }
    const changeTab = (match) => {
        // if (!match) return
        // if (match.url === '/message') {
        //     console.log('/message');
        // }
        // if (match.url === '/card') {
        //     console.log('/card');
        // }
        // if (match.url === '/list') {
        //     console.log('/list');
        // }
        // if (match.url === '/mycenter') {
        //     console.log('/mycenter');
        // }
    }
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
            <div className="app-footer-tab-item" onClick={messageClick}>
                <NavLink to="/message" isActive={(match) => changeTab(match)} activeStyle={{ color: 'blue' }}>
                    {/* <img src={require("../../assets/images/message.png").default} alt="message" /> */}
                    <img src={messageImg} alt="message" />
                    <div className="app-footer-tab-item-text">消息</div>
                </NavLink>
            </div>
            <div className="app-footer-tab-item" onClick={listClick}>
                <NavLink to="/list" isActive={(match) => changeTab(match)}>
                    <img src={listImg} alt="list" />
                    <div className="app-footer-tab-item-text">通讯录</div>
                </NavLink>
            </div>
            <div className="app-footer-tab-item" onClick={cardClick}>
                <NavLink to="/card" isActive={(match) => changeTab(match)}>
                    <img src={cardImg} alt="card" />
                    <div className="app-footer-tab-item-text">应用</div>
                </NavLink>
            </div>
            <div className="app-footer-tab-item" onClick={myCenterClick}>
                <NavLink to="/mycenter" isActive={(match) => changeTab(match)}>
                    <img src={myCenterImg} alt="mycenter" />
                    <div className="app-footer-tab-item-text">我的</div>
                </NavLink>
            </div>
        </div>

    </div>
}
export default withRouter(Tab)