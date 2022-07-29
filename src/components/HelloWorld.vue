<template>
  <div>
    <v-carousel id="slider" hide-delimiters cycle show-arrows-on-hover>
      <v-carousel-item
        class="carusel-item"
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="scale-transition"
        transition="scale-transition"
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

    <!-- <ul>
      <li>
        <a href="#part">part</a>
        <a href="#slider">part</a>
        <a href="#tab">part</a>
        <a href="#card">part</a>
      </li>
    </ul> -->

    <div class="container">
      <Parts
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        data-aos-delay="500"
      />

      <Tabs
        id="tab"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        data-aos-delay="500"
      />
      <div
        id="card"
        class="d-flex flex-wrap card-list"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        <NewsCards v-for="(item, id) in newsCard" :key="id" :item="item" />
      </div>

      <div
        class="container two-comp"
        id="part"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        <Accordion />
        <EssentialDates />
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
import Tabs from "./Tabs.vue";
import NewsCards from "../components/NewsCards.vue";
import Parts from "./Parts.vue";
import Footer from "./Footer.vue";
import Accordion from "./Accordion.vue";
import EssentialDates from "./EssentialDates.vue";
import TranzitImage from "../assets/slider/transit.jpg";
import LogisticsImage from "../assets/slider/logistics.jpg";
import InfoSystemImage from "../assets/slider/infosystem.jpg";
import PostImage from "../assets/slider/post.jpg";
import CardFirst from "../assets/card/1.jpg";
import CardSecond from "../assets/card/2.jpg";
import CardThird from "../assets/card/3.jpg";
import CardFourth from "../assets/card/4.jpg";
import CardFifth from "../assets/card/5.jpg";
import CardSix from "../assets/card/6.jpg";

export default {
  name: "HelloWorld",
  data: () => ({
    items: [
      {
        src: TranzitImage,
        title: "E-TRANZIT Божхона ахборот тизими",
        description: "Божхона ахборот тизими",
        smallTitle: "Чегарадан юкларни электрон декларация қилинг",
        btn: "Xizmatdan foydalanish",
      },
      {
        src: PostImage,
        title: "ИНТЕГРАЦИЯЛАШГАН ТАЪРИФ",
        description: "Божхона ахборот тизими",
        smallTitle: "Божхона тўловлари ҳисобини олинг",
        btn: "Xizmatdan foydalanish",
      },
      {
        src: InfoSystemImage,
        title: "ЯГОНА ДАРЧА",
        description: "Божхона ахборот тизими",
        smallTitle:
          "Чегарадан товарлар олиб ўтишда сертификат ва рухсатномаларни ушбу ахборот тизими ёрдамида олинг",
        btn: "Xizmatdan foydalanish",
      },
      {
        src: LogisticsImage,
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
        img: CardFirst,
        description: "Божхона тизими коррупциядан ҳоли тизимга айланади  ...",
        date: "26.07.2022",
      },
      {
        id: 2,
        title: "Коррупцияга қарши кураш",
        img: CardSecond,
        description: "Божхона тизими коррупциядан ҳоли тизимга айланади  ...",
        date: "26.07.2022",
      },
      {
        id: 3,
        title: "Коррупцияга қарши кураш",
        img: CardThird,
        description: "Божхона тизими коррупциядан ҳоли тизимга айланади  ...",
        date: "26.07.2022",
      },
      {
        id: 4,
        title: "Коррупцияга қарши кураш",
        img: CardFourth,
        description: "Божхона тизими коррупциядан ҳоли тизимга айланади  ...",
        date: "26.07.2022",
      },
      {
        id: 5,
        title: "Коррупцияга қарши кураш",
        img: CardFifth,
        description: "Божхона тизими коррупциядан ҳоли тизимга айланади  ...",
        date: "26.07.2022",
      },
      {
        id: 6,
        title: "Коррупцияга қарши кураш",
        img: CardSix,
        description: "Божхона тизими коррупциядан ҳоли тизимга айланади  ...",
        date: "26.07.2022",
      },
    ],
  }),
  components: { Tabs, Parts, NewsCards, Footer, Accordion, EssentialDates },
};
</script>

<style>
.two-comp {
  width: 100%;
  display: flex;
}

.carusel-item .v-responsive__content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

@media screen and (max-width: 1270px) {
  .card-list {
    justify-content: space-around;
  }
}

@media (max-width: 960px) {
  .two-comp {
    flex-direction: column;
  }
  .two-comp > * {
    width: 100%;
  }
}

@media (max-width: 792px) {
  .card-list {
    justify-content: center;
  }
}

@media screen and (max-width: 550px) {
  .card-list {
    justify-content: center;
  }
}
</style>
