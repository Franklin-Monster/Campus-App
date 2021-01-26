import React from 'react'
import './not-found'

import ReturnTitle from '@c/return-title'
const NotFound = () => {
    return (
        <div id="NotFound">
            <div className="not-header">
                <ReturnTitle arrowColor="black" background="#FAFAFA" />
            </div>
            <div className="not-body">
                此页面正在开发中
            </div>
        </div>
    )
}


export default NotFound 