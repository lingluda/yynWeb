<template>
  <div id="main" style="width:100%;height:1200px;">
    <!--<div> <zhaotong></zhaotong></div>-->
   <!-- <div> <chuxiong></chuxiong></div>

    <div><qujing></qujing></div>-->

    <div> <baoshan></baoshan></div>


  </div>
</template>

<script>
  import baoshan from '../../components/ynmap/baoshan'
  import chuxiong from '../../components/ynmap/chuxiong'
  import dali from '../../components/ynmap/dali'
  import dehong from '../../components/ynmap/dehong'
  import diqing from '../../components/ynmap/diqing'
  import honghe from '../../components/ynmap/honghe'
  import kunming from '../../components/ynmap/kunming'
  import lijiang from '../../components/ynmap/lijiang'
  import lincang from '../../components/ynmap/lincang'
  import nujiang from '../../components/ynmap/nujiang'
  import puer from '../../components/ynmap/puer'
  import qujing from '../../components/ynmap/qujing'
  import wenshan from '../../components/ynmap/wenshan'
  import xishuangbanna from '../../components/ynmap/xishuangbanna'
  import yuxi from '../../components/ynmap/yuxi'
  import zhaotong from '../../components/ynmap/zhaotong'
  export default {
    name: "ynmap",
    components:{
      "zhaotong":zhaotong,
      "chuxiong":chuxiong,
      "baoshan":baoshan,
      "qujing":qujing,

    },
    data() {
      return {}
    },
    mounted() {

    },
    methods:{

    },
    watch:{

    }

  }
</script>

<style scoped>

</style>
