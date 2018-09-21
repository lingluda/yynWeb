<template>
  <div class="progressContainer">
    <div class="progress" :style="{width:progreess+'%'}">
      <b>{{progreess}}%</b>
    </div>
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
  b{
    font-weight: 100;
    font-size: 12px;
    position:absolute;
    left:40%;
  }

</style>
