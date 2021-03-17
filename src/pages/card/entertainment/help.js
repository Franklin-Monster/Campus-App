import newsImg1 from './img/news1'
import newsImg2 from './img/news2'

const countryNews = [
    '2020江西教育培训风云榜',
    '中国大学占地面积排名1-10名',
    '2021年金平果中国大学排行',
    '2020中国双一流大学排名',
    '庆祝中国共产党成立100周年 ',
    '2021央广网《我的大学》全国名校网上推介会正式开启',
    '19.9元拍写真却变2.6万元,女大学生背上网贷!',
    '2020年中国大学研究生院指数排名,中科大第三,仅次于清北!',
    '山西大学科研成果入选“中国高校十大科技进展',
    '校友会2020中国大学排名1200强出炉',
    '2021年大中城市联合招聘高校毕业生春季专场启动',
    '中国农业大学2021复试分数线,34所第一个发布,一个字,涨',
    '教学科研上云,中国地质大学携手EasyStack打造智慧校园'
]
const cityNews = [
    '天津市大学排名:天大与南开不相上下,天津理工排第五!',
    '天津市17所高校新增33个本科专业',
    '全面启动!天津大学召开党史学习教育动员大会',
    '2020年度中医药十大学术进展发布 天津中医药大学成果入选',
    '天津市4所高校MBA非全考情整理!',
    '天津市大学软件学院加入ACA世界大赛,形成全新人才生态系统',
    '天津市国资委原党委书记、主任彭三被查',
    '天津医科大学精神卫生中心成立',
    '天津市发布今年普通高校招生工作规定',
    '天津隐藏的巨无霸大学,不弱南开天大,却鲜为人知',
    '官宣| 正式批准!天津2所“新高校”来了!',
    '服务天津经济发展 76家国内顶级高校天津校友会“结盟”',
    '天津农学院升格天津农业大学,2021年期待功德圆满!'
]

const schoolNews = [
    '【党史学习教育】习近平同志《论中国共产党历史》出版发行',
    '【城大要闻】学校召开党史学习教育动员部署会暨2021年工作会议',
    '【城大要闻】我校召开党委工作会议',
    '【巡察动态】天津职业大学巡察工作办公室来我校调研',
    '【喜报】我校10个专业获批2020年国家级和天津市一流本科专业建设点',
    '【今日喜报】我校获批增设新工科“人工智能”本科专业',
    '【两会时间】我校师生热议2021年全国两会',
    '【学思践悟】习近平在中央党校（国家行政学院）中青年干部培训班开班式上...',
    '转发科技部关于发布国家重点研发计划“固废资源化”等6个重点专项2021年度...',
    '基金委发布2021年度国家自然科学基金委员会与比利时弗兰德研究基金会合作...',
    '关于申报第六届全国教育科学研究优秀成果评选奖励的通知',
    '高自考本科二学历教育2021年春季班招生简章',
    '关于申报2021年度国家社会科学基金项目的通知'
]

const News = {
    title: '天津职业大学巡察工作办公室来我校调研',
    time: '2021-03-05',
    article: [{
            type: 'text',
            content: `本校讯 3月4日上午，天津职业大学巡察工作办公室全体干部到我校就巡察工作进行调研交流，
                        学校巡察工作办公室全体干部参加了交流会。`
        },
        {
            type: 'image',
            content: newsImg1
        },
        {
            type: 'text',
            content: `交流会上，我校巡察工作办公室主要负责同志围绕巡察工作基本情况、
                    巡察人才库建设与培训、巡察整改评价等方面分享了我校经验做法，
                    详细介绍了第二届党委巡察工作五年规划及创建“城建特色”巡察工程的思路。
                    天津职业大学巡察工作办公室主要负责同志从巡察工作制度建设、
                    巡察整改日常监督等方面介绍了经验做法。
                    随后，双方就今年的巡察工作思路、高校巡察面临的困难及下一步工作等进行了深入地探讨与交流。`
        },
        {
            type: 'text',
            content: `天津职业大学巡察工作办公室主要负责同志对我校巡察工作给予了高度的评价，
                      认为在制度建设和巡察干部教育培养等多方面值得学习借鉴。
                      双方表示，今后将进一步加强交流，共同探讨高校巡察工作的新思路、新方法，
                      为推动市属高校巡察工作高质量发展做出贡献。`
        },
        {
            type: 'image',
            content: newsImg2
        },
        {
            type: 'text',
            content: `交流会后，调研组一行还参观了我校巡察工作办公室办公场所、
                     巡察组谈话室以及革命丰碑——天津革命遗址展览。`
        }
    ]
}
export {
    countryNews,
    cityNews,
    schoolNews,
    News
}