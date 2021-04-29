import React from 'react'
import '../css/for-mine'

// component
import ForTab from './ForTab'
import ArrowMenu from '@c/arrow-menu'
import ReturnTitle from '@c/return-title'

// image
import Edit from '../img/edit'
import Album from '../img/album'
import Install from '../img/install'
import Avator from '../img/avator.JPG'
import CameraOrgane from '../img/camera-organe'

const ForMine = props => {
    return (
        <div id="ForMine">
            <div className='mine-header'>
                <ReturnTitle
                    text='休闲交友'
                    background="#FC5531"
                    returnClick={() => props.history.push('/card')} />
            </div>
            <div className='mine-body'>
                <div className="mine-info">
                    <img src={Avator} alt="avator" />
                    <div className="mine-name">
                        Franklin
                    </div>
                    <div className="mine-edit">
                        <img src={Edit} alt="edit" />
                        <span>编辑资料</span>
                    </div>
                </div>
                <div className="mine-count">
                    <div className="count-item">
                        <div className="count-item-number">6</div>
                        <div className="count-item-text">相册</div>
                    </div>
                    <div className="count-item">
                        <div className="count-item-number">24</div>
                        <div className="count-item-text">粉丝</div>
                    </div>
                    <div className="count-item">
                        <div className="count-item-number">1</div>
                        <div className="count-item-text">关注</div>
                    </div>
                    <div className="count-item">
                        <div className="count-item-number">1</div>
                        <div className="count-item-text">喜欢</div>
                    </div>
                </div>
                <div className="publish-image">
                    <img src={CameraOrgane} alt="camera" />
                    <span>发布动态</span>
                </div>
                <div className="arrow-menu-content">
                    <ArrowMenu frontImg={Album} text="个人相册" />
                    <ArrowMenu frontImg={Install} text="设置" />
                </div>
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