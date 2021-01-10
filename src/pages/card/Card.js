import React from 'react'
import './Card.scss'
// component
import CardItem from '../../components/card-item'
import SearchBar from '../../components/search-bar'
import PureNav from '../../components/pure-nav'

// image
import Money from './img/money'
import Scan from './img/scan'
import Wallet from './img/wallet'
import Love from './img/love'
import Active from './img/active'
import Class from './img/class'
import Edu from './img/edu'
import Friend from './img/friend'
import List from './img/list'
import Order from './img/order'
import Pay from './img/pay'
import Eat from './img/eat'
import LikeWall from './img/like-wall'
import PublicClass from './img/public-class'
import StrongStudy from './img/strong-study'
const Card = (props) => {
    return (
        <div id="Card">
            <div className="card-header">
                <SearchBar placeholder="搜索应用"></SearchBar>
                <div className="header-card">
                    <CardItem text="扫一扫" img={Scan} color="#fff" />
                    <CardItem text="付钱" img={Money} color="#fff" />
                    <CardItem text="卡包" img={Wallet} color="#fff" />
                </div>
            </div>
            <div className="card-body">
                {/* <PureNav text="生活" background="#fdf8f8" /> */}
                <div className="card-body-item-content">
                    <div className="item-title">生活</div>
                    <div className="item-card">
                        <CardItem text="充值中心" img={Pay} width="4rem" height="4rem" />
                        <CardItem text="用餐时间" img={Eat} width="4rem" height="4rem" />
                        <CardItem text="服务预约" img={Order} width="4rem" height="4rem" />
                        <CardItem text="账单查询" img={List} width="4rem" height="4rem" />
                    </div>

                </div>
                {/* <PureNav text="学习" background="#fdf8f8" /> */}
                <div className="card-body-item-content">
                    <div className="item-title">学习</div>
                    <div className="item-card">
                        <CardItem text="我的课程" img={Class} width="4rem" height="4rem" />
                        <CardItem text="校公开课" img={PublicClass} width="4rem" height="4rem" />
                        <CardItem text="教务功能" img={Edu} width="4rem" height="4rem" />
                        <CardItem text="学习强国" img={StrongStudy} width="4rem" height="4rem" />
                    </div>

                </div>
                {/* <PureNav text="娱乐" background="#fdf8f8" /> */}
                <div className="card-body-item-content">
                    <div className="item-title">娱乐</div>
                    <div className="item-card">
                        <CardItem text="我要交友" img={Love} width="4rem" height="4rem" />
                        <CardItem text="大学生圈" img={Friend} width="4rem" height="4rem" />
                        <CardItem text="休闲活动" img={Active} width="4rem" height="4rem" />
                        <CardItem text="表白墙" img={LikeWall} width="4rem" height="4rem" />
                    </div>
                </div>
            </div>
            <div className="card-footer">

            </div>

        </div>
    )
}

export default Card

