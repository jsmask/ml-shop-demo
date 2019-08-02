<template>
    <div class="msk-tabbar-item" :style="{color:(isSelect?selectColor:defaultColor)}" @click.stop="toPath">
        <i class="iconfont" v-html="icon"></i>
        <p>{{name}}</p>
    </div>
</template>

<script>
    export default {
        name:"TabBarItem",
        props:{
            defaultColor:String,
            selectColor:String,
            name:String,
            icon:String,
            path:String
        },
        data(){
            return {
                isSelect:false
            }
        },
        mounted(){
             if(this.path===this.$route.path){
                 this.isSelect=true;
             }
        },
        methods: {
            toPath(){
                this.$router.push(this.path)
            }
        }
    }
</script>

<style scoped>
    .msk-tabbar-item{
        flex: 1;
        height:49px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        cursor: pointer;
        padding: 2px;
        color: #999999;
    }
    .msk-tabbar-item i{
        font-size: 20px;
        display: block;
        width: 100%;
        text-align: center;
    }
    .msk-tabbar-item p{
        font-size: 12px;
    }
</style>