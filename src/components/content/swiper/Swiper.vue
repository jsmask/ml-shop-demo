<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <div class="swiper-pagination" v-if="pagination"></div>
    </div>
</template>

<script>
    import "swiper/dist/css/swiper.min.css"
    import Swiper from 'swiper';
    import {SwiperItem} from 'components/content/swiper'
    
    export default {
        name:"Swiper",
        props:{
            level:{
                type:Number,
                default:0
            },
            pagination:{
                type:Boolean,
                default:false
            },
            initialSlide:{
                type:Number,
                default:0
            },
            speed:{
                type:Number,
                default:300
            },
            delay:{
                type:Number,
                default:3000
            },
            autoplay:{
                type:Boolean,
                default:false
            },
            loop:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return {
                swiper:null
            }
        },
        mounted(){
            
        },
        methods: {
            init(){
                this.swiper = new Swiper('.swiper-container', {
                    initialSlide:this.initialSlide,
                    speed:this.speed,
                    autoplay : this.autoplay?{delay:this.delay}:false,
                    loop: this.loop,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                });
                if(this.level==1){
                    this.swiper.on("slideChangeTransitionEnd",()=>{
                        this.$emit("slideChangeTransitionEnd");
                    });
                    this.swiper.on("slideChangeTransitionStart",()=>{
                        this.$emit("slideChangeTransitionStart");
                    })
                }
                if(this.level>=2){
                    this.swiper.on("sliderMove",()=>{
                        this.$emit("sliderMove");
                    })
                }
                
            },
            slideNext(){
                this.swiper.slideNext();
            },
            slidePrev(){
                this.swiper.slidePrev();
            },
            slideTo(index=0, delay=1000){
               this.swiper.slideTo(index,delay,false)
            }
        },
        watch: {
            
        }
    }
</script>

<style>
.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
    bottom: 10px;
    left: 0;
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.swiper-pagination-bullet.swiper-pagination-bullet-active{
    background: #F5003D;
}

</style>