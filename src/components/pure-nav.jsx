import React from 'react'
import './css/pure-nav'

const PureNav = props => {
    const style = {
        color:props.color,
        background:props.background
    }
    
    return (
        <div id="Pure-Nav" style={style}>
            <div className="nav-text">{props.text}</div>
        </div>
    )
}

export default PureNav