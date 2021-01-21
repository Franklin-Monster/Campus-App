import React from 'react'
import './css/auto-swiper'

const AutoSwiper = (props) => {
    const style = {
        width: props.width,
        height: props.height
    }
    
    return (
        <div id="AutoSwiper" style={style}>
            <div className="swiper-content" style={style}>
                {
                    props.imgArr.map((item, index) => {
                        return (
                            <div className="swiper-item" key={index}>
                                <img src={item} alt="img" style={style} />
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