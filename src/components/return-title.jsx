import React from 'react'
import { returnBack } from '../static/js/fun'
import './css/return-title'

// image
import ReturnArrowWhite from './img/return-white'
import ReturnArrowBlack from './img/return-black'

const ReturnTitle = props => {
    const style = {
        background: props.background,
        color: props.color
    }

    return (
        <div id="ReturnTitle" style={style}>
            <img
                className="left-img"
                src={props.arrowColor === 'black' ? ReturnArrowBlack : ReturnArrowWhite}
                alt='return'
                onClick={props.returnClick || returnBack} />
            {props.text}
            {props.rightImg &&
                <img
                    className="right-img"
                    src={props.rightImg}
                    alt="img"
                    onClick={props.rightImgClick || null} />}
        </div>
    )
}

export default ReturnTitle