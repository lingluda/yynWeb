<template>
    <div id="chartTouristProportion" style="height:400px;"></div>
</template>

<script>
export default {
    mounted(){
        //等容器渲染完成之后再加载图表，不然无法获取到准确的宽高度
        setTimeout(() => {
            this.$echarts.init(document.querySelector("#chartTouristProportion")).setOption({
                color: ['#3c6ffe', '#63cd8d', '#f0b83e', '#e6534e'],
                title:{
                    text: '海外游客人数来源地占比',
                    textStyle: {
                        fontSize: 14
                    }
                },
                legend: {
                    y: 'bottom',
                    data:[
                        { name: '香港同胞', icon: 'circle' },
                        { name: '澳门同胞', icon: 'circle' },
                        { name: '台湾同胞', icon: 'circle' },
                        { name: '外国人', icon: 'circle' }
                    ]
                },
                series: [{
                    type:'pie',
                    radius: ['35%', '50%'],
                    label: {
                        normal: {
                            fontSize: 16,
                            formatter: '{b} {d}%'
                        }
                    },
                    itemStyle: {
                        borderWidth: 2,
                        borderColor: '#fff'
                    },
                    data:[
                        {value:4654736, name: '外国人' },
                        {value:557128, name:'台湾同胞'},
                        {value:242689, name:'澳门同胞'},
                        {value:594078, name:'香港同胞'},
                    ]
                }]
            });
        }, 0);
    }
}
</script>
