import React, { useState, useRef, useMemo } from 'react'
import '../css/shop-item'
import { shopItemFood } from '../help'
import { foodDeliverySwiperArr } from '../help'

// component
import SearchBar from '@c/search-bar'
import AutoSwiper from '@c/auto-swiper'
import ReturnTitle from '@c/return-title'

// image
import Add from '../img/add'
import Star from '../img/star'
import Shop1 from '../img/shop1'
import Search from '../img/search'
import Delivery from '../img/delivery'

const ShopItem = props => {
    const [paramsObj, setParamsObj] = useState({})
    const [activeArr, setActiveArr] = useState([])
    const [startMoney, setStartMoney] = useState(0)
    const [totalMoney, setTotalMoney] = useState(0)
    const [deliveryMoney, setDeliveryMoney] = useState(0)
    const foodContentRef = useRef()

    // 格式化地址栏参数
    useMemo(() => {
        const searchParams = props.location.search.split('&')
        searchParams.shift()
        const tempObj = {}
        searchParams.map(item => {
            const params = item.split('=')
            tempObj[params[0]] = params[1]
            return null
        })
        setStartMoney(tempObj.start)
        setDeliveryMoney(tempObj.delivery)
        setActiveArr(tempObj.active.split(','))
        setParamsObj(tempObj)
    }, [props])

    // 点击分类标签滚动到指定位置
    const classifyTagClick = e => {
        const clickValue = e.target.innerText
        const child = foodContentRef.current.children
        for (let v in child) {
            if (child[v].firstChild && child[v].firstChild.innerText === clickValue) {
                const top = child[v].firstChild.getBoundingClientRect().top
                const height = child[v].firstChild.getBoundingClientRect().height
                const targetTop = top - 2 * height
                window.scrollTo({
                    top: targetTop,
                    behavior: "smooth"
                })
            }
        }
    }

    return (
        <div id="ShopItem">
            <div className="shop-header">
                <div className="header-title">
                    <ReturnTitle text="食堂外送" rightImg={Search} />
                </div>
                <div className="title-block"></div>
                <div className="shop-info">
                    <div className="shop-info-left">
                        <div className="shop-name">{decodeURI(paramsObj.name)}</div>
                        <div className="shop-delivery">
                            <span className="shop-star">
                                <img src={Star} alt="star" />{paramsObj.star}
                            </span>
                            <span>月售{paramsObj.count}单</span>
                            <span>配送约{paramsObj.time}分钟</span>
                        </div>
                        <div className="shop-active">
                            {activeArr.map(item => <span key={item}>{decodeURI(item)}</span>)}
                        </div>
                    </div>
                    <div className="shop-info-right">
                        <img src={Shop1} alt="logo" />
                    </div>
                </div>
                <div className="header-swiper">
                    <AutoSwiper imgArr={foodDeliverySwiperArr} />
                </div>
            </div>
            <div className="shop-body">
                <div className="food-select-content">
                    <div className="food-select-left">
                        <div className="food-classify-content">
                            {
                                shopItemFood.map((item, index) => {
                                    // 判断分类标签
                                    if ((shopItemFood[index + 1]
                                        && item.classify !== shopItemFood[index + 1].classify)
                                        || index === 0) {
                                        return (
                                            <div className="food-classify-item"
                                                key={item.avator}
                                                onClick={classifyTagClick}>
                                                {shopItemFood[index + 1].classify}
                                            </div>
                                        )
                                    }
                                    return null
                                })
                            }
                        </div>
                    </div>
                    <div className="food-select-right">
                        <div className="food-content" ref={foodContentRef}>
                            {
                                shopItemFood.map((item, index) => {
                                    let classify = null
                                    if ((shopItemFood[index + 1]
                                        && item.classify !== shopItemFood[index + 1].classify)
                                        || index === 0) {
                                        classify = shopItemFood[index + 1].classify
                                    }
                                    return (
                                        <div key={item.avator}>
                                            <div className="food-item-title">
                                                {classify}
                                            </div>
                                            <div className="food-item">
                                                <div className="food-item-left">
                                                    <img src={item.avator} alt="food" />
                                                </div>
                                                <div className="food-item-right">
                                                    <div className="food-item-name">{item.name}</div>
                                                    <div className="food-item-info">{item.info}</div>
                                                    <div className="food-item-count">月售{item.count}</div>
                                                    <div className="food-item-select">
                                                        <span className="food-item-price">
                                                            ￥{item.price}
                                                        </span>
                                                        <span className="food-item-add">
                                                            <img src={Add} alt="add" />
                                                        </span>
                                                    </div>
                                                    <div className="food-item-discount">
                                                        {item.discount}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="shop-footer-block"></div>
            <div className="shop-footer">
                <div className="shop-footer-compute-content">
                    <div className="compute-left">
                        <img src={Delivery} alt="deli" />
                        <div>
                            <div className="total-money">
                                {
                                    totalMoney === 0 ? `￥${totalMoney}` : '未选购商品'
                                }
                            </div>
                            <div className="delivery-money">
                                另需配送费￥{deliveryMoney}
                            </div>
                        </div>
                    </div>
                    <div className="compute-right">
                        <div className="compute-button">￥{startMoney}起送</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopItem