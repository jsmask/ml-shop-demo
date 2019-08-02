<template>
    <div class="cart-bar">
        <div class="c-ico" @click.stop="onService">
            <i class="iconfont">&#xe646;</i>
            <p>客服</p>
        </div>
        <div class="c-ico" @click.stop="onShop">
            <i class="iconfont">&#xe641;</i>
            <p>店铺</p>
        </div>
        <div class="c-ico" @click.stop="onCollect">
            <i class="iconfont">&#xe639;</i>
            <p>收藏</p>
        </div>
        <div class="join c-btn"  @click.stop="onJoinCart">加入购物车</div>
        <div class="buy c-btn" @click.stop="onBuy">立即购买</div>
    </div>
</template>

<script>
    export default {
        name:"CartBar",
        methods: {
            onJoinCart() {
                this.$emit("onJoinCart");
            },
            onBuy(){
                this.$emit("onBuy");
            },
            onCollect(){
                this.$emit("onCollect");
            },
            onShop(){
                this.$emit("onShop");
            },
            onService(){
                this.$emit("onService");
            }
        },
    }
</script>

<style scoped>
.cart-bar{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ffffff;
    height: 49px;
    display: flex;
    align-items: center;
    box-shadow: -1px 2px 2px #eeeeee;
    font-size: 14px;
    text-align: center;
}
.c-btn{
    flex: 1.7;
    height: 49px;
    font-size: 14px;
    line-height: 49px;
    cursor: pointer;
}
.c-ico{
    flex: 1;
    height: 49px;
    cursor: pointer;
    font-size: 12px;
    padding-top: 10px;
}
.join{
    background: #ffe817;
    color: #333333;
}
.buy{
    background-color: #f69;
    color: #ffffff;
}
.cart-bar .iconfont{
    font-size: 22px;
}
.cart-bar .c-ico:nth-of-type(1){
    padding-top: 8px;
    border-right: 1px solid #f5f5f5;
}
.cart-bar .c-ico:nth-of-type(3){
    padding-top: 8px;
    border-left: 1px solid #f5f5f5;
}
.cart-bar .c-ico:nth-of-type(2) .iconfont{
    font-size: 20px;
}
.c-ico p{
    margin-top: 3px;
}
</style>