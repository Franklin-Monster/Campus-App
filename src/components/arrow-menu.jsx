import React from 'react'
import Arrow from './img/eee-arrow'
import './css/arrow-menu'

const ArrowMenu = (props) => {

    const style = {
        width: props.width,
        height: props.height,
        margin: props.margin,
        padding: props.padding,
        fontSize: props.fontSize,
        border: props.border,
        color: props.color
    }

    return (
        <div className="menu-item" onClick={props.onClick || null} style={style}>
            {
                props.frontImg && <span className="item-img">
                    <img src={props.frontImg} alt="img" />
                </span>
            }
            <span className="item-text"> {props.text} </span>
            <span className="item-arrow">
                {
                    props.needArrow
                        ? <img src={Arrow} alt="arrow" /> :
                        props.endImg && <img src={props.endImg} alt="arrow" />
                }
            </span>
        </div>
    )
}
ArrowMenu.defaultProps = {
    needArrow: true
}
export default ArrowMenu