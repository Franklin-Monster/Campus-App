import React, { useState, useRef } from 'react'
import { withRouter } from 'react-router-dom';
import cookie from 'react-cookies'
import '../../static/css/phoneLogin'
import { returnBack } from '../../static/js/fun'

// component 
import Message from '@c/message'

// image
import ReturnArrow from '../../assets/images/return'
import Close from '../../assets/images/close'


const PhoneLogin = (props) => {
    const [userPhone, setUserPhone] = useState(null)
    const [code, setCode] = useState(null)
    let [codeSecond, setCodeSecond] = useState(60)
    const phoneRef = useRef()
    const codeRef = useRef()
    const getCodeRef = useRef()

    // 监听手机号   
    const onPhoneChange = (e) => {
        let v = e.target.value
        if (v.length >= 11) {
            e.target.value = v.slice(0, 11)
            setUserPhone(v)
        } else setUserPhone(null)
    }
    // 监听验证码
    const onCodeChange = (e) => {
        let v = e.target.value
        if (v.length === 6) {
            setCode(v)
        } else setCode(null)
    }
    // 获取验证码
    let sendCodeTimer = null
    const getCode = () => {
        if (userPhone && codeSecond === 60) {
            if (getCodeRef) {
                getCodeRef.current.style.color = '#aaa'
                sendCodeTimer = setInterval(() => {
                    setCodeSecond(codeSecond--)
                    if (codeSecond < 1) {
                        getCodeRef.current.innerText = '获取验证码'
                        setCodeSecond(60)
                        clearInterval(sendCodeTimer)
                    }
                    if (codeSecond >= 1) {
                        getCodeRef.current.innerText = `${codeSecond}s`
                    }
                }, 1000);
                Message({
                    text: '发送验证码成功',
                    type: 'success'
                })
            }
        }
    }
    // 下一步
    const nextStep = () => {
        if (userPhone && code) {
            clearInterval(sendCodeTimer)
            cookie.save('isLogin', true)
            props.history.push('/')
        }
    }
    return (
        <div id="PhoneLogin">
            <div className="phone-header">
                <div className="header-return" onClick={returnBack}>
                    <img src={ReturnArrow} alt="return"></img>
                </div>
                <div className="header-password">密码登录</div>
            </div>
            <div className="phone-body">
                <div className="body-title">
                    手机号登录
                </div>
                <div className="body-info">
                    未注册手机号验证后将自动登录
                </div>
                <div className="body-input">
                    <div className="phone-input">
                        <span className="phone-front">+86</span>
                        <input type="number"
                            ref={phoneRef} placeholder="请输入手机号码"
                            onChange={onPhoneChange} />
                        <span className="phone-end"
                            style={{ display: userPhone ? 'inline-block' : 'none' }}
                            onClick={() => { phoneRef.current.value = ''; setUserPhone(null) }}>
                            <img src={Close} alt="close"></img>
                        </span>
                    </div>
                    <div className="code-input">
                        <input type="text"
                            ref={codeRef}
                            placeholder="请输入验证码"
                            maxLength="6"
                            onChange={onCodeChange} />
                        <span className="code-img"
                            style={{
                                color: userPhone && (getCodeRef.current.innerText === '获取验证码')
                                    ? '#FE3313'
                                    : '#aaa'
                            }}
                            onClick={getCode}
                            ref={getCodeRef}>
                            获取验证码
                        </span>
                        <span className="code-end"
                            style={{ display: code ? 'inline-block' : 'none' }}
                            onClick={() => { codeRef.current.value = ''; setCode(null) }} >
                            <img src={Close} alt="close"></img>
                        </span>
                    </div>
                </div>
                <div className="body-button" onClick={nextStep}>
                    继续
                </div>
            </div>
            <div className="phone-footer"> </div>
        </div>
    )
}
export default withRouter(PhoneLogin)