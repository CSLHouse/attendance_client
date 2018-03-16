export default {
    islogin: false,
    columns8: [
        {
            'title': '姓名',
            'key': 'name',
            'fixed': 'left',
            'width': 100
        },
        {
            'title': '签到时间',
            'key': 'SignInTime',
            'width': 150
            // 'sortable': true
        },
        {
            'title': '签退时间',
            'key': 'signOutTime',
            'width': 150
            // 'sortable': true
        },
        {
            'title': '是否异常',
            'key': 'isNormal',
            'width': 150
        }
    ],
    data7: [
        {
            'name': 'Name1',
            'SignInTime': '2017-4-10 9:28:47',
            'signOutTime': '2017-4-10 19:18:28',
            'isNormal': '否'
        },
        {
            'name': 'Name2',
            'SignInTime': '2017-4-10 9:28:47',
            'signOutTime': '2017-4-10 19:18:28',
            'isNormal': '否'
        },
        {
            'name': 'Name3',
            'SignInTime': '2017-4-10 9:28:47',
            'signOutTime': '2017-4-10 19:18:28',
            'isNormal': '否'
        },
        {
            'name': 'Name4',
            'SignInTime': '2017-4-10 9:28:47',
            'signOutTime': '2017-4-10 19:18:28',
            'isNormal': '否'
        }
    ],
    options2: {
        shortcuts: [
            {
                text: '1 week',
                value () {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                    return [start, end];
                }
            },
            {
                text: '1 month',
                value () {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                    return [start, end];
                }
            },
            {
                text: '3 months',
                value () {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                    return [start, end];
                }
            }
        ]
    }
};
