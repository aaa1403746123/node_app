import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const types={
    SET_AUTHENTICATED:'SET_AUTHENTICATED',
    SET_USER:'SET_USER'
}
const state={ 
  isAuthenticated:false,
  user:{}
}
const getters={
    isAuthenticated:function(state){
      return state.isAuthenticated
    },
    user:state=>state.user

}
const mutations={
  [types.SET_AUTHENTICATED](state,isAuthenticated){
    if(isAuthenticated) state.isAuthenticated=isAuthenticated
    else state.isAuthenticated=false
  },
  [types.SET_USER](state,user){
    if(user) state.user=user
    else state.user={}
  }
}
const actions={
  set_Authenticated:(context,isAuthenticated)=>{
    context.commit(types.SET_AUTHENTICATED,isAuthenticated)
  },
  set_User:(context,user)=>{
    context.commit(types.SET_USER,user)
  },
  clear_Authenticated:(context)=>{
    context.commit(types.SET_AUTHENTICATED,false)
    context.commit(types.SET_USER,null)
  },
  

}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
