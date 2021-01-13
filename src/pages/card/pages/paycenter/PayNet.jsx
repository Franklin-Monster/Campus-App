import React from 'react'
import { returnBack } from '../../../../static/js/fun'
import './css/paynet'

// component
import PullDownMenu from '../../../../components/pull-down-menu'

// image
import ReturnArrow from './img/return'

const PayNet = (props) => {
    return (
        <div id="PayNet">
            <div className="paynet-header">
                <img src={ReturnArrow} alt='return' onClick={returnBack} />交网费
            </div>
            <div className="paynet-body">
                <div className="input-item"><span>上网账号</span><input type="number" /></div>
                <div className="input-item">
                    <span>账号明细</span>
                    <span className="pay-detailed"></span>
                </div>
                <PullDownMenu title="支付方式" selectArr={[1, 2, 3, 4, 5]} />
                <div className="input-item"><span>缴费金额</span><input type="number" /></div>
                <div className="input-item"><span>支付密码</span><input type="text" /></div>
            </div>
            <div className="paynet-footer">
                
            </div>
        </div>
    )
}
export default PayNet