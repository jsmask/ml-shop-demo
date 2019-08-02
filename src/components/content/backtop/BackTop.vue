<template>
    <div>
        <div class="msk-back-top" v-show="isShow" @click="backTopCkick">
            <i class="iconfont">&#xe62c;</i>
        </div>
    </div>
</template>

<script>
    export default {
        name:"BackTop",
        props:{
            isShow:{
                type:Boolean,
                default:false
            }
        },
        methods: {
            backTopCkick() {
                this.$emit("backTopClick")
            }
        }
    }
</script>

<style scoped>
.msk-back-top{
    width: 48px;
    height: 48px;
    border-radius: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #333;
    box-shadow: 2px 3px 5px #eeeeee;
    position: fixed;
    z-index: 1001;
    right: 15px;
    bottom: 65px;
    transition: .1s all;
    user-select: none;
}
.msk-back-top:active{
    transform: scale(1.2);
}
.msk-back-top i{
    font-size: 24px;
}
</style>