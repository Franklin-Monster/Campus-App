import React from 'react'
import './css/take-photo-finish'

// image
import Cut from './img/cut'
import Text from './img/text'
import Scrawl from './img/scrawl'
import Filter from './img/filter'
import Expression from './img/expression'
import ReturnArrow from './img/return-arrow'

const TakePhotoFinish = props => {
    const photo = props.location.search.split('=')[1]

    // 发送照片
    const sendPhoto = () => {
        sessionStorage.setItem("photo", photo)
        props.history.go(-2)
    }
    return (
        <div id="TakePhotoFinish">
            <div className="fin-header">
                <img src={ReturnArrow} alt="return" onClick={() => props.history.goBack()} />
            </div>
            <div className="fin-body">
                <img src={photo} alt="photosrc" />
            </div>
            <div className="fin-footer">
                <div className="fin-action">
                    <img src={Cut} alt="cut" />
                    <img src={Text} alt="text" />
                    <img src={Scrawl} alt="scrawl" />
                    <img src={Filter} alt="filter" />
                    <img src={Expression} alt="express" />
                </div>
                <div className="fin-send" onClick={sendPhoto}>发送</div>
            </div>
        </div>
    )
}

export default TakePhotoFinish