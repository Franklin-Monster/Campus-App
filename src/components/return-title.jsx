import React from 'react'
import { returnBack } from '../static/js/fun'
import './css/return-title'
import ReturnArrow from './img/return'
const ReturnTitle = (props) => {
    const style = {
        background: props.background,
        color: props.color
    }
    return (
        <div id="ReturnTitle" style={style}>
            <img src={ReturnArrow} alt='return' onClick={returnBack} />
            {props.text}
        </div>
    )
}

export default ReturnTitle