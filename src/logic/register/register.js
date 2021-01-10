import React from 'react'
import '../../static/css/register'

// image
import ReturnArrow from '../../assets/images/return'
import Teacher from '../../assets/images/teacher'
import Student from '../../assets/images/student'
const Register = () => {
    const history = require("history").createHashHistory()
    const returnClick = () => {
        history.goBack();
    }
    return (
        <div id="Register">
            <div className="register-header">
                <div className="header-return" onClick={returnClick}>
                    <img src={ReturnArrow} alt="return"></img>
                </div>
            </div>
            <div className="register-body">
                <div className="body-title">
                    请选择您的身份
                </div>
                <div className="identity-content">
                    <div className="identity-item">
                        <img src={Student} alt="student" />
                        <div className="identity-text">我是学生</div>
                    </div>
                    <div className="identity-item">
                        <img src={Teacher} alt="teacher" />
                        <div className="identity-text">我是教师</div>
                    </div>
                </div>
            </div>
            <div className="register-footer">

            </div>
        </div>
    )
}
export default Register