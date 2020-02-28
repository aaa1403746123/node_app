<template>
  <div id="app">
   <router-view/>
  </div>
</template>

<style>
*{
  margin:0;padding: 0;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
<script>
import jwt_decode from 'jwt-decode'
export default {
  name:'app',
  data(){
    return{

    }
  },
  created(){
    if(localStorage.eleToken){
        const decode=jwt_decode(localStorage.eleToken)
        this.$store.dispatch('set_Authenticated',!this.isEmpty(decode))
        this.$store.dispatch('set_User',decode)
    }
  },
  methods:{
     isEmpty(value){
     return (
       value===undefined ||
       value===null ||
       (typeof value==="object" && Object.keys(value).length===0) ||
       (typeof value==="string" && value.trim().length===0)
     );
    }
  }
}
</script>