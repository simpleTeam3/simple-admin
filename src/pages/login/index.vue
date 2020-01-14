<template>
    <div class="login-box">
        <h3 class="login-title">vut-admin</h3>
        <div class="login-box-container">
            <vut-input></vut-input>
            <vut-input type="password"></vut-input>
            <vut-button type="primary" class="login-btn" @click="submit">登录</vut-button>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { login } from '~/api/login';

export default {
    data(){
        return {
            username: 'admin',
            password: 'admin'
        }
    },
    mounted(){
        console.log(this);
        // console.log(store);
        console.log(this.$store);
    },
    methods: {
        submit(){
            this.$store.dispatch('loginByAccount', {
                username: this.username,
                password: this.password
            }).then(() => {
                this.$router.push({ path: '/'})
            }).catch((error) => {
                console.log(error);
            })
        }
    }
}
</script>
<style lang="scss">
.login-box{
    border: 1px solid #fff;
    padding: 30px 50px;
    background-color: rgba(233, 255, 255, 0.1)
}
.login-title{
    font-size: 42px;
    color: #fff;
}
.login-box-container{
    margin: 0 auto;
    width: 300px;

    .vut-input-wrap{
        margin-top: 10px;
    }

    .login-btn{
        margin-top: 20px;
        width: 300px;
    }
}
</style>

