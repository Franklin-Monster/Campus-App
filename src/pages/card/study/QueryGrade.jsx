import React, { useEffect, useRef, useState } from 'react'
import './css/query-grade'
import { getQueryGradeResult } from '@api'

// component
import Button from '@c/button'
import TextRow from '@c/text-row'
import ReturnTitle from '@c/return-title'
import { Picker, List } from 'antd-mobile'

const QueryGrade = () => {
    const [selectTerm, setSelectTerm] = useState('')
    const [queryResult, setQueryResult] = useState([])
    const queryRef = useRef()
    const resultRef = useRef()
    useEffect(() => {
        getQueryGradeResult().then(res => setQueryResult(res.data))
    }, [])
    const terms = [
        [
            {
                label: '2017',
                value: '2017',
            },
            {
                label: '2018',
                value: '2018',
            },
            {
                label: '2019',
                value: '2019',
            },
            {
                label: '2020',
                value: '2020',
            },
        ],
        [
            {
                label: '第一学期',
                value: '第一学期',
            },
            {
                label: '第二学期',
                value: '第二学期',
            },
        ],
    ]

    // 查询按钮
    const queryClick = () => {
        queryRef.current.style.width = '0'
        resultRef.current.style.width = '100%'
    }

    // 返回查询按钮
    const returnClick = () => {
        resultRef.current.style.width = '0'
        queryRef.current.style.width = '100%'
    }

    return (
        <div id="QueryGrade">
            <div className="query-header">
                <ReturnTitle text="成绩查询" />
            </div>
            <div className="query-body">
                <div className="query-content" ref={queryRef}>
                    <TextRow frontText="姓名：" lastText="Franklin" />
                    <TextRow frontText="班级：" lastText="17信息1班" />
                    <TextRow frontText="学号：" lastText="1705080106" />
                    <Picker
                        data={terms}
                        title="选择学期"
                        cascade={false}
                        extra="请选择学期"
                        value={selectTerm}
                        onChange={v => setSelectTerm(v)}
                        onOk={v => setSelectTerm(v)}
                    >
                        <List.Item arrow="horizontal">学期：</List.Item>
                    </Picker>
                    <Button
                        text="查询"
                        margin="2.4rem"
                        background="#3775F6"
                        color="#fff"
                        onClick={queryClick} />
                </div>
                <div className="result-content" ref={resultRef}>
                    <TextRow frontText="课程" lastText="成绩" />
                    <div className='result-course-content'>
                        {
                            queryResult.map(item => {
                                return <TextRow
                                    key={item.id}
                                    frontText={item.name}
                                    lastText={item.grade} />
                            })
                        }
                    </div>
                    <Button
                        text="返回继续查询"
                        margin="2.4rem"
                        background="#3775F6"
                        color="#fff"
                        onClick={returnClick} />
                </div>
            </div>
            <div className="query-footer">

            </div>
        </div>
    )
}

export default QueryGrade