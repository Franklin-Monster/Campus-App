import React, { useState } from 'react'
import './css/leave-school'

// component
import Button from '@c/button'
import TextRow from '@c/text-row'
import ArrowMenu from '@c/arrow-menu'
import ReturnTitle from '@c/return-title'
import { Calendar } from 'antd-mobile';

// image
import Avator from './img/avator'
import Record from './img/record'
import Notice from './img/notice'

const LeaveSchool = (props) => {
    const [isCalendarShow, setIsCalendarShow] = useState()
    const [leaveStartTime, setLeaveStartTime] = useState()
    const [leaveEndTime, setLeaveEndTime] = useState()
    const now = new Date();
    const originbodyScrollY = document.getElementsByTagName('body')[0].style.overflowY;
    let bodyStyle = document.getElementsByTagName('body')[0].style

    const selectDate = () => {
        bodyStyle.overflowY = 'hidden';
        setIsCalendarShow(true)
    }
    const onCalendarConfirm = (startTime, endTime) => {
        bodyStyle.overflowY = originbodyScrollY;
        setIsCalendarShow(false)
        setLeaveStartTime(startTime)
        setLeaveEndTime(endTime)
    }
    const onCalendarCancel = () => {
        bodyStyle.overflowY = originbodyScrollY;
        setIsCalendarShow(false)
        setLeaveStartTime(null)
        setLeaveEndTime(null)
    }

    const goApplyProcess = () => {
        props.history.push('/applyprocess')
    }
    return (
        <div id="LeaveSchool">
            <div className="leave-header">
                <ReturnTitle background="#D22E2E" text="校内人员电子通行证" rightImg={Record} />
                <div className="stu-avator">
                    <img src={Avator} alt="avator" />
                    <div className="stu-info">Franklin</div>
                    <div className="stu-info">17信息一班</div>
                </div>
                <div className="notice-bar">
                    <img src={Notice} alt="notice" />您当前有出入证在申请流程中
                    <span onClick={goApplyProcess}>去看看</span>
                </div>
            </div>
            <div className="leave-body">
                <TextRow frontText="学号" needInput={true} type="number" placeholder="请输入学号" />
                <TextRow frontText="身份证号" needInput={true} type="number" placeholder="请输入身份证号" />
                <ArrowMenu
                    text="请选择进出校时间"
                    needArrow={true}
                    onClick={selectDate}
                    padding="1rem 1.5rem"
                />
                <Calendar
                    pickTime={true}
                    showShortcut={true}
                    visible={isCalendarShow}
                    onCancel={onCalendarCancel}
                    onConfirm={onCalendarConfirm}
                    defaultDate={now}
                    minDate={new Date(+now - 5184000000)}
                    maxDate={new Date(+now + 31536000000)}
                />
                <TextRow frontText="出校时间" lastText={leaveStartTime ? leaveStartTime.toLocaleString() : ''} />
                <TextRow frontText="返校时间" lastText={leaveEndTime ? leaveEndTime.toLocaleString() : ''} />
                <br /><br />
                <Button
                    text="确认申请"
                    needConfirm={true}
                    background="#D22E2E"
                    color="#fff"
                    confirmText="您确认申请该通行证吗?"
                    okText="申请成功"></Button>
            </div>
            <div className="leave-footer">

            </div>
        </div>
    )
}

export default LeaveSchool