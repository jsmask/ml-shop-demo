
<template>
    <div>
        <title-bar :box-shadow="'0 1px 3px #eeeeee'" :has-back="true" :has-more="true" :more-icon="'&#xe62d;'">
            <div slot="title">商品</div>
        </title-bar>
        <scroll ref="scroll"  :probeType="3">
            <div class="content">
                <swiper class="banner-swiper" ref="swiper" 
              :pagination="true" :initialSlide="0" :autoplay="true" :loop="true" :level="0">
                    <swiper-item v-for="(item,index) in itemInfo.topImages" :key="index">
                        <img :src="item">
                    </swiper-item>
                </swiper>
                <div class="goods-info-main">
                    <h5>{{itemInfo.title}}</h5>
                    <p>
                        <span class="new-price">{{itemInfo.price}}</span>
                        <span class="old-price">{{itemInfo.oldPrice}}</span>
                        <span v-if="itemInfo.discountDesc" class="discount-desc" 
                        :style="{'background':itemInfo.discountBgColor}">{{itemInfo.discountDesc}}</span>
                    </p>
                    <ul>
                        <li v-for="(item,index) in columns" :key="index">
                            {{item}}
                        </li>
                    </ul>
                    <ul>
                        <li v-for="(item,index) in services" :key="index" v-show="item.icon">
                            <img :src="item.icon">
                            <span>{{item.name}}</span>
                        </li>
                    </ul>
                </div>

                <shop-box class="shop-box" :shop-info="shopInfo" v-if="shopInfo" />

                <div class="goods-img-main">
                    <h5>图文详情</h5>
                    <img v-lazy="item" v-for="(item,index) in infoPic" :key="index">
                </div>
            </div>
        </scroll>

        

        <cart-bar @onBuy="onBuy" @onJoinCart="onJoinCart"></cart-bar>
        
    </div>
</template>

<script>
    import TitleBar from 'components/common/titlebar/TitleBar'
    import Scroll from 'components/common/scroll/Scroll'
    import CartBar from 'components/content/cartbar/CartBar'
    import ShopBox from 'components/content/shopbox/ShopBox'
    import {Swiper,SwiperItem} from 'components/content/swiper'
    import request from 'network/request'

    export default {
        name:"GoodsInfo",
        data(){
            return {
                id:"",
                itemInfo:{
                    topImages:[],
                    title:"",
                    price:"",
                    oldPrice:"",
                    discountDesc:"",
                    discountBgColor:"",
                },
                columns:[],
                infoPic:[],
                services:[],
                shopInfo:null
            }
        },
        components:{
            TitleBar,
            Scroll,
            Swiper,
            SwiperItem,
            CartBar,
            ShopBox
        },
        created(){
            this.id=this.$route.query.id;
            this.getData();
        },
        mounted(){

        },
        methods: {
            onJoinCart(){
                this.$toast.show("加入购物车");
            },
            onBuy(){
                this.$toast.show("立即购买");
            },
            getData(){
                request({
                    url:"/detail",
                    method: 'GET',
                    params:{
                        iid:this.id
                    }
                }).then(res=>{
                    this.itemInfo=res.result.itemInfo;
                    this.infoPic=res.result.detailInfo.detailImage[0].list;
                    this.columns=res.result.columns;
                    this.services=res.result.shopInfo.services;
                    console.log(res.result)
                    this.columns[2]="72小时内发货";
                    this.$nextTick(()=>{
                        this.shopInfo=res.result.shopInfo;
                        this.$refs.swiper.init();
                    })
                });
            }
        },
    }
</script>

<style scoped>
  .content{
    position:relative;
    padding-top: 44px;
    padding-bottom:49px;
  }
  .banner-swiper{
    width:100%;
    height:300px;
    overflow: hidden; 
  }
  .banner-swiper img{
    width: 100%;
    height:auto;
  }
  .banner-swiper{
      background: #f5f5f5;
  }
  .goods-info-main{
      padding: 10px 0 2px 0;
  }
  .goods-info-main>h5{
      font-size: 16px;
      line-height: 20px;
      color: #333333;
      margin-bottom: 5px;
      padding: 0px 15px;
  }
  .goods-info-main>p{
      height: auto;
      display: flex;
      align-items: center;
      height: 30px;
      margin-bottom: 0px;
      padding: 0px 15px;
  }
  .cart-icon{
      width: 44px;
      line-height: 44px;
      height: 44px;
  }
  .goods-info-main>ul{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 15px;
      position: relative;
      height: 40px;
  }
  .goods-info-main ul:first-of-type::after{
      content: '';
      display: block;
      height: 1px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background: #eeeeee;
  }
  .goods-info-main{
      border-bottom: 5px solid #eeeeee;
  }
  .goods-info-main>ul>li{
      font-size: 12px;
      color: #666666;
  }
  .goods-info-main>ul>li img{
      width: 12px;
      height: 12px;
      vertical-align: middle;
      margin-right: 3px;
  }
  .goods-info-main>ul>li span{
      vertical-align: middle;
      font-size: 12px;
      color: #666666;
  }
   .new-price{
    color: #F5003D;
    font-size: 16px;
    margin-right: 10px;
  }
  .old-price{
    color: #999999;
    font-size: 12px;
    text-decoration:line-through;
  }
  .discount-desc{
      width: auto;
      padding: 0 6px;
      border-radius: 5px;
      height: 20px;
      line-height: 20px;
      font-size: 12px;
      color: #ffffff;
      margin-left: 15px;
      /* position: relative; */
  }
  .goods-img-main>h5{
      font-size: 16px;
      padding: 15px 15px;
  }
  .goods-img-main>img{
      width: 100%;
      height: auto;
      margin: 0;
      vertical-align: middle;
  }
  .shop-box{
      border-bottom: 5px solid #eeeeee;
  }
</style>