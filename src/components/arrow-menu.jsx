import React from 'react'
import Arrow from './img/eee-arrow'
import './css/arrow-menu'
const ArrowMenu = (props) => {
    const style = {
        width: props.width,
        height: props.height,
        margin: props.margin,
        padding: props.padding
    }
    const onClick = () => {
        props.onClick && props.onClick()
        return null
    }
    return (
        <div className="menu-item" onClick={onClick} style={style}>
            {
                props.frontImg && <span className="item-img">
                    <img src={props.frontImg} alt="avator"></img>
                </span>
            }
            <span className="item-text"> {props.text} </span>
            <span className="item-arrow">
                {
                    props.needArrow
                        ? <img src={Arrow} alt="arrow"></img> :
                        props.endImg && <img src={props.endImg} alt="arrow"></img>
                }
            </span>
        </div>
    )
}
export default ArrowMenu