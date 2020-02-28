<template>
    <div class="nav">
    <el-row>
     <el-col>
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#324057"
      text-color="#fff"
      active-text-color="#ffd04b">
        <router-link to="/index/home">
        <el-menu-item index="0">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
        </router-link>
        <template v-for="item in items">
          <el-submenu v-if="item.children" :key="item.path" :index="item.path">
            <template slot="title">{{item.name}}</template>
            <router-link v-for="(citem,cindex) in item.children" :key="cindex" :to="citem.path">
            <el-menu-item :index="citem.path">{{citem.name}}</el-menu-item>
              </router-link>
          </el-submenu>
        </template>
    </el-menu>
  </el-col>
</el-row>
    </div>
</template>
<script>
export default {
    name:'navmenu',
    data(){
      return{
        items:[
            {
              path:'found',
              name:"资金管理",
              children:[{
                path:'/index/foundlist',name:'资金流水'
              }]
            },
              {
              path:'inter',
              name:"信息管理管理",
              children:[{
                path:'/index/interlist',name:'个人信息'
              }]
            }
        ]   
    }    
}
}
</script>
<style scoped>
    .nav{
        position: fixed;
        left: 0;
        height: 100%;
        background-color: #324057;
    }
    .el-menu{
      border:none;
    }
    a{
      text-decoration: none;
    }
    .el-menu .el-menu-item {
    min-width: 200px;
    }
</style>