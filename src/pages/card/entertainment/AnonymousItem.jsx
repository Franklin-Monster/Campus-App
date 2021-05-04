import React, { useState, useRef, useEffect, useMemo } from 'react'
import './css/anonymous-item'
import { getInvitationComment, addInvitationComment } from '@api'

// component
import Message from '@c/message'
import ReturnTitle from '@c/return-title'

// image
import A4 from './img/a4'
import Like from './img/like'
import Relay from './img/relay'
import Select from './img/select'
import Avator from './img/avator.JPG'
import Comment from './img/comment'
import Express from './img/express'
import Student from './img/student'

const AnonymousItem = props => {
    const [commentArr, setCommentArr] = useState([])
    const [invitationName, setInvitationName] = useState('')
    const [invitationContent, setInvitationContent] = useState('')
    const [invitationForward, setInvitationForword] = useState(0)
    const [invitationComment, setInvitationComment] = useState(0)
    const [invitationLike, setInvitationLike] = useState(0)
    const selectBoxRef = useRef()

    // 格式化地址栏参数
    useMemo(() => {
        const searchParams = props.location.search.split('&')
        searchParams.shift()
        const tempObj = {}
        searchParams.map(item => {
            const params = item.split('=')
            tempObj[params[0]] = params[1]
            return null
        })
        setInvitationName(tempObj.name)
        setInvitationContent(tempObj.content)
        setInvitationForword(tempObj.forward)
        setInvitationComment(tempObj.comment)
        setInvitationLike(tempObj.like)
    }, [props])

    // 初始化评论列表
    useEffect(() => {   
        refreshInvitationComment()
    }, [])

    // 更新评论列表
    const refreshInvitationComment = () => {
        getInvitationComment().then(res => setCommentArr(res.data))
    }

    // 添加评论
    const addComment = async e => {
        if (!e.target.value) return
        if (e.code === 'Enter') {
            const value = e.target.value
            await addInvitationComment({ content: value }).then(res => {
                if (res.data === 'success') {
                    Message({
                        text: '发表评论成功',
                        type: 'success'
                    })
                } else {
                    Message({
                        text: '发表评论失败，请重试',
                        type: 'error'
                    })
                }
            })
            e.target.value = ''
            refreshInvitationComment()
        }
    }

    // 显示选择菜单
    const showSelect = () => {
        const height = selectBoxRef.current.style.height
        height === '7.5rem'
            ? selectBoxRef.current.style.height = 0
            : selectBoxRef.current.style.height = '7.5rem'
    }

    // 选择匿名项
    const selectNameItem = e => {
        if (e.target.childNodes[2]) {
            e.target.childNodes[2].style.visibility = 'visible'
        }
        showSelect()
    }

    return (
        <div id="AnonymousItem">
            <div className="an-header">
                <ReturnTitle text="帖子详情" />
            </div>
            <div className="an-body">
                <div className="post-content">
                    <div className="item-name">
                        {decodeURI(invitationName)}
                    </div>
                    <div className="item-content">
                        {decodeURI(invitationContent)}
                    </div>
                    <div className="item-operate">
                        <div className="operate-box"><img src={Relay} alt="forward" />
                            {invitationForward}
                        </div>
                        <div className="operate-box"><img src={Comment} alt="comment" />
                            {invitationComment}
                        </div>
                        <div className="operate-box"><img src={Like} alt="like" />
                            {invitationLike}
                        </div>
                    </div>
                </div>
                <div className="comment-content">
                    <div className="comment-title">评论 </div>
                    {
                        commentArr.map((item, index) => {
                            return (
                                <div className="comment-item" key={item.content + String(index)}>
                                    <div className="item-left">
                                        {item.comment_id > 9 ?
                                            <img src={require(`./img/a4`).default} alt="avator" />
                                            : <img src={require(`./img/a${item.comment_id}`).default} alt="avator" />
                                        }
                                    </div>
                                    <div className="item-middle">
                                        <div className="item-name">
                                            {`${item.name}学生`}
                                        </div>
                                        <div className="item-text">
                                            {item.content}
                                        </div>
                                        <div className="item-time">
                                            {item.time}
                                        </div>
                                    </div>
                                    <div className="item-right">
                                        <span>{item.like}</span><img src={Like} alt="like" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="footer-block"></div>
            <div className="an-footer">
                <div className="select-box" ref={selectBoxRef} >
                    <div className="select-item" onClick={selectNameItem}>
                        <img src={A4} alt="a4" />
                        <div className="select-item-name">学生： 天津城建大学学生</div>
                        <img src={Select} alt="select" className="select-item-select" />
                    </div>
                    <div className="select-item" onClick={selectNameItem}>
                        <img src={Student} alt="stu" />
                        <div className="select-item-name">花名： Franklin</div>
                    </div>
                    <div className="select-item" onClick={selectNameItem}>
                        <img src={Avator} alt="ava" />
                        <div className="select-item-name">实名： 周杰伦</div>
                    </div>
                </div>
                <div className="comment-box">
                    <div className="select-name">
                        <img src={Student} alt="stu" onClick={showSelect} />
                    </div>
                    <div className="box-input">
                        <input type="text" placeholder="我也来说几句" onKeyDown={addComment} />
                    </div>
                    <div className="box-express">
                        <img src={Express} alt="express" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnonymousItem