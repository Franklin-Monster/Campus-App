import React, { useState } from 'react'
import '../css/for-friend'
import { sildeImageArr } from '../help'

// component
import ForTab from './ForTab'
import MessageBox from '@c/message'
import ReturnTitle from '@c/return-title'

// image
import No from '../img/no'
import Love from '../img/love'
import Collect from '../img/collect'

const ForFriend = props => {
    const [sildeImgArr, setSildeImgArr] = useState(sildeImageArr)
    const [startX, setStartX] = useState(null)
    const [startY, setStartY] = useState(null)
    const [endX, setEndX] = useState(null)
    const [endY, setEndY] = useState(null)
    const clientWidth = document.body.clientWidth
    const clientHeight = document.documentElement.clientHeight

    // 开始拖拽
    const handleTouchStart = e => {
        setStartX(e.touches[0].clientX)
        setStartY(e.touches[0].clientY)
    }

    // 拖拽过程
    const handleTouchMove = e => {
        setEndX(e.touches[0].clientX)
        setEndY(e.touches[0].clientY)
        e.target.style.transform = `translate(${e.touches[0].clientX}px, ${e.touches[0].clientY}px)`
    }

    // 结束拖拽
    const handleTouchEnd = e => {
        // 根据拖拽距离判断是否滑动图片或回弹
        if (startY - endY > clientHeight / 2) {
            e.target.style.transform = `translateY(-200%)`
            deleteImg()
        }
        else if (endX - startX > clientWidth / 2) {
            e.target.style.transform = `translateX(200%)`
            deleteImg()
        }
        else if (endX - startX < -clientWidth / 2) {
            e.target.style.transform = `translateX(-200%)`
        }
        else {
            e.target.style.transform = `translateX(0)`
        }
        setStartX(clientWidth / 2)
        setStartY(clientHeight / 2)
        setEndX(null)
        setEndY(null)
    }

    // 延时删除数组中最后一个图片
    const deleteImg = () => {
        setTimeout(() => {
            setSildeImgArr(sildeImgArr.filter((i, index) => index !== sildeImgArr.length - 1))
        }, 1000);
        if (sildeImgArr.length < 1) {
            MessageBox({
                text: '附近的人暂时都被您划完啦'
            })
        }
    }

    // 点击喜欢按钮
    const loveClick = e => {
        // 获取当前元素的父元素的父元素的最后一个子元素
        e.target.parentNode.parentNode.lastElementChild.style.transform = `translateX(200%)`
        deleteImg()
    }

    // 点击取消按钮
    const cancelClick = e => {
        e.target.parentNode.parentNode.lastElementChild.style.transform = `translateX(-200%)`
        deleteImg()
    }

    // 点击超级喜欢按钮
    const collectClick = e => {
        e.target.parentNode.parentNode.lastElementChild.style.transform = `translateY(-200%)`
        deleteImg()
    }

    return (
        <div id="ForFriend">
            <div className="fri-header">
                <ReturnTitle text='休闲交友' />
            </div>
            <div className="fri-body">
                <div className="image-content">
                    <div className="button-content">
                        <img src={No} alt="no" onClick={cancelClick} />
                        <img src={Collect} alt="collect" onClick={collectClick} />
                        <img src={Love} alt="love" onClick={loveClick} />
                    </div>
                    {
                        sildeImgArr.map(item => {
                            return (
                                <img src={item}
                                    key={item}
                                    alt="img"
                                    onTouchStart={handleTouchStart}
                                    onTouchMove={handleTouchMove}
                                    onTouchEnd={handleTouchEnd}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className="fri-footer">
                <ForTab goForFriend={() => props.history.push('/forfriend')}
                    goForMessage={() => props.history.push('/formessage')}
                    goForMine={() => props.history.push('/formine')} />
            </div>
        </div>
    )
}

export default ForFriend