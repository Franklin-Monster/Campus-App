import React from 'react'
import './css/card-item'

const CardItem = props => {
    const style = {
        color: props.color,
        background: props.background,
        width: props.width,
        height: props.height,
        visibility: props.visibility,
        margin: props.margin,
        fontSize: props.fontSize
    }
    
    return (
        <div id="card-item" style={style} onClick={props.onClick || null}>
            <div>
                <img src={props.img} className="card-img" alt="card" />
                <div className="card-text">{props.text}</div>
            </div>
        </div>
    )
}

export default CardItem