<template>
<div class="alllist">
  
  <div>
   <el-form :inline="true" :model="date" class="demo-form-inline">
  <el-form-item label="投标时间筛选:">
   <el-date-picker
      v-model="date.value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </el-form-item>
  <el-form-item label="---">
  <el-date-picker
      v-model="date.value2"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onselect">筛选</el-button>
  </el-form-item>
    <el-form-item class="btnRight">
    <el-button type="primary" v-if="user.identify == 'manager'" @click="onadd">添加</el-button>
  </el-form-item>
</el-form>
  </div>
    <div class="foundList">
         <el-table
         v-if="tableData.length > 0"
    :data="tableData"
     border
      min-height='450'
    style="width: 100%">
   <el-table-column
      label="创建时间"
     align='center'
    type='index'
      width="50">
    </el-table-column>
    <el-table-column
      label="创建时间"
   align='center'
      width="180">
      <template slot-scope="scope">
        <span >{{ scope.row.date }}</span>
      </template>
    </el-table-column>
      <el-table-column
      label="收支类型"
       align='center'
      width="180">
      <template slot-scope="scope">
        <span>{{ scope.row.type }}</span>
      </template>
    </el-table-column>
      <el-table-column
      label="收支描述"
       align='center'
      width="180">
      <template slot-scope="scope">
        <span >{{ scope.row.describe}}</span>
      </template>
    </el-table-column>
      <el-table-column
      label="收入"
       align='center'
      width="100">
      <template slot-scope="scope">
        <span style="color:green">+{{ scope.row.income }}</span>
      </template>
    </el-table-column>
      <el-table-column
      label="支出"
       align='center'
       color="red"
      width="100">
      <template slot-scope="scope">
        <span style="color:red">-{{ scope.row.expend }}</span>
      </template>
    </el-table-column>
       <el-table-column
      label="账户现金"
       align='center'
      width="100">
      <template slot-scope="scope">
        <span >{{ scope.row.cash }}</span>
      </template>
    </el-table-column>
       <el-table-column
      label="备注"
       align='center'
      width="100">
      <template slot-scope="scope">
        <span >{{ scope.row.remark }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作"  align='center'>
        
      <template slot-scope="scope" v-if="user.identify == 'manager'">
        <el-button
          size="mini"
          @click="handleEdit( scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <indexadd :dialogFormVisible="ifshow" :form=form @updata='getProfile'></indexadd>
    </div>
     <div class="block">
    <el-pagination
      @current-change="handleCurrentChange"
      current-page.sync="pages.current_page"
      :page-size="pages.page_size"
      :layout="pages.lay_out"
      :total="pages.to_toal">
    </el-pagination>
  </div>
</div>
</template>
<script>
import indexadd from '../components/indexadd.vue'
export default {
    name:'foundlist',
    data(){
        return{
          date:{
            value1:'',
            value2:''
          },
          pages:{
          current_page:1,
          page_size:10,
          lay_out:"prev, pager, next, jumper",
          to_toal:1000,
          },
          alltableData:[],
                tableData:[],
          filterdata:[],
              form: {
              type:"",
              describe:"",
              income:"",
              expend:"",
              cash:"",
              remark:"",
              id:''
              },
               ifshow:{
                  show:false,
                  title:'添加',
                  option:'add'
                },

        }
    },
    computed:{
        user(){
          return this.$store.getters.user;
        }
    },
    created(){
        this.getProfile()
    },
    methods:{
      onselect(){
       if (!this.date.value1 || !this.date.value2) {
        this.$message({
          type: "warning",
          message: "请选择时间区间"
        });
        this.getProfile();
        return;
      }
    const stime=this.date.value1.getTime()
    const etime=this.date.value2.getTime()
    this.alltableData=this.filterdata.filter((item)=>{
        let date = new Date(item.date);
        let time = date.getTime();
        return time >= stime && time <= etime;
        this.setPaginations();
    })
      },
        getProfile(){
            this.$axios.get('/api/allprofiles').then(res=>{
                this.alltableData=res.data
                this.filterdata=res.data
                 this.setPaginations();               
            }).catch(err=>{
                console.log(err)
            })    
        },
        setPaginations(){
            this.pages.to_toal=this.alltableData.length
            this.pages.current_page=1,
            this.pages.page_size=10,
            this.tableData=this.alltableData.filter((item,index)=>{
             return index<this.pages.page_size;
            })
        },
      handleEdit(row) {
         this.ifshow={
           title:'编辑',
           show:true,
           option:'edit'
         },
         this.form={
        type:row.type,
        describe:row.describe,
        income:row.income,
        expend:row.expend,
        cash:row.cash,
        remark:row.remark,
        id:row._id
         }
      },
      handleDelete(row) {
        const url=row._id
        this.$axios.get(`/api/profile/delete/${url}`).then(res=>{
          this.$message({
            message:'删除成功',
            type:"success"
          }),
          this.getProfile()
        })
      },
       onadd() {
         this.ifshow={
           title:'添加',
           show:true,
           option:'add'
         },
         this.form={
            type:"",
        describe:"",
        income:"",
        expend:"",
        cash:"",
        remark:"",
        id:""
         }
      },
      handleCurrentChange(page) {
         let sortnum = this.pages.page_size * (page - 1);
      let table = this.alltableData.filter((item, index) => {
        return index >= sortnum;
      });
      // 设置默认分页数据
      this.tableData = table.filter((item, index) => {
        return index < this.pages.page_size;
      });
      }
    
    },
    components:{
      indexadd
    }
}
</script>
<style scoped>
.alllist{
 padding: 16px;
}
  .btnRight{
    float:right;
  }
  .block{
    float: right;
  }
</style>