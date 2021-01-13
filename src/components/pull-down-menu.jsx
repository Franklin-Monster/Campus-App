import React, { useState, useRef } from 'react'
import RightArrow from './img/right-arrow'
import './css/pull-down-menu'
const PullDownMenu = (props) => {
    const selectWayRef = useRef()
    const selectImgRef = useRef()
    const [selectText, setSelectText] = useState('请选择')
    const pullHeight = (props.selectArr.length * 2.35 + 4) + 'em'
    const selectPayWayClick = () => {
        const imgRef = selectImgRef.current.style
        const textRef = selectWayRef.current.style
        imgRef.transform === "rotate(90deg)"
            ? imgRef.transform = "rotate(0deg)"
            : imgRef.transform = "rotate(90deg)"
        textRef.height === pullHeight
            ? textRef.height = '4rem'
            : textRef.height = pullHeight
    }
    const selectItemClick = (e) => {
        setSelectText(e.target.innerText)
        selectPayWayClick()
    }
    return (
        <div id="PullDownMenu">
            <div className="menu-box" ref={selectWayRef}>
                <div className="normal-item">
                    <span>{props.title}</span>
                    <span className="select-way-img" onClick={selectPayWayClick}>
                        <img src={RightArrow} alt="right-arrow" ref={selectImgRef} />
                        <span> {selectText}</span>
                    </span>
                </div>
                <div className="select-way-content" >
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