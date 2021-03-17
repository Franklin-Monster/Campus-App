import React, { useState, useRef } from 'react'
import './css/anonymous-item'
import { commentList } from './help'

// component
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

const AnonymousItem = () => {
    const [commentArr, setCommentArr] = useState(commentList)
    const selectBoxRef = useRef()
    // 添加评论
    const addComment = e => {
        if (!e.target.value) return
        if (e.code === 'Enter') {
            const value = e.target.value
            setCommentArr(comment => [{
                avator: A4,
                name: '天津城建大学',
                content: value,
                time: '刚刚',
                like: 0
            }, ...comment])
            e.target.value = ''
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
                        哈尔滨理工大学学生
                        </div>
                    <div className="item-content">
                        天津城建大学怎么样？想考研过去，求各位兄弟们给点建议
                        </div>
                    <div className="item-operate">
                        <div className="operate-box"><img src={Relay} alt="relay" />24</div>
                        <div className="operate-box"><img src={Comment} alt="comment" />
                            {commentArr.length}
                        </div>
                        <div className="operate-box"><img src={Like} alt="like" />64</div>
                    </div>
                </div>
                <div className="comment-content">
                    <div className="comment-title">
                        评论
                    </div>
                    {
                        commentArr.map(item => {
                            return (
                                <div className="comment-item" key={item.content}>
                                    <div className="item-left">
                                        <img src={item.avator} alt="avator" />
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
                        {/* <img src={Select} alt="select" className="select-item-select" /> */}
                    </div>
                    <div className="select-item" onClick={selectNameItem}>
                        <img src={Avator} alt="ava" />
                        <div className="select-item-name">实名： 周杰伦</div>
                        {/* <img src={Select} alt="select" className="select-item-select" /> */}
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