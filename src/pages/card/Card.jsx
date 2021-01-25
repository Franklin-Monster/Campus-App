import React from 'react'
import { withRouter } from 'react-router-dom'
import { cardItemArr } from './help'
import './card.scss'

// component
import CardItem from '@c/card-item'
import SearchBar from '@c/search-bar'

const Card = (props) => {

    return (
        <div id="Card">
            <div className="card-header">
                <SearchBar placeholder="搜索应用" />
            </div>
            <div className="card-body">
                <div className="card-body-item-content">
                    <div className="item-title">生活</div>
                    <div className="item-card">
                        {
                            cardItemArr.map((item, index) => {
                                if (index < 8) {
                                    return (
                                        <CardItem
                                            text={item.text}
                                            img={item.img}
                                            key={index}
                                            width="20%"
                                            height="20%"
                                            onClick={() => props.history.push(item.route)}
                                        />
                                    )
                                }
                                return null
                            })
                        }
                    </div>
                </div>
                <div className="card-body-item-content">
                    <div className="item-title">学习</div>
                    <div className="item-card">
                        {
                            cardItemArr.map((item, index) => {
                                if (index >= 8 && index < 12) {
                                    return (
                                        <CardItem
                                            text={item.text}
                                            img={item.img}
                                            key={index}
                                            width="20%"
                                            height="20%"
                                            onClick={() => props.history.push(item.route)}
                                        />
                                    )
                                }
                                return null
                            })
                        }

                    </div>
                </div>
                <div className="card-body-item-content">
                    <div className="item-title">教务</div>
                    <div className="item-card">
                        {
                            cardItemArr.map((item, index) => {
                                if (index >= 12 && index < 16) {
                                    return (
                                        <CardItem
                                            text={item.text}
                                            img={item.img}
                                            key={index}
                                            width="20%"
                                            height="20%"
                                            onClick={() => props.history.push(item.route)}
                                        />
                                    )
                                }
                                return null
                            })
                        }

                    </div>
                </div>
                <div className="card-body-item-content">
                    <div className="item-title">娱乐</div>
                    <div className="item-card">
                        {
                            cardItemArr.map((item, index) => {
                                if (index >= 16) {
                                    return (
                                        <CardItem
                                            text={item.text}
                                            img={item.img}
                                            key={index}
                                            width="20%"
                                            height="20%"
                                            onClick={() => props.history.push(item.route)}
                                        />
                                    )
                                }
                                return null
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="card-footer">

            </div>
        </div>
    )
}

export default withRouter(Card)

