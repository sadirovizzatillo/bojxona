<template>
    <div>
        <apexCharts type="donut" :options="chartOptions" :series="series"></apexCharts>
    </div>
</template>

<script>
    export default {
        name:"DonutChart",
        data(){
            return{
                series: [44, 55, 41, 17, 15],
                chartOptions: {
                    chart: {
                        type: 'donut',
                    },
                    plotOptions: {
                        pie: {
                            startAngle: -90,
                            endAngle: 90,
                            offsetY: 10
                        }
                    },
                    grid: {
                        padding: {
                            bottom: -80
                        }
                    },
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }]
                },
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>