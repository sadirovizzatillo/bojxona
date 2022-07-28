<template>
  <div class="Partnor">
    <div class="container">
      <div class="row">
        <h2 class="expansion-title">Кўп бериладиган саволлар</h2>
        <div class="col-12">
          <v-expansion-panels>
            <v-expansion-panel v-for="(item, i) in items" :key="i">
              <v-expansion-panel-header>
                <div class="d-block">
                  <div class="panel-header-title">{{ item.title }}</div>
                  <!-- <div class="line"></div> -->
                </div>
                <div
                  @click="openPanel(item.id)"
                  v-if="!isOpened(item.id)"
                  class="open-panel"
                >
                  +
                </div>
                <div @click="closePanel(item.id)" v-else class="close-panel">
                  -
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content v-show="isOpened(item.id)">
                <p class="panel-content">{{ item.content }}</p>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordionComponent",
  data() {
    return {
      openedIds: [],
      items: [
        {
          id: 1,
          title:
            "Тариф преференциялари қайси қонун ҳужжатларига мувофиқ қай тартибда қўлланилади?",
          content:
            "Ўзбекистон Республикаси Божхона кодексининг 300-моддасига мувофиқ тартибга солиниб, тариф преференсиялари божхона божларини тўлашдан озод етиш, божхона божлари ставкаларини камайтириш ёки муайян давлатларда ишлаб чиқарилган товарларни божхона ҳудудига преференсиал олиб кириш ёки ушбу ҳудуддан преференсиал олиб чиқишда квоталар белгилаш тарзида берилади.",
        },

        {
          id: 2,
          title:
            "Қандай қилиб ҳудудий божхона бошқармалари билан солиштирма далолатнома тузиш мумкин?",
          content:
            "Давлат божхона қўмитасининг расмий веб сайти “Електрон хизматлар” рукнида “Тадбиркорнинг шахсий кабинети” (http://ed1.customs.uz/PersonCabinet) орқали олиш мумкин.",
        },
        {
          id: 3,
          title:
            "Божхона тўловларини бўлиб-бўлиб ёки кечиктириб тўлаш тўғрисида маълумот берсангиз?",
          content:
            "Божхона кодексининг 329, 330, 331-моддаларига мувофиқ божхона тўловларини кечиктириб ёки бўлиб-бўлиб тўлаш божхона декларацияси қабул қилинган кундан еътиборан олтмиш календар кундан ошмаслиги лозим. Божхона тўловларини кечиктириб ёки бўлиб-бўлиб тўлаш имконияти Ўзбекистон Республикаси Президентининг ёхуд Ўзбекистон Республикаси Вазирлар Маҳкамасининг қарорига биноан узоқроқ муддатларга ва божхона тўловлари тўланиши таъминланмаган ҳолда берилиши мумкин",
        },
      ],
    };
  },
  methods: {
    openPanel: function (id) {
      if (this.openedIds.indexOf(id) === -1) {
        this.openedIds.push(id);
      }
    },
    closePanel: function (id) {
      this.openedIds.splice(this.openedIds.indexOf(id), 1);
    },
    isOpened: function (id) {
      return this.openedIds.indexOf(id) !== -1;
    },
  },
};
</script>

<style>
.Partnor {
  margin-right: 30px;
}
.expansion-title {
  color: #39ae69 !important;
  margin-bottom: 40px;
  color: #313c45;
  font-size: 26px;
  font-weight: bold !important;
}
.panel-header-title {
  color: #0a0a0a;
  font-size: 16px;
  font-family: "latosm";
  font-weight: bold;
  text-align: left;
  cursor: pointer;
  /* border-bottom: 1px solid #39ae69; */
  margin-bottom: 15px;
}
.open-panel {
  background: #39ae69;
  margin-top: 15px;
  margin-bottom: 35px;
  font-weight: bold;
  color: #fff;
  font-size: 20px;
  padding: 8px 5px;
  text-align: center;
}
.row {
  margin: 0;
}
.close-panel {
  background: #39ae69;
  margin-top: 15px;
  margin-bottom: 35px;
  font-weight: bold;
  color: #fff;
  font-size: 20px;
  padding: 8px 5px;
  text-align: center;
}
.panel-content {
  font-style: italic;
  border: none;
  background: #f7f7f7;
  line-height: 30px;
  font-size: 13px;
  font-family: "Poppins", sans-serif;
  color: #6f6f6f;
}
.v-expansion-panels {
  padding-top: 0 !important;
  margin-bottom: 0 !important;
}
.theme--light.v-expansion-panels .v-expansion-panel:not(:first-child):after {
  border-color: 1px solid #39ae69 !important;
}

@media screen and (max-width: 960px) {
  .v-expansion-panel {
    max-width: 600px;
  }
  .v-expansion-panel-header {
    width: 600px;
    margin: 0 auto;
  }
}

@media screen and (max-width: 960px) {
  .row {
    justify-content: center;
  }
}

@media screen and (max-width: 620px) {
  .v-expansion-panel {
    max-width: 400px;
  }
  .v-expansion-panel-header {
    width: 400px;
    margin: 0 auto;
  }
}
</style>
