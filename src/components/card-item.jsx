import React from 'react'
import './css/card-item.scss'
const CardItem = (props) => {
    const style = {
        color: props.color,
        background: props.background,
        width: props.width,
        height: props.height,
        visibility: props.visibility,
        margin: props.margin
    }
    const onClick = () => {
        props.onClick && props.onClick()
        return null
    }
    return (
        <div id="card-item" style={style} onClick={onClick}>
            <div>
                <img src={props.img} className="card-img" alt="card"></img>
                <div className="card-text">{props.text}</div>
            </div>
        </div>
    )
}

export default CardItem