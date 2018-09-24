<template>
  <div class="progressContainer">
    <div class="progress" :style="{width:pers+'%'}">
    </div> <span style="margin-left: 5px">{{pers}}</span>
  </div>
</template>
<script>
  export default {
    props:{
      pers:Number,
    },
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
    background-color: #006EFF;
    height:20px;
    line-height: 20px;
  }
</style>

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


