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
