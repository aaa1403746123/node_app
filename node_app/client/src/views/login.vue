<template>
    <div class="login">
        <section class="form_container">
            <div class="manage_tip">
                <span class="title">后台管理系统登录</span>
            </div>
            <el-form :model="loginUser" :rules="rules" class="loginForm" ref="loginForm" label-width="80px">
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="loginUser.email" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="loginUser.password" type="password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary"  class="submit_btn" @click="submitForm('loginForm')">登录</el-button>
                </el-form-item>
                <div class="other">
                  <p>没有账号点击去<router-link to='/register'>注册</router-link></p>
                  </div>
            </el-form>
           
        </section>
    </div>
</template>

<script>
import jwt_decode from 'jwt-decode';
export default {
  name: "login",
  data() {
    return {
     loginUser: {
        email: "",
        password: "",
      },
      rules: {
        name: [
          { required: true, message: "用户名不能为空", trigger: "change" },
          { min: 2, max: 30, message: "长度在 2 到 30 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 30, message: "长度在 6 到 30 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .post("/api/login", this.loginUser)
            .then(res => {
              // 登录成功
             localStorage.setItem('eleToken',res.data.token)
             //解析token
         
             const decode=jwt_decode(res.data.token)
            this.$store.dispatch('set_Authenticated',!this.isEmpty(decode))
             this.$store.dispatch('set_User',decode)
               this.$router.push("/index");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //判断是否为空
    isEmpty(value){
     return (
       value===undefined ||
       value===null ||
       (typeof value==="object" && Object.keys(value).length===0) ||
       (typeof value==="string" && value.trim().length===0)
     );
    }
  }
};
</script>


<style scoped>
.login {
  position: relative;
  width: 100%;
  height: 100%;
  background: url(../assets/bg.jpg) no-repeat center center;
  background-size: 100% 100%;
}
.form_container {
  width: 370px;
  height: 210px;
  position: absolute;
  top: 10%;
  left: 34%;
  padding: 25px;
  border-radius: 5px;
  text-align: center;
}
.form_container .manage_tip .title {
  font-family: "Microsoft YaHei";
  font-weight: bold;
  font-size: 26px;
  color: black;
}
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit_btn {
  width: 100%;
}
.other p{
    font-size: 6px;
    float: right;
}
.other p a{
    text-decoration:none;
    color: skyblue;
}
</style>



