<!--
<template>
  <div class="progressContainer">
    <div class="progress" :style="{width:progreess+'%'}">
    </div> <span>{{progreess}}</span>
  </div>
</template>
<script>
  export default {
    data() {
      return{
        progreess:16
      }
  }
  }
</script>

<style scoped>
  div.progressContainer{
    display: flex;
    height: 20px;
    width: 96%;
    border-radius: 10px;
    margin-left: 2%;
  }
  div.progress{
    background-color: #1C8DE0;
    height:20px;
    line-height: 20px;
  }
</style>
-->
<!--
<template>
    <hello-world :b="parame"></hello-world>
</template>
<script>
  import $ from 'jquery';
  Vue.component('hello-world', function(resolve, reject) {
    $.get("../assets/map.html").then(function(res) {
      resolve({
        template: res,
        props: ["b"],
        data: function() {
          return {
            a: "a"
          }
        }
      })
    });
  });
  export default {

    data() {
      return {}
    },
    mounted() {

    },
    methods: {

    }
  }
</script>
-->
<template>
  <div>
    <v-html-panel :url.asyc="url1"></v-html-panel>
    <v-html-panel :url.asyc="url2"></v-html-panel>
  </div>
</template>
<style scoped>
  div{color:red}
</style>
<script>
  export default{
    data () {
      return {
        url1: '',
        url2: ''
      }
    },
    mounted () {
      this.url1 = 'http://file.xxx.com/group1/M00/0C/F5/xxxxxxxx.html'
      this.url2 = 'http://file.xxx.com/group1/M00/0D/3B/yyyyyyy.html'
    },
    methods: {
    }
  }
</script>
