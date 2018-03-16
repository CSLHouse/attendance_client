<template>
    <h1>Test</h1>
</template>

<script>
    export default {
        created () {
            this.login();
            // if (user.usermail === '') {
            //     //跳转到微信授权页面
            //     console.log('进入授权');
            //     window.location.href = 'http://155.test.intra.guocihuatai.com' + '/#/login';
            // }else {
            //     this.login();
            // }
        },
        methods: {
            login () {
                // console.log('$store isScan:%s', this.$store.state.user.isScan);
                // this.$store.commit('changeIsScan', true);
                // console.log('$store isScan:%s', this.$store.state.user.isScan);
                let code = this.$util.getUrlWithKey('code');
                var url = '/?code=' + code + '&state=STATE';
                // console.log(url);
                this.$axios.get(url)
                    .then((response) => {
                        this.$store.commit('setUserMail', response.data);
                        console.log('usermail:%s', response.data);
                        if (this.$store.state.user.userMail !== '') {
                            window.location.href = 'http://155.test.intra.guocihuatai.com/ui' + '/#/home';
                        }
                    }).catch(function (response) {
                    // console.log(response);
                });
            }
        }

    };
</script>
