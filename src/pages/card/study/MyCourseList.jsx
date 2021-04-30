import React, { useEffect, useState } from 'react'
import './css/my-course-list'
import { getMyCourseList } from '@api'

// component
import SearchBar from '@c/search-bar'
import ArrowMenu from '@c/arrow-menu'
import ReturnTitle from '@c/return-title'

// image
import ClassAvator from './img/class-avator'

const MyCourseList = props => {
    const [courseList, setCourseList] = useState([])

    // 获取我的课程列表
    useEffect(() => {
        getMyCourseList().then(res => setCourseList(res.data))
    }, [])

    return (
        <div id="MyCourseList">
            <div className="course-header">
                <ReturnTitle text="我的课程" />
                <div className="search-bar-content">
                    <SearchBar placeholder="搜索课程" />
                </div>
            </div>
            <div className="course-body">
                {
                    courseList.map(item => {
                        return (
                            <ArrowMenu
                                key={item.name}
                                frontImg={ClassAvator}
                                text={item.name}
                                subText={item.teacher}
                                padding="1rem 1.5rem"
                                frontImgWidth="2rem"
                                frontImgHeight="2rem"
                                margin=".5rem auto"
                                onClick={() => props.history.push(`/mycoursedetail?&course=${item.name}&teacher=${item.teacher}`)} />
                        )
                    })
                }
            </div>
            <div className="course-footer">你只有这么多课程啦~~~</div>
        </div>
    )
}

export default MyCourseList