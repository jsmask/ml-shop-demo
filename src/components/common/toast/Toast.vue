<template>
    <div v-if="isShow" class="toast">
        {{message}}    
    </div>
</template>

<script>
    export default {
        name: "Toast",
        data() {
            return {
                message: "",
                isShow: false,
                timer:null
            }
        },
        methods: {
            show(msg = "",duration = 2000) {
                if(msg === "") return;
                this.message = msg;
                if(this.timer){
                    clearTimeout(this.timer);
                }
                this.isShow=true;
                this.timer=setTimeout(()=>{
                   this.isShow = false;
                   this.message = ""; 
                },duration)
            }
        },
    }
</script>

<style scoped>
.toast{
    background: rgba(0,0,0,0.7);
    position: fixed;
    color:#fff;
    left: 50%;
    bottom: 69px;
    transform: translateX(-50%);
    box-sizing: border-box;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    min-height: 20px;
    max-width: 200px;
    line-height: 20px;
    z-index: 9998;
    text-align: center;
    word-break: break-all;
}
</style>