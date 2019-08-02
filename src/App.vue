<template>
  <div id="app">
    <transition>
        <keep-alive :include="['home','sort']">    
            <router-view  />
        </keep-alive>
    </transition>
  </div>
</template>

<style>
@import "assets/css/style.css";
</style>
