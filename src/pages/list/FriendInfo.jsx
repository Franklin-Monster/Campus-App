import React from 'react'
import ReturnTitle from '@c/return-title'
import './css/friend-info'

// image
import More from './img/more'

const FriendInfo = () => {
    return (
        <div id="FriendInfo">
            <div className="friend-header">
                <ReturnTitle arrowColor='black' background="#FAFAFA" text="" rightImg={More}/>
            </div>
            <div className="friend-body">
                <div className="friend-info">
                    <div className="friend-avator">

                    </div>
                    <div className="friend-name">

                    </div>
                </div>
            </div>
            <div className="friend-footer">
                
            </div>
        </div>
    )
}

export default FriendInfo