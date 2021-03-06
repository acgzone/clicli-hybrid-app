'use strict';

var apiready = function apiready() {

    var app = new Vue({
        el: '#app',
        data: {
            user: {}
        },
        mounted: function mounted() {
            this.user = api.pageParam.user;
        },

        methods: {
            goBack: function goBack() {
                api.closeWin();
            },
            getAvatar: function getAvatar(avatar) {
                if (/^[0-9]+$/.test(avatar)) {
                    return 'https://q2.qlogo.cn/headimg_dl?dst_uin=' + avatar + '&spec=100';
                } else {
                    var hash = md5(avatar);
                    return 'https://cdn.v2ex.com/gravatar/' + hash;
                }
            },
            logout: function logout() {
                $api.rmStorage('user-info');
                $api.setStorage('isLogin', '0');
                api.sendEvent({
                    name: 'logout'
                });
                api.closeWin();
            },
            getRole: function getRole(level) {
                if (level == 4) {
                    return '管理';
                } else if (level == 3) {
                    return '审核';
                } else if (level == 2) {
                    return '作者';
                } else {
                    return '用户';
                }
            }
        }
    });
};