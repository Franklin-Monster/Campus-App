import React from 'react'
import Arrow from './img/eee-arrow'
import './css/arrow-menu'

const ArrowMenu = props => {
    const style = {
        width: props.width,
        height: props.height,
        margin: props.margin,
        padding: props.padding,
        fontSize: props.fontSize,
        border: props.border,
        color: props.color
    }

    return (
        <div id="MenuItem" onClick={props.onClick || null} style={style}>
            <div className="menu-item">
                {
                    props.frontImg && <div className="item-img">
                        <img src={props.frontImg} alt="img"
                            style={{
                                width: props.frontImgWidth,
                                height: props.frontImgHeight
                            }} />
                    </div>
                }
                <div className="item-text">
                    <div className="item-main-text">{props.text}</div>
                    {
                        props.subText && <div className="item-sub-text">{props.subText}</div>
                    }
                </div>
                <div className="item-arrow">
                    {
                        props.needArrow
                            ? <img src={Arrow} alt="arrow" /> :
                            props.endImg && <img src={props.endImg} alt="arrow" />
                    }
                </div>
            </div>
        </div>

    )
}
ArrowMenu.defaultProps = {
    needArrow: true
}
export default ArrowMenu