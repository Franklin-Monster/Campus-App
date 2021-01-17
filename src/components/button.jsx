import React from 'react'
import './css/button'
import Message from './message'
import { Modal } from 'antd-mobile';

const Button = (props) => {
    const style = {
        width: props.width,
        height: props.height,
        lineHeight: props.height,
        color: props.color || '#000',
        background: props.background,
        margin: props.margin + ' auto' || '0 auto'
    }
    const onClick = () => {
        if (props.needConfirm) {
            Modal.alert(props.confirmTitle || '', props.confirmText || '您确定进行该操作吗？', [
                {
                    text: '取消', onPress: () => Message({
                        text: props.cancelText || '已取消',
                        type: 'warn'
                    })
                },
                {
                    text: '确定', onPress: () => {
                        props.onClick && props.onClick()
                        Message({
                            text: props.okText || '成功',
                            type: 'success'
                        })
                        return null
                    }
                },
            ])
        } else {
            props.onClick && props.onClick()
            return null
        }

    }
    return (
        <div id="Button" style={style} onClick={onClick}> {props.text} </div>
    )
}

export default Button 