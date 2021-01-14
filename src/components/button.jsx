import React from 'react'
import './css/button.scss'
const Button = (props) => {
    const style = {
        width: props.width,
        height: props.height,
        lineHeight: props.height,
        color: props.color,
        background: props.background,
        margin: props.margin + ' auto' || '0 auto'
    }
    const onClick = () => {
        props.onClick && props.onClick()
        return null
    }
    return (
        <div id="Button" style={style} onClick={onClick}> {props.text} </div>
    )
}
export default Button 