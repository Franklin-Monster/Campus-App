import React from 'react'
import './css/apply-process'

// component
import { NoticeBar } from 'antd-mobile'
import ReturnTitle from '@c/return-title'

const ApplyProcess = (props) => {

    const getApplyDetail = () => {

    }

    return (
        <div id="ApplyProcess">
            <div className="apply-header">
                <ReturnTitle background="#D22E2E" text="当前申请流程" />
                <div className="apply-title">出入证申请流程图</div>
            </div>
            <div className="apply-body">
                <div
                    className="process-round"
                    style={{ background: '#2BB0EA', color: '#fff' }}
                    onClick={getApplyDetail}>
                    学生申请
                    <div className="apply-detail">
                    <div className="detail-item">
                    <span>流程</span><span>学生申请</span>
                </div>
                <div className="detail-item">
                    <span>处理人</span><span>Franklin</span>
                </div>
                <div className="detail-item">
                    <span>开始时间</span><span>Franklin</span>
                </div>
                <div className="detail-item">
                    <span>结束时间</span><span>Franklin</span>
                </div>
                <div className="detail-item">
                    <span>结果</span><span>Franklin</span>
                </div>
                <div className="detail-item">
                    <span>意见</span><span>Franklin</span>
                </div>
            </div>
                </div>
                <div className="down-arrow">
                    <div className="down-arrow-rect"></div>
                    <div className="down-arrow-tria"></div>
                </div>
                <div className="process-rect">
                    学生院系审核
                </div>
                <div className="down-arrow">
                    <div className="down-arrow-rect"></div>
                    <div className="down-arrow-tria"></div>
                </div>
                <div className="process-rect">
                    学工处审核
                </div>
                <div className="down-arrow">
                    <div className="down-arrow-rect"></div>
                    <div className="down-arrow-tria"></div>
                </div>
                <div className="process-round">
                    申请成功
                </div>

            </div>
            <div className="apply-footer">
                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 .5rem' } }}>
                    注意：疫情期间办理出入证之前事先联系辅导员说明请假原因，若申请流程长时间滞留，请及时联系学办老师
                </NoticeBar>
            </div>
           
        </div>
    )
}

export default ApplyProcess