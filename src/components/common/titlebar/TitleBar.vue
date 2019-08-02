<template>
    <div>
        <header class="msk-title-bar" :style="{'background':bg,'color':color,'box-shadow':boxShadow}">
            <div class="left" @click="onBack">
                <i class="iconfont" v-if="hasBack">&#xe605;</i>
                <slot name="back" v-else></slot>
            </div>
            <div class="center"><slot name="title"></slot></div>
            <div class="right" @click="onMore">
                <i class="iconfont" v-if="hasMore" v-html="moreIcon"></i>
                <slot name="more" v-else></slot>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        name:"TitleBar",
        props:{
            boxShadow:{
                type:String,
                default:"none"
            },
            moreIcon:{
                type:String,
                default:"&#xe614;"
            },
            color:{
                type:String,
                default:"#333333"
            },
            bg:{
                type:String,
                default:"#fefefe"
            },
            hasBack:{
                type: Boolean,
                default: false
            },
            hasMore:{
                type: Boolean,
                default: false
            }
        },
        mounted(){

        },
        methods: {
            onBack(e){
                e.preventDefault();
                this.$router.go(-1);
                this.$emit("onBack"); 
            },
            onMore(e){
                e.preventDefault();
                this.$emit("onMore");
            }
        }
    }
</script>

<style scoped>
    .msk-title-bar{
        height: 44px;
        width: 100%;
        position: fixed;
        background: #fefefe;
        z-index: 1000;
        left: 0;
        right: 0;
        top:0;
        display: flex;
        background: #ffffff;
    }
    .left{
        width: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .center{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
    }
    .right{
        width: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
</style>