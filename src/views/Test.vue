<template>
  <div class="home">
    <title-bar :has-back="true" :has-more="true" @onMore="onMore">
      <div slot="title">测试</div>
    </title-bar>

    <scroll ref="scroll" :probeType="3" @scroll="scroll">
      <ul class="content">
        <li @click="openLoding">第1条 开启加载Loading</li>
        <li @click="openToast">第2条 开启吐司Toast</li>
        <li @click="onNetwork">第3条 网络模块 network</li>
        <li>第4条 滚动条 Scroll组件</li>
        <li>第5条 标题栏 TitleBar组件</li>
        <li>第6条 导航栏 TabBar组件</li>
        <li>第7条 轮播图 Swiper组件</li>
        <li>第8条 返回头 BackTop组件</li>
        <li>第9条</li>
        <li>第10条</li>
        <li>第11条</li>
        <li>第12条</li>
        <li>第13条</li>
        <li>第14条</li>
        <li>第15条</li>
        <li>第16条</li>
        <li>第17条</li>
        <li>第18条</li>
        <li>第19条</li>
        <li>第20条</li>
        <li>第21条</li>
        <li>第22条</li>
        <li>第23条</li>
        <li>第24条</li>
        <li>第25条</li>
        <li>第26条</li>
        <li>第27条</li>
        <li>第28条</li>
        <li>第29条</li>
        <li>第30条</li>
        <li>第31条</li>
        <li>第32条</li>
        <li>第33条</li>
        <li>第34条</li>
        <li>第35条</li>
        <li>第36条</li>
      </ul>
    </scroll>

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
import axios from 'axios'

import request from 'network/request'

export default {
  name: 'test',
  components: {
    TitleBar,
    TabBar,
    Scroll,
    BackTop
  },
  data() {
    return {
      backtop_show:false
    }
  },
  mounted(){
    // this.$nextTick(()=>{
    //   this.$refs.scroll.refresh()
    // });
    
  },
  activated(){
    console.log("进入页面"); 
  },
  deactivated(){
    console.log("离开页面");
  },
  methods: {
    onMore(){
      console.log("点击更多")
    },
    onNetwork(){
      request({
        url: '/home/multidata',
        method: 'GET'
      }).then(res=>{
        console.log(res)
      });
    },
    openLoding(){
      this.$loading.show();
      setTimeout(()=>{
        this.$loading.hide();
      },3000);
    },
    openToast(){
      this.$toast.show("触发吐司:"+~~(Math.random()*1000));
    },
    backTopClick(){
      this.$refs.scroll.scrollTo();
    },
    scroll(){
      let _scrollY=-this.$refs.scroll.getScrollY();
      if(_scrollY>1000){
        this.backtop_show=true;
      }else{
        this.backtop_show=false;
      }
    }
  }
}
</script>

<style scoped>
  .content{
    position:relative;
    padding-top: 44px;
    padding-bottom:49px;
    background: #9ce2bc;
  }
  .content li:first-of-type{
    margin-top: 20px;
  }
  .content li{
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    background: #fff;
    border:2px darkgoldenrod double;
    padding: 0 20px;
    width: 345px;
    border-radius: 5px;
    display: block;
    margin: 0 auto 20px;
  }
</style>
