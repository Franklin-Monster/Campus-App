import React from 'react'
import '../css/for-mine'

// component
import ForTab from './ForTab'
import ReturnTitle from '@c/return-title'

const ForMine = props => {
    return (
        <div id="ForMine">
            <div className='mine-header'>
                <ReturnTitle text='休闲交友' />
            </div>
            <div className='mine-body'>
wode
            </div>
            <div className='mine-footer'>
                <ForTab goForFriend={() => props.history.push('/forfriend')}
                    goForMessage={() => props.history.push('/formessage')}
                    goForMine={() => props.history.push('/formine')} />
            </div>
        </div>
    )
}

export default ForMine