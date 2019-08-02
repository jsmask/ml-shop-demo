<template>
    <div class="wrapper" ref="wrapper">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
    export default {
        name:"Scroll",
        props:{
            probeType: {
                type: Number,
                default: 0
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                scroll:null,
                options:{
                    bounceTime:500,
                    stopPropagation:true,
                    click:true,
                    probeType: this.probeType,
                    pullUpLoad: this.pullUpLoad,
                    enable:true
                }
            }
        },
        mounted(){
            this.scroll = new BScroll(this.$refs.wrapper,this.options);
            this.refresh();
            if (this.probeType === 2 || this.probeType === 3) {
                this.scroll.on('scroll', (position) => this.$emit('scroll', position));
            }
            if (this.pullUpLoad) {
                this.scroll.on('pullingUp', () => this.$emit('pullingUp'));
            }
            this.scroll.on("beforeScrollStart",()=>this.refresh());
        },
        methods: {
            refresh(){
                this.scroll&&this.scroll.refresh();              
            },
            scrollTo(x = 0, y = 0, duration = 240) {
                this.scroll && this.scroll.scrollTo(x, y, duration);
            },
            finishPullUp() {
                this.scroll && this.scroll.finishPullUp();
            },
            getScrollX() {
                return this.scroll ? this.scroll.x : 0;
            },
            getScrollY() {
                return this.scroll ? this.scroll.y : 0;
            },
            enable(){
                this.scroll && this.scroll.enable();
            },
            disable(){
                this.scroll && this.scroll.disable();
            },
            destroy(){
                this.scroll && this.scroll.destroy();
            },
            stop(){
                this.scroll && this.scroll.stop();
            }
        },

    }
</script>

<style scoped>
.wrapper{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
}
</style>