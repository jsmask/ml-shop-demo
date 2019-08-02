<template>
  <div class="home">
    <title-bar :bg="'#ff8198'" :color="'#ffffff'">
      <div slot="title">分类</div>
    </title-bar>

    <tab-bar :default-color="$global.defaultColor" :select-color="$global.selectColor" :nav-list="$global.navList" />
  </div>
</template>

<script>
import TitleBar from 'components/common/titlebar/TitleBar'
import TabBar from 'components/common/tabbar/TabBar.vue';
export default {
  name: 'sort',
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
