<template>
  <div>
    <ButtonGroup>
      <Button style="width: 130px" @click="pic('index')">首页</Button>
      <Button style="width: 130px" @click="pic('destination')">热门目的地</Button>
      <Button style="width: 130px" @click="pic('scenic')">热门景区</Button>
      <Button type="primary" style="width: 130px" @click="pic('hotmap')">景区客流热力分布</Button>
    </ButtonGroup>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
    mounted(){

    },
    methods:{
      pic(val){
        this.$router.push(val)
      }
    }
  }

</script>
