module.exports = { // meetarea
    PROJECT_COLOR: '#D59E32',
    NAV_COLOR: '#ffffff',
    NAV_BG: '#D59E32',

    // setup
    SETUP_CONTENT_ITEMS: [
        { title: '关于我们', key: 'SETUP_CONTENT_ABOUT' },
        { title: '用户注册使用协议', key: 'SETUP_YS' }
    ],

    // 用户 
    USER_FIELDS: [
        { mark: 'sex', title: '性别', type: 'select', selectOptions: ['男', '女'], must: true },
        { mark: 'birth', type: 'date', title: '出生年月', must: true },
        { mark: 'xueli', title: '学历', type: 'select', selectOptions: ['专科', '本科', '硕士研究生', '博士研究生', '其他'], must: true },
        { mark: 'desc', title: '楼栋房号', type: 'text', must: true },
    ],


    NEWS_NAME: '公告',
    NEWS_CATE: [
        { id: 1, title: '小区通知' },
        { id: 2, title: '物业动态' },
        { id: 3, title: '社区生活' },
        { id: 4, title: '便民服务' }, 
        { id: 5, title: '小区规约' }, 
    ],
    NEWS_FIELDS: [
        { mark: 'desc', type: 'textarea', title: '简介', must: true, min: 2, max: 200 },
        { mark: 'content', title: '详细内容', type: 'content', must: true },
        { mark: 'cover', type: 'image', title: '封面图', must: true, min: 1, max: 1 },
    ],


    MEET_NAME: '活动',
    MEET_CATE: [
        { id: 1, title: '邻里活动' },
        { id: 2, title: '公益活动' } ,
        { id: 3, title: '业主议事活动' },
    ],
    MEET_FIELDS: [
        { mark: 'cover', title: '封面图', type: 'image', min: 1, max: 1, must: true },
        {
            mark: 'time', title: '预约时段设置', type: 'rows', ext: { titleName: '时段', maxCnt: 15, minCnt: 1 },
            def: [{ title: '8点~12点' }, { title: '13点~18点' }],
            must: false
        },
        { mark: 'desc', title: '预约须知', type: 'content', must: true },
    ],
    MEET_JOIN_FIELDS: [
        { mark: 'name', type: 'text', title: '姓名', must: true, max: 30 },
        { mark: 'phone', type: 'mobile', title: '手机', must: true, edit: false }
    ],


}