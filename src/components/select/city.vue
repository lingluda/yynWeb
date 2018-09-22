<template>
  <Select size="small" clearable style="width: 150px" >
    <Option v-for="(item,index) in cityData" :value="item.name" :key="item.index">{{item.name}}</Option>
  </Select>
</template>

<script>
  import http from '@/http.js'
    export default {
        name: "city",
      data(){
        return{
          cityData:[],
        }
      },
      mounted(){
        this.init()
      },
      methods:{
        init(){
          http.get('bi/get_all_city_prov',{}).then(resp=>{
            this.cityData = resp.data.hits;
            console.log('11111111111111:::',this.cityData)
          })
        },
      }
    }
</script>

<style scoped>

</style>
