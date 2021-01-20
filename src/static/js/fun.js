const history = require("history").createBrowserHistory()

export const returnBack = () => {
    return history.goBack();
}

export const goRoute = (route) => {
    history.push(route);
    return history.go()
}

export const pathnameToTitle = (key) => {
    const pathnameTable = {
        '/card': '应用',
        '/message': '消息',
        '/list': '通讯录',
        '/mycenter': '我的',
    };
    return pathnameTable[key] || null;
};

