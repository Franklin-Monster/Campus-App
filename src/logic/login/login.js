import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import '../../static/css/login'

// component
import Message from '@c/message'
import Button from '@c/button'

// image
import Logo from '../../assets/images/logo'

const Login = props => {
    const [isAgree, setIsAgree] = useState(false)
    const phoneLogin = () => {
        if (isAgree) {
            props.history.push('/phonelogin')
        } else {
            Message({
                type: 'warn',
                text: '请同意隐私条款'
            })
        }
    }
    const wxLogin = () => {
        if (isAgree) {
            props.history.push('/wxlogin')
        } else {
            Message({
                type: 'warn',
                text: '请同意隐私条款'
            })
        }

    }
    const onAgreeChange = (e) => {
        setIsAgree(e.target.checked)
    }
    return (
        <div id="Login">
            <div className="login-header">
                <div className="header-logo">
                    <img src={Logo} alt="logo" />
                </div>
            </div>
            <div className="login-body">
            </div>
            <div className="login-footer">
                <Button text="微信登录" color='#4EC9B0' margin='1rem auto' onClick={wxLogin}></Button>
                <Button text="手机号登录" color="#67CDFE" margin='.5rem auto' onClick={phoneLogin}></Button>
                <div className="login-agree">
                    <input type="checkbox" className="check-box" name="agree" value="同意" onChange={onAgreeChange} />
                    同意校园帮 <strong>用户协议</strong> 和 <strong>隐私政策</strong>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login)