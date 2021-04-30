import React, { useEffect, useState, useMemo } from 'react'
import './css/my-course-detail'
import { getMyCourseDetail } from '@api'

// component
import TextRow from '@c/text-row'
import ArrowMenu from '@c/arrow-menu'
import ReturnTitle from '@c/return-title'

// image
const MyCourseDetail = props => {
    const [courseName, setCourseName] = useState('')
    const [courseTeacher, setCourseTeacher] = useState('')
    const [courseDetail, setCourseDetail] = useState({})

    // 格式化地址栏参数
    useMemo(() => {
        const searchParams = props.location.search.split('&')
        searchParams.shift()
        const tempObj = {}
        searchParams.map(item => {
            const params = item.split('=')
            tempObj[params[0]] = decodeURI(params[1])
            return null
        })
        setCourseName(tempObj.course)
        setCourseTeacher(tempObj.teacher)
    }, [props])

    useEffect(() => {
        getMyCourseDetail().then(res => setCourseDetail(res.data[0]))
    }, [props])
    return (
        <div id="MyCourseDetail">
            <div className="detail-header">
                <ReturnTitle text={courseName} />
            </div>
            <div className="detail-body">
                <div className="detail-tab">
                    <div className="detail-tab-item">
                        详情
                    </div>
                    <div className="detail-tab-item">
                        任务
                    </div>

                </div>
                <div className="detail-tab-content">
                    <div className="detail-content">
                        <TextRow frontText="课程名称"
                            lastText={courseDetail.name}
                            lastTextColor="#aaa"
                            lastTextFontSize=".9rem" />
                        <TextRow frontText="授课教师"
                            lastText={courseDetail.teacher}
                            lastTextColor="#aaa"
                            lastTextFontSize=".9rem" />
                        <TextRow frontText="开始时间"
                            lastText={courseDetail.begin_time}
                            lastTextColor="#aaa"
                            lastTextFontSize=".9rem" />
                        <TextRow frontText="结束时间"
                            lastText={courseDetail.last_time}
                            lastTextColor="#aaa"
                            lastTextFontSize=".9rem" />
                        <TextRow frontText="上课时间"
                            lastText={courseDetail.course_time}
                            lastTextColor="#aaa"
                            lastTextFontSize=".9rem" />
                        <TextRow frontText="考试时间"
                            lastText={courseDetail.check_time}
                            lastTextColor="#aaa"
                            lastTextFontSize=".9rem" />
                        <TextRow frontText="上课地点"
                            lastText={courseDetail.place}
                            lastTextColor="#aaa"
                            lastTextFontSize=".9rem" />
                        <TextRow frontText="课程学分"
                            lastText={courseDetail.credit}
                            lastTextColor="#aaa"
                            lastTextFontSize=".9rem" />
                        <ArrowMenu text="课程群聊" />
                        <ArrowMenu text="课程成员" />
                        <ArrowMenu text="课程练习" />
                        <ArrowMenu text="课程资料" />
                    </div>
                    <div className="task-content">
                        
                    </div>
                </div>
            </div>
            <div className="detail-footer">

            </div>
        </div>
    )
}

export default MyCourseDetail