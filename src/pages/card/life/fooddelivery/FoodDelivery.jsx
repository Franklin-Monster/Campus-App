import React, { useState } from 'react'
import '../css/food-delivery'
import { foodDeliveryClassify, foodDeliverySwiperArr, foodDeliveryShop } from '../help'

// component
import SearchBar from '@c/search-bar'
import AutoSwiper from '@c/auto-swiper'
import ReturnTitle from '@c/return-title'

// image
import Star from '../img/star'
import Home from '../img/home'
import Order from '../img/order'
import MyCenter from '../img/mycenter'

const FoodDelivery = props => {
    const [shopArr, setShopArr] = useState(foodDeliveryShop)

    // 首页选择框下拉
    const selectPullDown = e => {
        e.stopPropagation()
        const target = e.target.parentNode.parentNode
        if (target.className === 'delivery-select-item' && target.style.height !== '10rem') {
            target.style.height = '10rem'
        }
        else if (target.className === 'delivery-select-item' && target.style.height === '10rem') {
            target.style.height = '2.4rem'
        }
    }

    // 选择框上滑
    const pullItemClick = e => {
        e.target.parentNode.parentNode.style.height = '2.4rem'
    }

    return (
        <div id="FoodDelivery">
            <div className="delivery-header">
                <ReturnTitle text="食堂外送" returnClick={() => props.history.push('/card')} />
                <SearchBar placeholder="搜搜你爱吃的家乡菜" />
            </div>
            <div className="header-block"></div>
            <div className="delivery-body">
                <div className="classify-content">
                    {
                        foodDeliveryClassify.map(item => {
                            return (
                                <div className="classify-item" key={item.text}>
                                    <div className="classify-item-img">
                                        <img src={item.image} alt="img" />
                                    </div>
                                    <div className="classify-item-text">
                                        {item.text}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="delivery-swiper-content">
                    <AutoSwiper imgArr={foodDeliverySwiperArr} />
                </div>
                <div className="delivery-select-content">
                    <div className="delivery-select-item">
                        <div className="delivery-select-item-title" onClick={selectPullDown}>
                            <span>综合排序</span>
                            <span className="delivery-select-tria"></span>
                        </div>
                        <div className="delivery-select-item-pull" onClick={pullItemClick}>
                            <div className="delivery-select-item-pull-item" onClick={() => {
                                const newShopArr = shopArr.slice()
                                newShopArr.sort((a, b) => b.count - a.count)
                                setShopArr(newShopArr)
                            }}>销量优先</div>
                            <div className="delivery-select-item-pull-item" onClick={() => {
                                const newShopArr = shopArr.slice()
                                newShopArr.sort((a, b) => b.star - a.star)
                                setShopArr(newShopArr)
                            }}>评分优先</div>
                            <div className="delivery-select-item-pull-item" onClick={() => {
                                const newShopArr = shopArr.slice()
                                newShopArr.sort((a, b) => a.avager - b.avager)
                                setShopArr(newShopArr)
                            }}>人均低到高</div>
                            <div className="delivery-select-item-pull-item" onClick={() => {
                                const newShopArr = shopArr.slice()
                                newShopArr.sort((a, b) => b.avager - a.avager)
                                setShopArr(newShopArr)
                            }}>人均高到低</div>
                        </div>
                    </div>
                    <div className="delivery-select-item">
                        <div className="delivery-select-item-title" onClick={selectPullDown}>
                            <span>品类</span>
                            <span className="delivery-select-tria"></span>
                        </div>
                        <div className="delivery-select-item-pull" onClick={pullItemClick}>
                            <div className="delivery-select-item-pull-item">美食</div>
                            <div className="delivery-select-item-pull-item">水果</div>
                            <div className="delivery-select-item-pull-item">蔬菜</div>
                            <div className="delivery-select-item-pull-item">饮品</div>
                        </div>
                    </div>
                    <div className="delivery-select-item">
                        <div className="delivery-select-item-title" onClick={selectPullDown}>
                            <span>食堂</span>
                            <span className="delivery-select-tria"></span>
                        </div>
                        <div className="delivery-select-item-pull" onClick={pullItemClick}>
                            <div className="delivery-select-item-pull-item" onClick={() => {
                                setShopArr(foodDeliveryShop.filter(item => item.place[0] === '一'))
                            }}>城建一食堂</div>
                            <div className="delivery-select-item-pull-item" onClick={() => {
                                setShopArr(foodDeliveryShop.filter(item => item.place[0] === '二'))
                            }}>城建二食堂</div>
                            <div className="delivery-select-item-pull-item">煦园酒店</div>
                        </div>
                    </div>
                    <div className="delivery-select-item">
                        <div className="delivery-select-item-title" onClick={selectPullDown}>
                            <span>全部筛选</span>
                            <span className="delivery-select-tria"></span>
                        </div>
                        <div className="delivery-select-item-pull" onClick={pullItemClick}>
                            <div className="delivery-select-item-pull-item">销量优先</div>
                            <div className="delivery-select-item-pull-item">距离优先</div>
                            <div className="delivery-select-item-pull-item">速度优先</div>
                        </div>
                    </div>
                </div>
                <div className="delivery-shop-content">
                    {
                        shopArr.map(item => {
                            const path = `/shopitem/?&name=${item.name}&star=${item.star}&count=${item.count}&time=${item.time}&place=${item.place}&start=${item.start}&delivery=${item.delivery}&active=${item.active}`
                            return (
                                <div className="delivery-shop-content-item"
                                    key={item.logo}
                                    // onClick={() => props.history.push(path)}
                                    onClick={() => window.location.href = path}
                                >
                                    <div className="delivery-shop-content-item-left">
                                        <img src={item.logo} alt="logo" />
                                    </div>
                                    <div className="delivery-shop-content-item-right">
                                        <div className="shop-name">
                                            {item.name}
                                        </div>
                                        <div className="shop-sell">
                                            <span>
                                                <span className="shop-sell-grade">
                                                    <img src={Star} alt="star" />{item.star}
                                                </span>
                                                <span className="shop-sell-count">
                                                    月售{item.count}单
                                                </span>
                                            </span>
                                            <span className="shop-sell-time">
                                                <span>{item.time}分钟</span>
                                                <span>{item.place}</span>
                                            </span>
                                        </div>
                                        <div className="shop-delivery">
                                            <span>
                                                起送 ￥{item.start}
                                            </span>
                                            <span>
                                                {item.delivery === 0
                                                    ? '免配送费' : `配送￥${item.delivery}`}
                                            </span>
                                            <span>
                                                人均 ￥{item.avager}
                                            </span>
                                        </div>
                                        <div className="shop-active">
                                            {item.active.map(active => {
                                                return (
                                                    <span key={active}>{active}</span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="delivery-footer-block"></div>
            <div className="delivery-footer">
                <div className="footer-tab-content">
                    <div className="footer-tab-item">
                        <img src={Home} alt="home" />
                        <div className="tab-item-text">首页</div>
                    </div>
                    <div className="footer-tab-item">
                        <img src={Order} alt="order" />
                        <div className="tab-item-text">订单</div>
                    </div>
                    <div className="footer-tab-item">
                        <img src={MyCenter} alt="mycenter" />
                        <div className="tab-item-text">我的</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodDelivery

