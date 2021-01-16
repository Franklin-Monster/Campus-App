import React from 'react'
import './css/paynet'

// component
import Button from '@c/button'
import Message from '@c/message'
import ReturnTitle from '@c/return-title'
import PullDownMenu from '@c/pull-down-menu'


const PayNet = (props) => {
    const submit = () => {
        Message({
            text: '缴费成功',
            type: 'success'
        })
    }
    return (
        <div id="PayNet">
            <div className="paynet-header">
                <ReturnTitle text="网费缴纳" />
            </div>
            <div className="paynet-body">
                <div className="input-item">
                    <span>上网账号</span>
                    <input type="number" placeholder="请输入上网账号" />
                </div>
                <div className="input-item">
                    <span>账号明细</span>
                    <span className="pay-detailed"></span>
                </div>
                <PullDownMenu
                    title="支付方式"
                    selectArr={["一卡通", "校园卡绑定的银行卡"]}
                    pullColor="#FF4842" />
                <div className="input-item">
                    <span>缴费金额</span>
                    <input type="number" placeholder="缴费金额" />
                </div>
                <div className="input-item">
                    <span>支付密码</span>
                    <input type="text" placeholder="请输入支付密码" />
                </div>
                <div className="select-amount">
                    <div className="amount-item">30</div>
                    <div className="amount-item">50</div>
                    <div className="amount-item">100</div>
                </div>
                <div className="select-amount">
                    <div className="amount-item">150</div>
                    <div className="amount-item">200</div>
                    <div className="amount-item">300</div>
                </div>
                <Button
                    text="确认缴费"
                    width="90%"
                    height="2rem"
                    background="#3775F6"
                    color="#fff"
                    margin="2rem auto"
                    onClick={submit} />
            </div>
            <div className="paynet-footer">

            </div>
        </div>
    )
}
export default PayNet