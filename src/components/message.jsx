import React, { useEffect, useState } from 'react'
import './css/message.scss'
import ReactDOM from "react-dom";

// image
import Success from './img/success'
import Attention from './img/warn'
import Fail from './img/fail'
const Message = (props) => {
    const [animate, setAnimate] = useState('message-in 1.5s')
    const style = {
        color: props.color,
        background: props.background,
        animation: animate
    }
    let MessageImg = props.img
    setTimeout(() => {
        setAnimate('message-out 0.8s')
    }, 1300);

    const selectType = (type) => {
        switch (type) {
            case 'success':
                style.background = '#F0F9EB'
                style.color = '#67C23A'
                MessageImg = Success
                break;
            case 'fail':
                style.background = '#FEF0F0'
                style.color = '#F56C6C'
                MessageImg = Fail
                break;
            case 'warn':
                style.background = '#FDF6EC'
                style.color = '#E6A23C'
                MessageImg = Attention
                break;
        }
        return (
            <div>
                <img src={MessageImg} alt="attention"></img>
                <span>{props.text}</span>
            </div>
        )
    }

    return (
        <div id="Message-component" style={style}>
            {selectType(props.type)}
        </div>
    )
}
let div = null
const useMessage = (args) => {
    if (ReactDOM.findDOMNode(div)) {
        ReactDOM.unmountComponentAtNode(div)
    }
    div = document.createElement("div");
    document.body.appendChild(div);
    return ReactDOM.render(<Message {...args} />, div);
}

export default useMessage
