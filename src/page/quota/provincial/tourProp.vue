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
                legend: {
                    y: 'bottom',
                    data:[
                        { name: '香港', icon: 'circle' },
                        { name: '澳门', icon: 'circle' },
                        { name: '台湾', icon: 'circle' },
                        { name: '其它国家', icon: 'circle' }
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
                        {value:3711561, name: '其它国家' },
                        {value:436095, name:'台湾'},
                        {value:207203, name:'澳门'},
                        {value:506821, name:'香港'},
                    ]
                }]
            });
        }, 0);
    }
}
</script>