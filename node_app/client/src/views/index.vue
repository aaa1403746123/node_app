<template>
    <div class="index">
      <headNav/>
      <navmenu/>
      <div class="rightContainer">
      <router-view/>
      </div>
    </div>
</template>
<script>
import headNav from '../components/head_nav.vue'
import navmenu from '../components/navmenu.vue'
export default {
    name:'index',
    components:{
        headNav,
        navmenu
    }
}
</script>
<style scoped>
.index{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.rightContainer {
  position: relative;
  top: 0;
  left: 200px;
  width: calc(100% - 180px);
  height: calc(100% - 71px);
  overflow: auto;
}
</style>