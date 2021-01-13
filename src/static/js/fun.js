export const pathnameToTitle = (key) => {
    const pathnameTable = {
        '/card': '应用',
        '/message': '消息',
        '/list': '通讯录',
        '/mycenter': '我的',
    };
    return pathnameTable[key] || null;
};

export const returnBack = () => {
    const history = require("history").createBrowserHistory()
    return history.goBack();
}