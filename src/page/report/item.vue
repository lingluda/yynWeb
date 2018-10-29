<template>
  <Row>
    <Col :span="3">
      <img src="@/assets/imgs/cash1.png">
    </Col>
    <Col :span="21">
      <div style="text-align: unset">{{useravg}}</div>
      <span style="font-size: 32px;color: #006eff">{{avg}}</span>
      <span style="font-size: 16px;color: #006eff">{{unit}}</span>

    </Col>
  </Row>
</template>

<script>
  export default {
    name: "item",
    props: {
      useravg: String,
      avg:Number,
      unit:String
    }
  }
</script>

<style scoped>

</style>
