<template>
  <div>
    <apexCharts
      type="scatter"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexCharts>
  </div>
</template>

<script>
export default {
  name: "ScatterChart",
  data() {
    return {
      series: [
        {
          name: "TEAM 1",
            data: this.generateDayWiseTimeSeries(
              new Date("11 Feb 2017 GMT").getTime(),
              20,
              {
                min: 10,
                max: 60,
              }
            ),
        },
        {
          name: "TEAM 2",
            data: this.generateDayWiseTimeSeries(
              new Date("11 Feb 2017 GMT").getTime(),
              20,
              {
                min: 10,
                max: 60,
              }
            ),
        },
        {
          name: "TEAM 3",
            data: this.generateDayWiseTimeSeries(
              new Date("11 Feb 2017 GMT").getTime(),
              30,
              {
                min: 10,
                max: 60,
              }
            ),
        },
        {
          name: "TEAM 4",
            data: this.generateDayWiseTimeSeries(
              new Date("11 Feb 2017 GMT").getTime(),
              10,
              {
                min: 10,
                max: 60,
              }
            ),
        },
        {
          name: "TEAM 5",
            data: this.generateDayWiseTimeSeries(
              new Date("11 Feb 2017 GMT").getTime(),
              30,
              {
                min: 10,
                max: 60,
              }
            ),
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "scatter",
          zoom: {
            type: "xy",
          },
        },
        dataLabels: {
          enabled: false,
        },
        grid: {
          xaxis: {
            lines: {
              show: true,
            },
          },
          yaxis: {
            lines: {
              show: true,
            },
          },
        },
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          max: 70,
        },
      },
    };
  },
  computed: {
    series_5() {
      return this.generateDayWiseTimeSeries(new Date("22 Apr 2017").getTime(), 115, { min: 30, max: 90 });
    }
  },
  methods:{
    generateDayWiseTimeSeries: function(baseval, count, yrange) {
      var i = 0;
      var series = [];
      while (i < count) {
        var x = baseval;
        var y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
          yrange.min;

        series.push([x, y]);
        baseval += 86400000;
        i++;
      }
      return series;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>