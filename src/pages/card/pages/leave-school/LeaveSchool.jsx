import React from 'react' 
import './css/leaveschool'

// component
import ReturnTitle from '@c/return-title'
import Button from '@c/button'
const LeaveSchool = (props) => {
    return (
        <div id="LeaveSchool">
            <div className="leave-header">
                <ReturnTitle background="#D22E2E" text="校内人员电子通行证"/>
            </div>
            <div className="leave-body">
                
            </div>
            <div className="leave-footer">
                
            </div>
        </div>
    )
}

export default LeaveSchool