import React from 'react'
import './css/button.scss'
const Button = (props) => {
    const style = {
        color: props.color,
        background: props.background,
        margin: props.margin + ' auto' || '0 auto'
    }
    const onClick = () => {
        return props.onClick
    }
    return (
        <div id="Button" style={style} onClick={onClick()}> {props.text} </div>
    )
}
export default Button 