<template>
    <div>
        <city v-if="userLevel == 'city'"></city>
        <provincial v-else></provincial>
    </div>
</template>


<script>
import city from "./city/index.vue"
import provincial from "./provincial/index.vue"
export default {
    components:{
        city,
        provincial
    },
    computed:{
        userLevel:function(){
            return this.$store.state.userLevel
        }
    }
}
</script>
