<template>
  <div class="tabs mb-8">
    <v-card>
      <v-toolbar class="h-full mb-8">
        <v-toolbar-title
          >Божхона <br />
          статистикаси
          <v-divider color="green"></v-divider>
        </v-toolbar-title>

        <v-toolbar-title class="tab-title"
          >Ўзбекистон Республикаси кунлик товарлар импорти ва
          экспорти</v-toolbar-title
        >
      </v-toolbar>

      <v-tabs vertical class="d-flex">
        <v-tab>
          <v-icon left> mdi-account </v-icon>
          Ўзбекистон Республикаси товарлар импорти ва экспорти ҳудудлар кесимида
        </v-tab>
        <v-tab>
          <v-icon left> mdi-lock </v-icon>
          Божхона чегараларидан ўтган автомобиллар сони
        </v-tab>
        <v-tab>
          <v-icon left> mdi-access-point </v-icon>
          Ўзбекистон Республикасида кунлик товарлар импорти ва экспорти
        </v-tab>
        <v-btn class="ma-2 align-self-start" outlined color="green ">
          Барча статистика
        </v-btn>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <ColumnChart />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <DonutChart />
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <ScatterChart />
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import ColumnChart from "./Charts/ColumnChart.vue";
import DonutChart from "./Charts/DonutChart.vue";
import ScatterChart from "./Charts/ScatterChart.vue";
export default {
  name: "TabsComponent",
  components: {
    ColumnChart,
    DonutChart,
    ScatterChart,
  },
};
</script>

<style scoped>
.v-sheet {
  height: auto !important;
}
.v-tab {
  white-space: initial;
  font-weight: 700;
}
.tabs .v-sheet {
  box-shadow: none;
}
.tabs .v-tab {
  color: #000;
  font-size: 18px;
  line-height: 25px;
  max-width: 360px;
  text-align: left;
}
.tabs .v-tabs--vertical > .v-tabs-bar .v-tab {
  height: 100%;
}
.v-slide-group__content .v-tabs-bar__content {
  white-space: initial !important;
}
.tabs .v-toolbar__title {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
  white-space: initial;
  color: #39ae69;
}
.v-window-item {
  height: 420px;
}
.tab-title {
  width: 650px;
  margin-right: auto;
  text-align: right;
}
.tabs .v-toolbar__content {
  justify-content: space-between !important;
  height: 100px !important;
}

@media screen and (max-width: 1270px) {
  .v-window-item {
    max-width: 600px;
  }
}

@media screen and (max-width: 1050px) {
  .v-tabs {
    flex-direction: column;
  }
  .tab-title {
    display: none;
  }
}

@media screen and (max-width: 560px) {
  .tabs .v-tab {
    max-width: 400px;
  }
}
</style>
