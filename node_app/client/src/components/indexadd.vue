<template>
<div class="indexadd">
<el-dialog :title="dialogFormVisible.title" :visible.sync="dialogFormVisible.show " :close-on-press-escape='false'  :close-on-click-modal='false' :modal-append-to-body='false'>
  <el-form :model="form" :rules="arules" ref="form">
        <el-form-item label="收支类型" :label-width="formLabelWidth" prop='type'>
      <el-select v-model="form.type" placeholder="收支类型">
           <el-option v-for="(item,index) in formtype_list" :key="index" :label="item" :value="item"></el-option>   
      </el-select>
    </el-form-item>
    <el-form-item label="收支描述" :label-width="formLabelWidth" prop='describe'>
      <el-input v-model="form.describe" autocomplete="off"></el-input>
    </el-form-item>
       <el-form-item label="收入" :label-width="formLabelWidth" prop='income'>
      <el-input v-model="form.income" autocomplete="off"></el-input>
    </el-form-item>
       <el-form-item label="支出" :label-width="formLabelWidth" prop='expend'>
      <el-input v-model="form.expend" autocomplete="off"></el-input>
    </el-form-item>
       <el-form-item label="账户现金" :label-width="formLabelWidth" prop='cash'>
      <el-input v-model="form.cash" autocomplete="off"></el-input>
    </el-form-item>
       <el-form-item label="备注" :label-width="formLabelWidth" prop='remark'>
      <el-input v-model="form.remark" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible.show  = false">取 消</el-button>
    <el-button type="primary" v-on:click="handleadd('form')">确 定</el-button>
  </div>
</el-dialog>
</div>
</template>
<script>
export default {
  name:'indexadd',
     data() {
      return {
        arules:{
          type:[{required:true,message:'不能为空',trigger:'blur'}],
          describe:[{required:true,message:'不能为空',trigger:'blur'}],
          income:[{required:true,message:'不能为空',trigger:'blur'}],
          expend:[{required:true,message:'不能为空',trigger:'blur'}],
          cash:[{required:true,message:'不能为空',trigger:'blur'}],
          remark:[{required:true,message:'不能为空',trigger:'blur'}]
        },
        formLabelWidth: '120px',
        formtype_list:[ 
        "提现",
        "提现手续费",
        "充值",
        "优惠券",
        "充值礼券",
        "转账"]
      
      }
    },
     props:{
       dialogFormVisible:{
         type:Object,
       },
       form:{
         type:Object
       }
     },
     methods:{
       handleadd(form){
        this.$refs[form].validate(valid=>{
          if(valid){
            const url=this.dialogFormVisible.option=="add" ? "add":`edit/${this.form.id}`;
            this.$axios.post(`/api/profile/${url}`,this.form).then(res=>{
                this.$message({
                message:'保存成功成功',
                type:'success'
              })
              this.dialogFormVisible.show=false
              console.log(form)
             this.$emit('updata')
            }).catch(err=>{
            
              console.log(err)
            })
          }else{
            console.log('err submit')
            return 
          }
        })
       }
     }
  };
</script>
<style scoped>
    .indexadd{
        width:100%;
        height: 100%;
     
    }
</style>