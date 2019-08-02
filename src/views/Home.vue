<template>
  <div class="home">
    <title-bar :bg="'#ff8198'" :color="'#ffffff'">
      <div slot="title">美丽说</div>
    </title-bar>

    <scroll ref="scroll" :probeType="3" @scroll="scroll"
    :pull-up-load="true" @pullingUp="loadMore">
      <div class="content">
          <swiper class="banner-swiper" ref="swiper" 
              :pagination="true" :initialSlide="0" :autoplay="true" :loop="true" :level="0">
              <swiper-item  v-for="(item,index) in bannerList" :key="index" >
                 <img :src="item.image">
              </swiper-item>
          </swiper>

          <ul class="recommend-list">
              <li v-for="(item,index) in recommendList" :key="index">
                <img :src="item.image" alt="" srcset="">
                <p>{{item.title}}</p>
              </li>
          </ul>

          <ul class="genre-nav" :class="{'hide':isGenreFixed}" ref="genrestaic">
              <li v-for="(item,index) in genreList" :key="index" 
                  @click.stop="activeSort=item.sort"  
                  :class="{'active':activeSort==item.sort}">
                   {{item.title}}
              </li>
          </ul>

          <ul class="goods-list">
              <li v-for="(item,index) in goodsData[activeSort].list" :key="index" @click="onLink(item.iid)">
                <div class="goods-pic-box">
                  <img v-lazy="item.show.img" :alt="item.title">
                </div>  
                <div>
                  <h5>{{item.title}}</h5>
                  <p>
                    <span class="new-price">￥{{item.price}}</span>
                    <span class="old-price">{{item.orgPrice}}</span>                
                  </p>
                </div>
              </li>
          </ul>

      </div>
    </scroll>

     <ul class="genre-nav fixed" v-show="isGenreFixed">
          <li v-for="(item,index) in genreList" :key="index" 
              @click.stop="activeSort=item.sort"  
              :class="{'active':activeSort==item.sort}">
                {{item.title}}
          </li>
     </ul>

    <tab-bar :default-color="$global.defaultColor" 
    :select-color="$global.selectColor" 
    :nav-list="$global.navList" />

    <back-top ref="backtop" :is-show="backtop_show"
     @backTopClick="backTopClick" />

  </div>
</template>

<script>
import TitleBar from 'components/common/titlebar/TitleBar'
import TabBar from 'components/common/tabbar/TabBar'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backtop/BackTop'
import {Swiper,SwiperItem} from 'components/content/swiper'
import {debounce} from 'common/utils'

import request from 'network/request'

export default {
  name: 'home',
  components: {
    TitleBar,
    TabBar,
    Scroll,
    BackTop,
    Swiper,
    SwiperItem
  },
  data() {
    return {
      backtop_show:false,
      bannerList:[],
      recommendList:[],
      goodsData:{
        pop:{
          page:1,
          list:[]
        },
        sell:{
          page:1,
          list:[]
        },
        new:{
          page:1,
          list:[]
        }
      },
      scrollY:0,
      genreList:[
        {sort: "pop", title: "流行"},
        {sort: "sell",title: "热销"},
        {sort: "new", title: "上新"}
      ],
      activeSort:"",
      isGenreFixed:false,
      genresY:500
    }
  },
  created () {
    this.activeSort="pop";
    this.getMultidata();
  },
  mounted(){

  },
  activated(){
    this.$refs.scroll.enable();
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0,this.scrollY);
    console.log("进入页面");
  },
  deactivated(){
    this.scrollY=this.$refs.scroll.getScrollY();
    this.$refs.scroll.stop();
    this.$refs.scroll.disable();
    console.log("离开页面");
  },
  methods: {
    loadMore(){
      this.getGoods();
    },
    onLink(id){
      this.$router.push({
        path:"goodsinfo",
        query:{
          id
        }
      })
    },
    getGoods(){
      let type=this.activeSort;
      let page=this.goodsData[type].page
        request({
          url: '/home/data',
          method: 'GET',
          params:{
            type,
            page
          }
        }).then(res=>{
          if(res){
              this.goodsData[type].list.push(...res.data.list);
              this.goodsData[type].page++;
          }         
          this.$refs.scroll.finishPullUp();
          console.log(this.goodsData)
        });
    },
    getMultidata(){
      request({
        url: '/home/multidata',
        method: 'GET'
      }).then(res=>{
        if(res){
            this.bannerList=res.data.banner.list;
            this.recommendList=res.data.recommend.list;
           
        }
        this.$nextTick(()=>{
           this.$refs.swiper.init();
        })
      });
    },
    backTopClick(){
      this.$refs.scroll.scrollTo();
    },
    getGenresY(){
      return this.$refs.genrestaic.offsetTop-this.$refs.genrestaic.offsetHeight;
    },
    scroll(){
      let _scrollY=-this.$refs.scroll.getScrollY();
      this.genresY=this.getGenresY();

      if(_scrollY>1000){
        this.backtop_show=true;
      }else{
        this.backtop_show=false;
      }
      
      if(_scrollY>this.genresY){
        this.isGenreFixed=true;
      }else{
        this.isGenreFixed=false;
      }
    }
  },
  watch: {
    activeSort(v){ 
      this.getGoods();
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
    height:150px;
    overflow: hidden;
  }
  .banner-swiper img{
    width: 100%;
    height:150px;
    object-fit: cover;
  }
  .recommend-list{
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 10px 25px 10px;
    border-bottom: 8px solid #eeeeee;
    text-align: center;
  }
  .recommend-list li img{
    width:70px;
    height: 70px;
  }
  .recommend-list li p{
    font-size: 14px;
    color: #333333;
  }
  .goods-list{
    display: flex;
    flex-flow: row wrap;
    padding: 15px;
  }
  .goods-list li{
    width: 165px;
    cursor:pointer;
    margin-bottom: 15px;
  }
  .goods-list li:nth-of-type(2n+1){
    margin-right: 15px;
  }
  .goods-list li .goods-pic-box{
    width: 100%;
    height: 220px;
    display: flex;
    border-radius: 6px;
    background: #f5f5f5;
    margin-bottom: 8px;
  }
  .goods-list li .goods-pic-box img{
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 6px;
    font-size: 12px;
  }
  .goods-list li h5{
    font-size: 14px;
    overflow: hidden;
    line-height: 18px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    flex-direction: column;
    height: 36px;
  }
  .goods-list li p{
    font-size: 14px;
    margin-top: 5px; 
  }
  .new-price{
    color: #F5003D;
    font-size: 16px;
    margin-right: 5px;
  }
  .old-price{
    color: #999999;
    font-size: 12px;
    text-decoration:line-through;
  }
  .genre-nav{
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding-top: 12px;
    height: 49px;
    background: #ffffff;
  }
  .genre-nav>li{
    cursor: pointer;
    font-size: 16px;
    position: relative;
  }
  .genre-nav>li.active{
    color: #ff8198;
  }
  .genre-nav>li.active::after{
    content: '';
    height: 2px;
    width: 24px;
    background: #ff8198;
    border-radius: 2px;
    position: absolute;
    bottom:-10px;
    left: 50%;
    margin-left: -12px;
  }
  .genre-nav.hide{
    opacity: 0;
    z-index: -2
  }
  .genre-nav.fixed{
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 1000;
  }
</style>
