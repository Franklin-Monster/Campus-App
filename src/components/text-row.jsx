import React from 'react'
import './css/text-row'

const TextRow = (props) => {
    const style = {
        width: props.width,
        height: props.height,
        padding: props.padding,
        margin: props.margin,
        background: props.background,
        color: props.color
    }
    return (
        <div id="TextRow" style={style}>
            <span className="front-text">{props.frontText}</span>
            {
                props.needInput
                    ? <input
                        className="last-text"
                        type={props.type || 'text'}
                        placeholder={props.placeholder} />
                    : <span className="last-text"
                        style={{ fontSize: props.lastTextFontSize, color: props.lastTextColor }}>
                        {props.lastText}
                    </span>
            }
        </div>
    )
}

export default TextRow