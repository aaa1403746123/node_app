<template>
    <div class="header">
        <div class="left">
        <img src="../assets/logo.png">
        <span>在线后台管理</span>
        </div>
        <div class="right">
           <img :src="user.avatar" class='avatar' alt="">
        <div class="userinfo">
            <p class="name welcom">欢迎</p>
            <p class="name username">{{user.name}}</p>
        </div>
        <span>
            <el-dropdown  @command="handleCommand">
  <span class="el-dropdown-link">
    <i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="info">个人信息</el-dropdown-item>
    <el-dropdown-item command='logout'>退出</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
        </span>
        </div>
    </div>
</template>
<script>
export default {
    name:'haead_nav',
    data(){
        return{
         
        }
    },
    computed:{
        user(){
            return this.$store.getters.user;
        }
    }, 
     methods: {
      handleCommand(command) {
       switch(command){
           case 'info':
               this.showinfolist();
               break;
            case 'logout':
                this.logout();
                break
       }
      },
      showinfolist(){
        this.$router.push('infoshow')
      },
      logout(){
          localStorage.removeItem('eleToken')
          this.$store.dispatch('clear_Authenticated')
          this.$router.push('/login')
      }
    }
}
</script>
<style scoped>
    .header{
        height: 60px;
        width:100%;
        background-color: #324057;
    }
    .header{
        display:flex;
        justify-content: space-between;
    }
    .left img{
        width:50px;
        height: 50px;
        line-height: 60px;
        vertical-align: middle;
        display: inline-block;
         margin-left: 15px;
    }
    .left span{
        line-height: 60px;
        margin-left: 10px;
        color:white;
    }
    .right{
              padding-right:15px;
             line-height: 60px;
    }
  .avatar{
      height: 40px;
      width:40px;
      display: inline-block;
      vertical-align: middle;
      margin-right: 8px;
      border-radius: 50px;
  }
  .userinfo{
        display: inline-block;
       vertical-align: middle;
    
  }
  .name{
      line-height: 20px;
      color: white;
  }
  .welcom {
  font-size: 12px;
}
.username {
  color: #409eff;
  font-weight: bolder;
}
  .el-dropdown-link {
    cursor: pointer;
    color: white;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>