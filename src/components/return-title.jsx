import React from 'react'
import { returnBack } from '../static/js/fun'
import './css/return-title'
import ReturnArrow from './img/return'
const ReturnTitle = (props) => {
    return (
        <div id="ReturnTitle">
            <img src={ReturnArrow} alt='return' onClick={returnBack} />
            {props.text}
        </div>
    )
}

export default ReturnTitle