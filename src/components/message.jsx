import React, { useState, useEffect } from 'react'
import './css/message.scss'
import ReactDOM from "react-dom";

const Message = (props) => {
    const [animate, setAnimate] = useState('message-in 1.5s')
    const style = {
        color: props.color,
        background: props.background,
        animation: animate
    }
    useEffect(() => {
        setTimeout(() => {
            setAnimate('message-out 0.8s')
        }, 1300);
    })
    return (
        <div id="Message-component" style={style}>
            <img src={props.img} alt="attention"></img>
            <span>{props.text}</span>
        </div>
    )

}
let div = null
let timer = setTimeout(() => {
    if (ReactDOM.findDOMNode(div)) {
        ReactDOM.unmountComponentAtNode(div)
    } 
}, 2400)
const useMessage = (args) => {
    if (ReactDOM.findDOMNode(div)) {
        ReactDOM.unmountComponentAtNode(div)
        clearTimeout(timer)
    }
    div = document.createElement("div");
    document.body.appendChild(div);
    return ReactDOM.render(<Message {...args} />, div, () => timer);
}

export default useMessage
