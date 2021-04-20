import React, { useState, useEffect } from 'react'
import './css/news-list'
import { getNewsList } from '@api'

// component
import ReturnTitle from '@c/return-title'

const NewsList = props => {
    const [newsTab, setNewsTab] = useState('全国热搜')
    const [showNews, setShowNews] = useState([])
    const [countryNews, setCountryNews] = useState([])
    const [cityNews, setCityNews] = useState([])
    const [schoolNews, setSchoolNews] = useState([])
    const random = Math.random()

    // 获取新闻列表
    useEffect(() => {
        getNewsList().then(res => {
            setCountryNews(res.data.filter(item => item.type === 0))
            setCityNews(res.data.filter(item => item.type === 1))
            setSchoolNews(res.data.filter(item => item.type === 2))
            setShowNews(res.data.filter(item => item.type === 0))
        })
    }, [])

    // 根据tab切换新闻
    useEffect(() => {
        switch (newsTab) {
            case '全国头条':
                setShowNews(countryNews)
                break;
            case '天津头条':
                setShowNews(cityNews)
                break;
            case '本校头条':
                setShowNews(schoolNews)
                break;
            default: setShowNews(countryNews)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newsTab])
    return (
        <div id="NewsList">
            <div className="news-header">
                <ReturnTitle text="校园头条" />
                <div className="header-tab">
                    <div className="tab-item" onClick={() => setNewsTab('全国头条')}>全国头条</div>
                    <div className="tab-item" onClick={() => setNewsTab('天津头条')}>天津头条</div>
                    <div className="tab-item" onClick={() => setNewsTab('本校头条')}>本校头条</div>
                </div>
            </div>
            <div className="header-block"></div>
            <div className="news-body">
                {
                    showNews.map((item, index) => {
                        return (
                            <div className="news-item"
                                key={item.title + String(index)}
                                onClick={() => props.history.push('/newsarticle')}>
                                <div className="news-index">
                                    {index + 1}
                                </div>
                                <div className="news-content">
                                    {item.title}
                                </div>
                                <div className="news-heat">
                                    {Math.round(random * (countryNews.length - index) * 100000)}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="news-footer"></div>
        </div>
    )
}

export default NewsList