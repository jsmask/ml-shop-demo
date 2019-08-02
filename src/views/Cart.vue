<template>
  <div class="home">
    <title-bar :bg="'#ff8198'" :color="'#ffffff'">
      <div slot="title">购物车</div>
    </title-bar>

    <tab-bar :default-color="$global.defaultColor" :select-color="$global.selectColor" :nav-list="$global.navList" />
  </div>
</template>

<script>
import TitleBar from 'components/common/titlebar/TitleBar'
import TabBar from 'components/common/tabbar/TabBar';
export default {
  name: 'cart',
  components: {
    TitleBar,
    TabBar
  },
  data() {
    return {
      global:this.$global
    }
  },
  activated(){
    console.log("进入页面")
  },
  deactivated(){
    console.log("离开页面");
  },
  methods: {

  }
}
</script>
