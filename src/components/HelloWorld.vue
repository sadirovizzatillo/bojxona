<template>
  <div>
    <v-carousel hide-delimiters>
      <v-carousel-item
        class="carusel-item"
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-card class="v-sheet--outlined" max-width="344" color="transparent">
          <v-card-text>
            <p class="text-h4 white--text">
              {{ item.title }}
            </p>
            <p class="white--text">{{ item.description }}</p>
            <div class="white--text">
              {{ item.smallTitle }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn class="ma-2" color="success" v-if="item.btn">
              {{ item.btn }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-carousel-item>
    </v-carousel>

    <Parts />

    <Tabs />
    <div class="d-flex flex-wrap justify-sm-space-around">
      <NewsCards v-for="(item, id) in newsCard" :key="id" :item="item" />
    </div>

    <div class="container" style="display: flex">
      <Accordion />
      <EssentialDates />
    </div>

    <Footer />
  </div>
</template>

<script>
import Tabs from "./Tabs.vue";
import NewsCards from "../components/NewsCards.vue";
import Parts from "./Parts.vue";
import Footer from "./Footer.vue";
import Accordion from "./Accordion.vue";
import EssentialDates from "./EssentialDates.vue";
export default {
  name: "HelloWorld",
  data: () => ({
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        title: "E-TRANZIT Божхона ахборот тизими",
        description: "Божхона ахборот тизими",
        smallTitle: "Чегарадан юкларни электрон декларация қилинг",
        btn: "Xizmatdan foydalanish",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        title: "ИНТЕГРАЦИЯЛАШГАН ТАЪРИФ",
        description: "Божхона ахборот тизими",
        smallTitle: "Божхона тўловлари ҳисобини олинг",
        btn: "Xizmatdan foydalanish",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        title: "ЯГОНА ДАРЧА",
        description: "Божхона ахборот тизими",
        smallTitle:
          "Чегарадан товарлар олиб ўтишда сертификат ва рухсатномаларни ушбу ахборот тизими ёрдамида олинг",
        btn: "Xizmatdan foydalanish",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        title: "ИШГА КИРИШ УЧУН ОНЛАЙН АРИЗА БЕРИШ",
        description: "Божхона ахборот тизими",
        smallTitle:
          "Божхона хизмати органларидаги вакансиялар рўйхатини билиб олинг ҳамда ишга кириш учун онлайн ариза юборинг",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        title: "ШАФФОФЛИК ЗАМИРИДА ИҚТИСОДИЙ ХАВФСИЗЛИК",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        title: "E-ARHIV",
        description: "Божхона ахборот тизими",
        smallTitle: "Божхона ахборот тизмиларига ҳужжатларингизни жойланг",
        btn: "Xizmatdan foydalanish",
      },
    ],
    newsCard: [
      {
        id: 1,
        title: "Коррупцияга қарши кураш",
        img: "https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg",
        description: "Божхона тизими коррупциядан ҳоли тизимга айланади  ...",
        date: "26.07.2022",
      },
      {
        id: 2,
        title: "Коррупцияга қарши кураш",
        img: "https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg",
        description: "Божхона тизими коррупциядан ҳоли тизимга айланади  ...",
        date: "26.07.2022",
      },
      {
        id: 3,
        title: "Коррупцияга қарши кураш",
        img: "https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg",
        description: "Божхона тизими коррупциядан ҳоли тизимга айланади  ...",
        date: "26.07.2022",
      },
      {
        id: 4,
        title: "Коррупцияга қарши кураш",
        img: "https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg",
        description: "Божхона тизими коррупциядан ҳоли тизимга айланади  ...",
        date: "26.07.2022",
      },
      {
        id: 5,
        title: "Коррупцияга қарши кураш",
        img: "https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg",
        description: "Божхона тизими коррупциядан ҳоли тизимга айланади  ...",
        date: "26.07.2022",
      },
      {
        id: 6,
        title: "Коррупцияга қарши кураш",
        img: "https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg",
        description: "Божхона тизими коррупциядан ҳоли тизимга айланади  ...",
        date: "26.07.2022",
      },
    ],
  }),
  components: { Tabs, Parts, NewsCards, Footer, Accordion, EssentialDates },
};
</script>

<style>
.carusel-item .v-responsive__content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
