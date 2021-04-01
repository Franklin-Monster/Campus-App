const history = require("history").createHashHistory()

export const returnBack = () => {
    return history.goBack();
}

export const goRoute = (route) => {
    history.push(route);
    return history.go()
}

export const pathnameToTitle = (key) => {
    const pathnameTable = {
        '#/card': '应用',
        '#/message': '消息',
        '#/list': '通讯录',
        '#/mycenter': '我的',
    };
    return pathnameTable[key] || null;
};

// 获取当前时间 格式： 上午 12:00
export const getNowTime = () => {
    const date = new Date().toLocaleTimeString().split(':')
    date.pop()
    const dataFormate = date.join().replace(',', ':').split('')
    const firstTime = dataFormate.slice(0, 2).join('')
    const lastTime = dataFormate.slice(2).join('')
    return (
        <div className="message-time">
            {firstTime}&nbsp;{lastTime}
        </div>
    )
}

// 格式化当前时间 格式：2021-3-31 9:09
export const formatNowTime = time => {
    const date = time || new Date(Date.now())
    const newDate = date.toLocaleDateString().split('/').join('-')
    const nowTime = date.toLocaleTimeString().slice(2).slice(0, -3)
    return newDate + ' ' + nowTime
}

// 防抖
export const debounce = (fn, time) => {
    let timer = null
    return () => {
        if(timer) clearTimeout(timer)
        timer = setTimeout(fn, time)
    }
}
