<template>
  <div id="qsnet">
    <ul style="list-style: none">
      <li class="qsnet_li" v-for="(item,index) in rank" :key="index">
        <Row class="qsnet_row">
          <Col :span="2">
            <i class="qsnet_idx">{{index+1}}</i>
          </Col>
          <Col :span="4">{{item.name}}</Col>
          <Col :span="14" style="margin-top: 5px">
            <sb :pers=item.pers*100></sb>
          </Col>
          <Col :span="4">{{item.avg}}</Col>
        </Row>
      </li>
    </ul>
  </div>
</template>

<script>
  import sb from '../analysisform'

  export default {
    name: "tstable",
    props:{
      rank:Array,
    },
    components: {
      sb,
    }
  }
</script>

<style scoped>
  .qsnet_idx {
    width: 20px;
    height: 20px;
    font-style: normal;
    background: #b6b6b6;
    border-radius: 3px;
    font-size: 12px;
    padding: 2px 6px;
    color: #fff;
    margin-right: 8px;
  }

  .qsnet_row {
    color: #000;
    font-size: 14px;
  }

  #qsnet li:nth-child(1) i,
  #zsnet li:nth-child(1) i {
    background: #ff716b;
  }

  #qsnet li:nth-child(2) i,
  #qsnet li:nth-child(3) i,
  #zsnet li:nth-child(2) i,
  #zsnet li:nth-child(3) i {
    background: #ffbb00;
  }
</style>
