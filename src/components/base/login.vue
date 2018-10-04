<template>
  <div class="login">
    <Form ref="formInline" :model="formInline" :rules="ruleInline" class="form">
      <FormItem prop="user">
        <p style="font-size: 23px;color: #1076ff;text-align: center;">一部手机游云南大数据平台</p>
      </FormItem>
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="用户名">
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="text" v-model="formInline.password" icon="md-eye" @on-click="change(false)" v-if="isshow"  placeholder="密   码">
        </Input>
        <Input type="password" v-model="formInline.password" icon="md-eye-off" @on-click="change(true)"  v-if="!isshow" placeholder="密   码">
        </Input>
      </FormItem>

      <FormItem prop="code">
        <Input type="text" v-model="formInline.code" placeholder="验证码">
        </Input>
      </FormItem>
      <FormItem>
        <Button style="width: 100%;background-color: #1076ff;color: white" @click="login('formInline')">登&nbsp;&nbsp;录</Button>
      </FormItem>
      <a style="float: right">忘记密码？</a>
    </Form>
    <p class="footer">Copyright © 2018 FasterSoft Corporation,All Rights Reserved 滇 ICP 备 1213423 号</p>
    </div>
</template>
<script>
  import http from '@/http.js'
  export default {
    data(){
      return{
        isshow:false,
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码不能少于6位！', trigger: 'blur' }
          ]
        }
      }
    },
    mounted(){

    },
    methods:{
      change(val){

        this.isshow=val;
      },
      login(val){
        this.$refs[val].validate((valid)=>{
          if(valid){
            http.get('bi/login',{user_name:this.formInline.user,pwd:this.formInline.password}).then(resp=>{
              if(resp.data.errcode===0){
                // 设置当前用户级别为省级
                // this.$store.commit('setUserLevel',{ level : 'provincial'});

                // 设置当前用户级别为市级
                // this.$store.commit('setUserLevel',{ level : 'city'});
                this.$router.push('index')
              }
            })
          }
        })
      },
      reset(val){
        this.$refs[val].resetFields()
      }
    }
  }
</script>
<style scoped>
  .login{
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-image: url("../../assets/login_bg.png");
    background-size: 100% 100%;
  }
  .form{
    width: 370px;
    padding: 45px;
    background-color: white;
    border-radius: 7px;
  }
  .footer{
    background-color: #034441;
    opacity: 0.8;
    color: rgb(255, 255, 255);
    height: 34px;
    line-height: 34px;
    text-align: center;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
</style>
