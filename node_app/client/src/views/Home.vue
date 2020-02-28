<template>
    <div class="home">
        <div class="container">
            <p class="title">钉钉教育</p>
            <p class="lead">注于线上教育, 用心做课程, 用心做服务!</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'home'
}
</script>
<style scoped>
    .home{
        width: 100%;
        height: 100%;
        background:url('../assets/showcase.png')no-repeat center center;
        background-size: 100% 100%;
    }
    .container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 100px;
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
  color: white;
}
.title {
  font-size: 30px;
}
.lead{
    margin-top:50px;
    font-size: 30px;
}
</style>