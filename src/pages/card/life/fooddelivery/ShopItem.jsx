import React, { useState, useRef, useMemo } from 'react'
import '../css/shop-item'
import { shopItemFood, foodDeliverySwiperArr } from '../help'

// component
import Message from '@c/message'
import AutoSwiper from '@c/auto-swiper'
import ReturnTitle from '@c/return-title'

// image
import Cut from '../img/cut'
import Add from '../img/add'
import Star from '../img/star'
import Clear from '../img/clear'
import Shop1 from '../img/shop1'
import Search from '../img/search'
import Delivery from '../img/delivery'

const ShopItem = props => {
    const [paramsObj, setParamsObj] = useState({})
    const [foodArr, setFoodArr] = useState(shopItemFood)
    const [activeArr, setActiveArr] = useState([])
    const [startMoney, setStartMoney] = useState(0)
    const [deliveryMoney, setDeliveryMoney] = useState(0)
    const [totalMoney, setTotalMoney] = useState(0)
    const [totalCount, setTotalCount] = useState(0)
    const [shoppingCar, setShoppingCar] = useState([])
    const foodContentRef = useRef()
    const shopFooterRef = useRef()
    const shoppingCarRef = useRef()

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

    // 增加商品数量
    const addFoodCount = (food, index) => {
        const tempFoodArr = foodArr.slice()
        foodArr[index].selectCount++
        setFoodArr(tempFoodArr)
        setTotalMoney(totalMoney + parseInt(food.price))
        setTotalCount(totalCount + 1)
        const tempFoodObj = {
            avator: food.avator,
            price: food.price,
            name: food.name,
            selectCount: foodArr[index].selectCount
        }
        const tempShoppingCar = shoppingCar
        tempShoppingCar[index] = tempFoodObj
        setShoppingCar(tempShoppingCar)
    }

    // 减少商品数量
    const reduceFoodCount = (food, index) => {
        const tempFoodArr = foodArr.slice()
        foodArr[index].selectCount !== 0
            ? foodArr[index].selectCount-- : foodArr[index].selectCount = 0
        setFoodArr(tempFoodArr)
        setTotalMoney(totalMoney - parseInt(food.price))
        setTotalCount(totalCount !== 0 ? totalCount - 1 : totalCount)
        const tempShoppingCar = shoppingCar
        if (tempShoppingCar[index].selectCount > 1) {
            tempShoppingCar[index].selectCount--
        } else {
            tempShoppingCar.splice(index, 1)
            hideShoppingCar()
        }
        setShoppingCar(tempShoppingCar)
    }

    // 显示购物车
    const showShoppingCar = () => {
        const length = shoppingCar.filter(item => item).length
        shopFooterRef.current.style.height = `${length * 4.5 + 6.2}rem`
        shoppingCarRef.current.style.height = `${length * 4.5 + 3}rem`
    }

    // 隐藏购物车
    const hideShoppingCar = () => {
        shopFooterRef.current.style.height = '3.2rem'
        shoppingCarRef.current.style.height = '0'
    }

    // 清空购物车
    const clearShoppingCar = () => {
        Message({
            type: 'success',
            text: '已清空购物车'
        })
        setTotalMoney(0)
        setTotalCount(0)
        setFoodArr(shopItemFood)
        setShoppingCar([])
        hideShoppingCar()
        console.log(foodArr)
    }

    return (
        <div id="ShopItem">
            <div className="shop-header" onClick={hideShoppingCar}>
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
            <div className="shop-body" onClick={hideShoppingCar}>
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
                                foodArr.map((item, index) => {
                                    let classify = null
                                    if ((foodArr[index + 1]
                                        && item.classify !== foodArr[index + 1].classify)
                                        || index === 0) {
                                        classify = foodArr[index + 1].classify
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
                                                    <div className="food-item-name">
                                                        {item.name}
                                                    </div>
                                                    <div className="food-item-info">
                                                        {item.info}
                                                    </div>
                                                    <div className="food-item-count">
                                                        月售{item.count}
                                                    </div>
                                                    <div className="food-item-select">
                                                        <span className="food-item-price">
                                                            ￥{item.price}
                                                        </span>
                                                        <span className="food-item-add">
                                                            {
                                                                item.selectCount !== 0 && <img
                                                                    src={Cut}
                                                                    alt="cut"
                                                                    onClick={() => reduceFoodCount(item, index)}
                                                                />
                                                            }
                                                            {
                                                                item.selectCount !== 0 && <span>
                                                                    {item.selectCount}
                                                                </span>
                                                            }
                                                            <img
                                                                src={Add}
                                                                alt="add"
                                                                onClick={() => addFoodCount(item, index)} />
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
            <div className="shop-footer" ref={shopFooterRef}>
                <div className="shop-footer-shopping-car-content" ref={shoppingCarRef}>
                    <div className="car-title">
                        <span>已选商品</span>
                        <span className="car-clear" onClick={clearShoppingCar}>
                            <img src={Clear} alt="clear" />清空
                            </span>
                    </div>
                    {
                        shoppingCar.map((item, index) => {
                            return (
                                <div className="car-item" key={item.avator}>
                                    <div className="car-item-left">
                                        <img src={item.avator} alt="food" />
                                    </div>
                                    <div className="car-item-right">
                                        <div className="car-item-name">{item.name}</div>
                                        <div className="car-item-info">
                                            <span className="car-item-price">￥{item.price}</span>
                                            <span className="car-item-add">
                                                <img
                                                    src={Cut}
                                                    alt="cut"
                                                    onClick={() => reduceFoodCount(item, index)} />
                                                <span>{item.selectCount}</span>
                                                <img
                                                    src={Add}
                                                    alt="add"
                                                    onClick={() => addFoodCount(item, index)} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="shop-footer-compute-content">
                    <div className="compute-left">
                        <div className="shopping-car">
                            {
                                totalCount !== 0 && <div className="shopping-car-count">
                                    {totalCount}
                                </div>
                            }
                            <img src={Delivery} alt="deli" onClick={showShoppingCar} />
                        </div>
                        <div>
                            <div className="total-money">
                                {
                                    totalMoney === 0 ? '未选购商品' : `￥${totalMoney}`
                                }
                            </div>
                            <div className="delivery-money">
                                另需配送费￥{deliveryMoney}
                            </div>
                        </div>
                    </div>
                    <div className="compute-right">
                        <div className="compute-button">
                            {
                                totalMoney > startMoney
                                    ? <span onClick={() => {
                                        props.history.push({
                                            pathname: `/balanceshoppingcar`,
                                            query: {
                                                shoppingCar,
                                                paramsObj,
                                                totalMoney
                                            }
                                        })
                                    }}>去结算</span> : `差￥${startMoney - totalMoney} 起送`
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopItem