import React from 'react'
import '../css/for-message'

// component
import ForTab from './ForTab'
import ReturnTitle from '@c/return-title'

const ForMessage = props => {
    return (
        <div id="ForMessage">
            <div className='message-header'>
                <ReturnTitle text='休闲交友' />
            </div>
            <div className='message-body'>
                message
            </div>
            <div className='message-footer'>
                <ForTab goForFriend={() => props.history.push('/forfriend')}
                    goForMessage={() => props.history.push('/formessage')}
                    goForMine={() => props.history.push('/formine')} />
            </div>
        </div>
    )
}

export default ForMessage