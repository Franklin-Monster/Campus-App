import React from 'react'
import './css/paycard'

// component
import Button from '@c/button'
import Message from '@c/message'
import TextRow from '@c/text-row'
import ReturnTitle from '@c/return-title'
import PullDownMenu from '@c/pull-down-menu'

const PayCard = (props) => {
    const submit = () => {
        Message({
            text: '充值成功',
            type: 'success'
        })
    }
    
    return (
        <div id="PayCard">
            <div className="paycard-header">
                <ReturnTitle text="卡片充值" />
            </div>
            <div className="paycard-body">
                <div className="input-content">
                    <TextRow frontText="支付密码" needInput={true} type="text" placeholder="请输入账号" />
                    <TextRow frontText="账号余额" lastText="" />
                    <PullDownMenu
                        title="支付方式"
                        selectArr={["一卡通", "校园卡绑定的银行卡"]}
                        pullColor="#FF4842" />
                    <TextRow frontText="充值金额" needInput={true} type="text" placeholder="请输入充值金额" />
                    <TextRow frontText="支付密码" needInput={true} type="password" placeholder="请输入校园卡密码" />

                </div>

            </div>
            <div className="paycard-footer">
                <Button
                    text="确认充值"
                    width="90%"
                    height="2rem"
                    background="#3775F6"
                    color="#fff"
                    margin="2rem auto"
                    onClick={submit} />
            </div>
        </div>
    )
}

export default PayCard