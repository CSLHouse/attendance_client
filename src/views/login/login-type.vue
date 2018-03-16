<style lang="less">
    @import 'login.less';
</style>

<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con">
            <Card :bordered="false">
                <Tabs type="card">
                    <TabPane label="扫码登录">
                        <p v-html="html" class="form-con-scan"></p>
                    </TabPane>
                    <TabPane label="账号登录">
                        <div class="form-con">
                            <Form ref="loginForm" :model="form" :rules="rules">
                                <FormItem prop="userName">
                                    <Input v-model="form.userName" placeholder="请输入企业邮箱账号">
                                    <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                                    </Input>
                                </FormItem>
                                <FormItem prop="password">
                                    <Input type="password" v-model="form.password" placeholder="请输入密码">
                                    <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                                    </Input>
                                </FormItem>
                                <FormItem>
                                    <Button @click="handleSubmit" type="primary" long>登录</Button>
                                </FormItem>
                            </Form>
                        </div>
                    </TabPane>
                </Tabs>
            </Card>
        </div>
    </div>
</template>

<script>
    import Cookies from 'js-cookie';
    export default {
        data () {
            return {
                html: '<div id="wx_reg"></div>',
                form: {
                    userName: '',
                    password: ''
                },
                rules: {
                    userName: [
                        { required: true, message: '账号不能为空', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' }
                    ]
                }
            };
        },
        created () {
            this.login();
        },
        mounted () {
            window.WwLogin({
                'id': 'wx_reg',
                'appid': 'ww22c9df14d89aff1f',
                'agentid': '1000003',
                'redirect_uri': 'http%3a%2f%2f155.test.intra.guocihuatai.com%2fui%2f',
                'state': 'guocihuatai',
                'href': ''
            });
        },
        destroyed () {
            this.$store.commit('setUserMail', 'true');
            console.log('login isscan:%s', this.$store.state.user.isScan);
        },
        methods: {
            login () {
                // console.log('$store isScan:%s', this.$store.state.user.isScan);
                // this.$store.commit('changeIsScan', true);
                // console.log('$store isScan:%s', this.$store.state.user.isScan);
                let code = this.$util.getUrlWithKey('code');
                // let code = this.$route.query.code;
                console.log('code:%s', code);
                if (code !== '') {
                    var url = '/?code=' + code + '&state=STATE';
                    // console.log(url);
                    this.$axios.get(url)
                        .then((response) => {
                            // this.$store.commit('setUserMail', response.data);
                            console.log('usermail:%s', response.data);
                            if (this.$store.state.user.userMail !== '') {
                                // window.location.href = 'http://155.test.intra.guocihuatai.com/ui' + '/#/home';
                            }
                        }).catch(function (response) {
                        // console.log(response);
                    });
                }
            },
            handleSubmit () {
                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        Cookies.set('user', this.form.userName);
                        this.$router.push({
                            name: 'home_index'
                        });
                    }
                });
            }
        }
    };
</script>
<style>

</style>
