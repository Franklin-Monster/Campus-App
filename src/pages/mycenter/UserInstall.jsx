import React from 'react'
import './css/user-install'

// component
import Button from '@c/button'
import ArrowMenu from '@c/arrow-menu'
import ReturnTitle from '@c/return-title'

const UserInstall = () => {
    return (
        <div id="UserInstall">
            <div className="install-header">
                <ReturnTitle text="设置" />
            </div>
            <div className="install-body">
                <ArrowMenu text="黑名单" />
                <ArrowMenu text="新消息通知" />
                <ArrowMenu text="账号绑定" margin=".5rem 0" />
                <ArrowMenu text="帮助与反馈" />
                <ArrowMenu text="清除缓存" />
                <ArrowMenu text="关于校园帮" margin=".5rem 0" />
            </div>
            <div className="install-footer">
                <Button
                    text="退出登录"
                    color="#fff"
                    background="#F56C6C"
                    padding=".5rem 0"
                    needConfirm={true}
                    confirmText="您确定退出当前账号吗？"
                    successText="退出成功" />
            </div>
        </div>
    )
}

export default UserInstall