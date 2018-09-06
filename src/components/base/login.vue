<template>
  <div style="background-color: #e5e5e5;height: 100vh;display: flex">
    <div style="width: 500px;background-color: #ffffff;height: 500px;margin-left: 31%;border: 1px solid #bbbbbb;border-radius: 5px;margin-top: 8%;">
    <p style="font-size: 36px;color: rgb(0,110,255);text-align: center;margin-top: 50px">一部手机游云南大数据平台</p>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" style="padding: 35px">
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="用户名">
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formInline.password" placeholder="密   码">
        </Input>
      </FormItem>
      <FormItem prop="code">
        <Input type="text" v-model="formInline.code" placeholder="验证码">
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" style="width: 100%" @click="handleSubmit('formInline')">登录</Button>
      </FormItem>
      <a>忘记密码</a>
    </Form>

    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
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
            { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
          ]
        }
      }
    },
    mounted(){

    },
    methods:{

    }
  }
</script>
