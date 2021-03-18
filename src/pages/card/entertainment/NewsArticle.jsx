import React from 'react'
import './css/news-article'
import { News } from './help'

// component
import ReturnTitle from '@c/return-title'


const NewsArticle = () => {
    return (
        <div id="NewsArticle">
            <div className="art-header">
                <ReturnTitle text="头条" />
            </div>
            <div className="art-body">
                <div className="news-title">
                    {News.title}
                </div>
                <div className="news-time">
                    {News.time}
                </div>
                <div className="news-content">
                    {
                        News.article.map(item => {
                            switch (item.type) {
                                case 'text':
                                    return (
                                        <p key={item.content}>{item.content}</p>
                                    )
                                case 'image':
                                    return (
                                        <div className="news-img" key={item.content}>
                                            <img src={item.content} alt="newsimg" />
                                        </div>
                                    )
                                default: return null
                            }
                        })
                    }
                </div>
            </div>
            <div className="art-footer">

            </div>
        </div>
    )
}

export default NewsArticle