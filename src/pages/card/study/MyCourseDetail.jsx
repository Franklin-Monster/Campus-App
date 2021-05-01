import React, { useEffect, useState, useMemo, useRef } from 'react'
import './css/my-course-detail'
import { getMyCourseDetail, getMyCourseTaskList } from '@api'

// component
import TextRow from '@c/text-row'
import ArrowMenu from '@c/arrow-menu'
import ReturnTitle from '@c/return-title'

// image
import Sign from './img/sign'
import Exam from './img/exam'
import Exercise from './img/exercise'

const MyCourseDetail = props => {
    const [courseName, setCourseName] = useState('')
    const [courseDetail, setCourseDetail] = useState({})
    const [courseTask, setCourseTask] = useState([])
    const detailRef = useRef()
    const taskRef = useRef()

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
    }, [props])

    // 获取详情及任务列表
    useEffect(() => {
        getMyCourseDetail().then(res => setCourseDetail(res.data[0]))
        getMyCourseTaskList().then(res => setCourseTask(res.data))
    }, [props])

    // 切换tab
    const detailTab = () => {
        taskRef.current.style.width = '0'
        detailRef.current.style.width = "100%"
    }
    const taskTab = () => {
        detailRef.current.style.width = '0'
        taskRef.current.style.width = "100%"
    }

    // 根据任务类型渲染任务图标
    const switchTask = type => {
        switch (type) {
            case '签到': return Sign
            case '练习': return Exercise
            case '考试': return Exam
            default: return null
        }
    }

    return (
        <div id="MyCourseDetail">
            <div className="detail-header">
                <ReturnTitle text={courseName} />
            </div>
            <div className="detail-body">
                <div className="detail-tab">
                    <div className="detail-tab-item" onClick={detailTab}>
                        详情
                    </div>
                    <div className="detail-tab-item" onClick={taskTab}>
                        任务
                    </div>
                </div>
                <div className="detail-tab-content">
                    <div className="detail-content" ref={detailRef}>
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
                    <div className="task-content" ref={taskRef}>
                        {
                            courseTask.map(item => {
                                return <ArrowMenu
                                    frontImg={switchTask(item.type)}
                                    text={item.name}
                                    subText={item.time}
                                    margin=".2rem 0" />
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="detail-footer">这个课程只有这么多内容啦~~</div>
        </div>
    )
}

export default MyCourseDetail