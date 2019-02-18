<template>
    <div class="index-login">
        <div class="fullscreen"></div>
        <div class="login-view">
            <router-view></router-view>
        </div>
        <footer class="login-footer">
            <div class="link">
                <a>Vut-admin</a>
                <a>Vut UI</a>
                <a>Github</a>
                <p>© Simple Team 出品</p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style rel="stylesheet/scss" lang="scss">
.index-login{
    background: linear-gradient(#37495f, #51b881); /* 37495f 51b881*/
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.fullscreen{
    // background: url("https://images.unsplash.com/photo-1487564149407-9fb3522e2ceb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80");
    background-position: 50% 50%;
    height: 100%;
    width: 100%;
    position: absolute;
    top:0;
    left: 0;
    z-index: 1;
}
.login-footer{
    position: absolute;
    bottom:1px;
    left: 0;
    color: #fff;
    font-size: 16px;
    z-index: 11;

    .link{
        padding-left: 10px;
        line-height: 22px;
    }

    a{
        font-weight: 600;
        margin-right: 15px;
    }

    p{
        font-size: 14px;
        text-align: left;
    }
}
.login-view{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
}
</style>
