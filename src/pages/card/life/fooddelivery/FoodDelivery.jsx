import React from 'react'
import '../css/food-delivery'
import { foodDeliveryClassify, foodDeliverySwiperArr } from '../help'

// component
import SearchBar from '@c/search-bar'
import AutoSwiper from '@c/auto-swiper'
import ReturnTitle from '@c/return-title'

// image
import Shop1 from '../img/shop1'
import Star from '../img/star'


const FoodDelivery = () => {
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

    return (
        <div id="FoodDelivery">
            <div className="delivery-header">
                <ReturnTitle text="食堂外送" />
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
                        <div className="delivery-select-item-pull">
                            <div className="delivery-select-item-pull-item">销量优先</div>
                            <div className="delivery-select-item-pull-item">评分优先</div>
                            <div className="delivery-select-item-pull-item">人均低到高</div>
                            <div className="delivery-select-item-pull-item">人均高到低</div>
                        </div>
                    </div>
                    <div className="delivery-select-item">
                        <div className="delivery-select-item-title" onClick={selectPullDown}>
                            <span>品类</span>
                            <span className="delivery-select-tria"></span>
                        </div>
                        <div className="delivery-select-item-pull">
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
                        <div className="delivery-select-item-pull">
                            <div className="delivery-select-item-pull-item">城建一食堂</div>
                            <div className="delivery-select-item-pull-item">城建二食堂</div>
                            <div className="delivery-select-item-pull-item">煦园酒店</div>
                        </div>
                    </div>
                    <div className="delivery-select-item">
                        <div className="delivery-select-item-title" onClick={selectPullDown}>
                            <span>全部筛选</span>
                            <span className="delivery-select-tria"></span>
                        </div>
                        <div className="delivery-select-item-pull">
                            <div className="delivery-select-item-pull-item">销量优先</div>
                            <div className="delivery-select-item-pull-item">距离优先</div>
                            <div className="delivery-select-item-pull-item">速度优先</div>
                        </div>
                    </div>
                </div>
                <div className="delivery-shop-content">
                    <div className="delivery-shop-content-item">
                        <div className="delivery-shop-content-item-left">
                            <img src={Shop1} alt="shop" />
                        </div>
                        <div className="delivery-shop-content-item-middle">
                            <div className="shop-name">
                                四川风味
                            </div>
                            <div className="shop-sell">
                                <span>
                                    <span className="shop-sell-grade">
                                        <img src={Star} alt="star" /> 4.9
                                </span>
                                    <span className="shop-sell-count">
                                        月售666单
                                </span>
                                </span>
                                <span className="shop-sell-time">
                                    <span>15分钟</span>
                                    <span>一食堂</span>
                                </span>
                            </div>
                            <div className="shop-delivery">
                                <span>
                                    起送 ￥0
                                </span>
                                <span>
                                    免配送费
                                </span>
                                <span>
                                    人均 ￥12
                                </span>
                            </div>
                            <div className="shop-active">
                                <span>20减5</span>
                                <span>30减10</span>
                            </div>
                        </div>
                        <div className="delivery-shop-content-item-right">

                        </div>
                    </div>
                </div>
            </div>
            <div className="delivery-footer">

            </div>
        </div>
    )
}

export default FoodDelivery

