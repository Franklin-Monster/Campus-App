import React from 'react'
import './css/paycard.scss'

// component
import Button from '../../../../components/button'
import Message from '../../../../components/message'
import ReturnTitle from '../../../../components/return-title'
import PullDownMenu from '../../../../components/pull-down-menu'


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
                    <div className="input-item">
                        <span>支付密码</span>
                        <input type="text" placeholder="请输入账号" />
                    </div>
                    <div className="input-item">
                        <span>账号余额</span>
                        <span className="account-detailed"></span>
                    </div>
                    <PullDownMenu
                        title="支付方式"
                        selectArr={["一卡通", "校园卡绑定的银行卡"]}
                        pullColor="#FF4842" />
                    <div className="input-item">
                        <span>充值金额</span>
                        <input type="text" placeholder="请输入充值金额" />
                    </div>
                    <div className="input-item">
                        <span>支付密码</span>
                        <input type="text" placeholder="请输入校园卡密码" />
                    </div>

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