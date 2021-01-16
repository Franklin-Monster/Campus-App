import React from 'react'
import ReturnTitle from '@c/return-title'
import Mine from './img/mine'
import './css/payphone'
const PayPhone = (props) => {
    return (
        <div id="PayPhone">
            <div className="payphone-header">
                <ReturnTitle text="手机充值" />
            </div>
            <div className="payphone-body">
                <div className="input-number">
                    <input type="number" placeholder="请输入手机号码" /><img src={Mine} alt="mine" />
                </div>
                <div className="select-title">
                    充话费
                </div>
                <div className="select-amount">
                    <div className="amount-item">
                        <div className="amount-money">30元</div>
                        <div className="sell-money">售价29.97元</div>
                    </div>
                    <div className="amount-item">
                        <div className="amount-money">50元</div>
                        <div className="sell-money">售价49.95元</div>
                    </div>
                    <div className="amount-item">
                        <div className="amount-money">100元</div>
                        <div className="sell-money">售价99.90元</div>
                    </div>
                </div>
                <div className="select-amount">
                    <div className="amount-item">
                        <div className="amount-money">200元</div>
                        <div className="sell-money">售价199.80元</div>
                    </div>
                    <div className="amount-item">
                        <div className="amount-money">300元</div>
                        <div className="sell-money">售价299.70元</div>
                    </div>
                    <div className="amount-item">
                        <div className="amount-money">500元</div>
                        <div className="sell-money">售价499.50元</div>
                    </div>
                </div>
                <div className="select-title">
                    更多充值
                </div>
                <div className="select-amount">
                    <div className="amount-item">
                        <div className="amount-money">更多流量</div>
                        <div className="sell-money">多类型随心选</div>
                    </div>
                    <div className="amount-item">
                        <div className="amount-money">余额查询</div>
                        <div className="sell-money">查话费查流量</div>
                    </div>
                    <div className="amount-item none"></div>
                </div>
            </div>
            <div className="payphone-footer">
                <div>客服帮助</div>
                <div>|</div>
                <div>自动充</div>
                <div>|</div>
                <div>用户协议</div>
                <div>|</div>
                <div>更多功能</div>
            </div>
        </div>
    )

}

export default PayPhone