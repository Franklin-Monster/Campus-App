import React, { useEffect, useMemo, useRef, useState } from 'react'
import './css/friend-circle'
import { friendCircleData } from './help'

// component
import ReturnTitle from '@c/return-title'

// image
import Edit from './img/edit'
import Like from './img/like'
import Express from './img/express'
import Comment from './img/comment'
import LikeRed from './img/like-red'
import Franklin from './img/Franklin'

const FriendCircle = props => {
    const [friendCircleArr, setFriendCircleArr] = useState(friendCircleData)
    const [refresh, setRefresh] = useState(false)
    const [addCommentIndex, setAddCommentIndex] = useState(null)
    const addCommentRef = useRef()

    // 获取新增动态
    useMemo(() => {
        if (props.history.location.query) {
            friendCircleArr.unshift(props.history.location.query)
        }
    }, [props.history.location.query, friendCircleArr])

    // 主动触发视图更新
    useEffect(() => {
        refresh && setRefresh(false)
    }, [refresh])

    // 点赞
    const likeClick = index => {
        const tempArr = friendCircleArr
        tempArr[index].isLike = !tempArr[index].isLike
        const likeIndexOf = tempArr[index].likeList.indexOf('Franklin')
        if (likeIndexOf !== -1) {
            tempArr[index].likeList.splice(likeIndexOf, 1)
        } else {
            tempArr[index].likeList.push('Franklin')
        }
        setFriendCircleArr(tempArr)
        setRefresh(true)
    }

    // 展示添加评论input
    const showAddComment = index => {
        setAddCommentIndex(index)
        addCommentRef.current.style.height === '2.4rem'
            ? addCommentRef.current.style.height = '0'
            : addCommentRef.current.style.height = '2.4rem'
    }

    // 添加评论
    const addComment = e => {
        if (!e.target.value) return
        if (e.code === 'Enter') {
            const tempArr = friendCircleArr
            tempArr[addCommentIndex].commentList.push({
                name: 'Franklin',
                text: e.target.value
            })
            e.target.value = ''
            showAddComment()
            setRefresh(true)
        }
    }

    return (
        <div id="FriendCircle">
            <div className='friend-header'>
                <div className="return-title-content">
                    <ReturnTitle
                        text="朋友圈"
                        arrowColor="black"
                        background="#f1f2f3"
                        color='#000'
                        rightImg={Edit}
                        rightImgClick={() => props.history.push('/writedynamic')}
                        returnClick={() => props.history.push('/mycenter')} />
                </div>
                <div className="return-title-block"></div>
            </div>
            <div className='friend-body'>
                <div className="user-info">
                    <img src={Franklin} alt="avator" />
                    <span>Franklin</span>
                </div>
                <div className="friend-circle-content">
                    {
                        friendCircleArr.map((item, index) => {
                            return (
                                <div className="friend-circle-item"
                                    key={item.name + index}>
                                    <div className="friend-circle-left">
                                        <img src={item.avator} alt="friava" />
                                    </div>
                                    <div className="friend-circle-right">
                                        <div className="friend-name">{item.name}</div>
                                        {
                                            item.content.text &&
                                            <div className="friend-text">
                                                {item.content.text}
                                            </div>
                                        }
                                        {
                                            item.content.image &&
                                            <div className="friend-image">
                                                {
                                                    item.content.image.map((image, index) => {
                                                        return <img src={image} alt="error"
                                                            key={image + index} />
                                                    })
                                                }
                                            </div>
                                        }
                                        <div className="friend-info">
                                            <span className="friend-time">{item.time}</span>
                                            <span onClick={() => likeClick(index)}>
                                                {
                                                    item.isLike ?
                                                        <img src={LikeRed} alt="red"
                                                        />
                                                        : <img src={Like} alt="like"
                                                        />
                                                }
                                            </span>
                                            <span onClick={() => showAddComment(index)}>
                                                <img src={Comment} alt="comment" />
                                            </span>
                                        </div>
                                        {
                                            item.likeList.length !== 0 &&
                                            <div className="friend-like-content">
                                                <img src={Like} alt="like" />
                                                {
                                                    item.likeList.map((like, i) => {
                                                        return (
                                                            <span className="friend-like-item"
                                                                key={like}>
                                                                <span>{like}</span>
                                                                {i !== item.likeList.length - 1
                                                                    && (<span>,</span>)}
                                                            </span>
                                                        )
                                                    })
                                                }
                                            </div>
                                        }
                                        {
                                            item.commentList.length !== 0 &&
                                            <div className="friend-comment-content">
                                                {
                                                    item.commentList.map((comment, index) => {
                                                        return (
                                                            <div className="friend-comment-item"
                                                                key={comment + index}>
                                                                <p>
                                                                    <span>{comment.name}</span>
                                                                    <span>:</span>
                                                                    {comment.text}
                                                                </p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="friend-footer-block"></div>
            <div className='friend-footer' ref={addCommentRef}>
                <div className="add-comment-content">
                    <input type="text" placeholder="评论" onKeyDown={addComment} />
                    <img src={Express} alt="express" />
                </div>
            </div>
        </div>
    )
}

export default FriendCircle