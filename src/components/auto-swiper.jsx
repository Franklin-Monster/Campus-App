import React, { useState } from 'react'
import './css/auto-swiper'
const AutoSwiper = (props) => {
    const [imgArr, setImgArr] = useState(props.imgArr)
    return (
        <div id="AutoSwiper">
            <div className="swiper-content">
                {
                    imgArr.map((item, index) => {
                        return (
                            <div className="swiper-item" key={index}>
                                <img src={item} alt="img" />
                            </div>
                        )
                    })
                }
            </div>
            <div className="swiper-nav">
                <div className="nav-item n1"> </div>
                <div className="nav-item n2"> </div>
                <div className="nav-item n3"> </div>
            </div>
        </div>
    )
}

export default AutoSwiper