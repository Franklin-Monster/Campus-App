import React from 'react'
import Img from '../img/active'

const ForFriend = () => {
    const handleTouchStart = (e) => {
        console.log(e)
    }
    const handleTouchMove = (e) => {
        console.log(e)
    }
    const handleTouchEnd = (e) => {
        console.log(e)
    }

    return (
        <div id="ForFriend">
            <img src={Img} alt="img" onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd} />
        </div>
    )
}

export default ForFriend