import React, { useState, useRef } from 'react'
import RightArrow from './img/right-arrow'
import './css/pull-down-menu'
const PullDownMenu = (props) => {
    const selectWayRef = useRef()
    const selectImgRef = useRef()
    const [selectText, setSelectText] = useState('请选择')
    const pullHeight = (props.selectArr.length * 2.35 + 4) + 'em'
    const itemStyle = {
        color: props.itemColor,
        margin: props.margin,
        padding: props.padding
    }
    const pullStyle = {
        color: props.pullColor
    }
    const selectPayWayClick = () => {
        const imgStyle = selectImgRef.current.style
        const textStyle = selectWayRef.current.style
        imgStyle.transform === "rotate(90deg)"
            ? imgStyle.transform = "rotate(0deg)"
            : imgStyle.transform = "rotate(90deg)"
        textStyle.height === pullHeight
            ? textStyle.height = '4rem'
            : textStyle.height = pullHeight
    }
    const selectItemClick = (e) => {
        setSelectText(e.target.innerText)
        selectPayWayClick()
    }
    return (
        <div id="PullDownMenu">
            <div className="menu-box" ref={selectWayRef}>
                <div className="normal-item" style={itemStyle}>
                    {props.title}
                    <span className="select-way-img" onClick={selectPayWayClick}>
                        <img src={RightArrow} alt="right-arrow" ref={selectImgRef} />
                        <span> {selectText}</span>
                    </span>
                </div>
                <div className="select-way-content" style={pullStyle}>
                    {
                        props.selectArr.map((item, index) => {
                            return (
                                <div className="select-way-item"
                                    onClick={selectItemClick}
                                    key={index}>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PullDownMenu