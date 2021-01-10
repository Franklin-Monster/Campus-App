import React from 'react'
import './css/arrow-menu.scss'
const ArrowMenu = (props) => {
    return (
        <div className="menu-item">
            <span className="item-img">
                {props.frontImg && <img src={props.frontImg} alt="avator"></img>}
            </span>
            <span className="item-text"> {props.text} </span>
            <span className="item-arrow">
                {props.endImg && <img src={props.endImg} alt="arrow"></img>}
            </span>
        </div>
    )
}
export default ArrowMenu