export const pathnameToTitle = (key) => {
    const pathnameTable = {
        '/card': '应用',
        '/message': '消息',
        '/list': '通讯录',
        '/mycenter': '我的',
        '/paycenter': '充值缴费'
    };
    return pathnameTable[key] || '校园帮';
};