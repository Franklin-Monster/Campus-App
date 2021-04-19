import React, { useRef } from 'react'
import { withRouter } from 'react-router-dom';
import '../css/divide-group-item'

// image
import Avator from '../img/avator'

const DivideGroupItem = (props) => {
    const groupRef = useRef()
    const triaRef = useRef()
    const pullHeight = ((props.groupMember.length + 1) * 3.4) + 'rem'

    // 控制分组开关
    const groupClick = () => {
        let groupStyle = groupRef.current.style
        let triaStyle = triaRef.current.style
        if (groupStyle.height === pullHeight) {
            triaStyle.transform = 'rotate(0deg)'
            groupStyle.height = '3rem'
        } else {
            triaStyle.transform = 'rotate(90deg)'
            groupStyle.height = pullHeight
        }
    }

    return (
        <div id="DivideGroupItem" ref={groupRef}>
            <div className="divide-group" onClick={groupClick} >
                <div className="item-tria" ref={triaRef}></div>
                <div className="item-text">{props.groupName}</div>
                <div className="item-scale">{props.groupMember.length}/{props.groupMember.length}</div>
            </div>
            {
                props.groupMember.map((member, index) => {
                    return (
                        <div
                            className="member-item"
                            key={index}
                            onClick={() => props.history.push('/friendinfo')}>
                            <div className="member-avator">
                                <img src={member.avator || Avator} alt="avator" />
                            </div>
                            <div className="member-info">
                                <div className="member-name">
                                    {member.name}
                                </div>
                                <div className="member-sign">
                                    {member.sign || member.class}
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default withRouter(DivideGroupItem)