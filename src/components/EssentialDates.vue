<template>
  <div>
    <div class="tab-title">Божхонага доир муҳим саналар</div>
    <TabNav
      class="first-tab"
      :tabs="['январ', 'феврал', 'март', 'апрел', 'май', 'июнь']"
      :selected="selected"
      @selected="setTaSelected"
    >
      <Tab
        class="test"
        v-for="(firstM, index) in firstMonth"
        :key="index"
        :isSelected="selected === `${firstM.title}`"
      >
        <div v-for="(item, idx) in firstM.content" :key="idx">
          <ul>
            <li>
              <div class="month">
                <div>
                  <img
                    class="calendar"
                    src="../assets/calendar (1).png"
                    alt=""
                  />
                </div>
                <div>
                  <span>{{ item.number }}</span>
                </div>
              </div>
              <div>
                <p class="item-title">{{ item.title }}</p>
              </div>
            </li>
          </ul>
        </div>
      </Tab>
    </TabNav>
    <TabNav
      class="second-tab"
      :tabs="['июль', 'август', 'сентябр', 'октябр', 'ноябр', 'декабр']"
      :selected="selected"
      @selected="setTaSelected"
    >
      <Tab
        class="test"
        v-for="(secondM, n) in secondMonth"
        :key="n"
        :isSelected="selected === `${secondM.title}`"
      >
        <div v-for="(item, t) in secondM.content" :key="t">
          <ul>
            <li>
              <div class="month">
                <div>
                  <img
                    class="calendar"
                    src="../assets/calendar (1).png"
                    alt=""
                  />
                </div>
                <div>
                  <span>{{ item.number }}</span>
                </div>
              </div>
              <div>
                <p class="item-title">{{ item.title }}</p>
              </div>
            </li>
          </ul>
        </div>
      </Tab>
      <Tab />
    </TabNav>
    <Tab />
  </div>
</template>

<script>
import TabNav from "../components/EssentialDatesItem.vue";
import Tab from "../components/EssentialDate.vue";
export default {
  name: "EssentialDates",
  components: {
    TabNav,
    Tab,
  },
  data() {
    return {
      selected: "Home",
      firstMonth: [
        {
          title: "январ",
          img: "../assets/calendar (1).png",
          content: [
            { id: 1, title: "Ватан ҳимоячилари куни", number: "14" },
            { id: 2, title: "Божхоначилар куни", number: "26" },
            {
              id: 3,
              title: "Халқаро шахсий маълумотларни ҳимоялаш куни",
              number: "29",
            },
            {
              id: 4,
              title:
                "2018 йил - Ўзбекистон Республикаси халқаро аэропортларида йўловчилар учун икки йўлакли ( яшил ва қизил) тизим ишга туширилди.",
              number: "1",
            },
          ],
        },
        {
          title: "феврал",
          img: "../assets/calendar (1).png",
          number: "1",
          content: [
            {
              id: "1",
              title:
                "2019 йил - ҳалол, қонунга итоаткор ташқи иқтисодий фаолият иштирокчилари учун ваколатли иқтисодий операторлар институти жорий этилди.",
              number: "1",
            },
          ],
        },
        {
          title: "март",
          img: "../assets/calendar (1).png",
          content: [
            {
              id: 1,
              title:
                "1992 йил - Андижон вилоятида “Дўстлик” божхона комплекси биноси фойдаланишга топширилди.",
              number: "5",
            },
            { id: 2, title: "Хотин кизлар байрами", number: "8" },
            {
              id: 3,
              title: "Халқаро шахсий маълумотларни ҳимоялаш куни",
              number: "29",
            },
            {
              id: 4,
              title:
                "2006 йил - Давлат божхона қўмитаси расмий веб-сайти www.customs.uz доменида рўйхатга олинди.",
              number: "23",
            },
          ],
        },
        {
          title: "апрел",
          img: "../assets/calendar (1).png",
          content: [
            {
              id: 1,
              title:
                '2018 йил - Ўзбекистон Республикаси Президентининг "Ўзбекистон Республикаси Давлат божхона хизмати органлари фаолиятини тубдан такомиллаштириш чора-тадбирлар тўғрисида”ги ПФ-5414-сон Фармони қабул қилинди.',
              number: "12",
            },
            {
              id: 2,
              title:
                "1959 йил - Тошкент аэропортида алоҳида божхона пости ташкил қилинди.",
              number: "14",
            },
          ],
        },
        {
          title: "май",
          img: "../assets/calendar (1).png",
          content: [
            {
              id: 1,
              title:
                "2017 йил– Давлат божхона қўмитаси Матбуот хизмати “Олтин қалам” мукофотини қўлга киритди.",
              number: "3",
            },
            {
              id: 2,
              title:
                "1993 йил – Ўзбекистон Республикасининг “Валютани тартибга солиш тўғрисида”ги Қонуни билан божхона органларига валютани тартибга солишни таъминлаш вазифасини амалга ошириш ваколати берилди.",
              number: "7",
            },
            {
              id: 3,
              title:
                "2003 йил - Божхона коллежи ҳамда Солиқ ва божхона органлари академиясининг “Божхона иши” факультети негизида ихтисослаштирилган олий ўқув юрти – Олий ҳарбий божхона институти (ҳозирги Божхона институти) ташкил этилди.",
              number: "22",
            },
          ],
        },
        {
          title: "июнь",
          img: "../assets/calendar (1).png",
          content: [
            {
              id: 1,
              title:
                "1993 йил - Марказий божхона экспертиза лабораторияси ташкил этилди.",
              number: "5",
            },
          ],
        },
      ],
      secondMonth: [
        {
          title: "июль",
          img: "../assets/calendar (1).png",
          content: [
            {
              id: 1,
              title:
                "1992 йил - Ўзбекистон Республикаси “Божхона ҳамкорлиги кенгашини таъсис этиш тўғрисида”ги халқаро Конвенцияга аъзо бўлди.",
              number: "8",
            },
            {
              id: 2,
              title:
                "1997 йил – Ўзбекистон Республикаси Давлат божхона қўмитаси ташкил қилинди.",
              number: "8",
            },
            {
              id: 3,
              title:
                "1992 йил - Ўзбекистон Республикаси Жаҳон божхона ташкилотига аъзо бўлди.",
              number: "28",
            },
            {
              id: 4,
              title:
                "1997 йил - “Давлат божхона қўмитаси тўғрисидаги Низом” ҳамда божхона ходимларининг махсус хизмат формаси тасдиқланди.",
              number: "30",
            },
          ],
        },
        {
          title: "август",
          img: "../assets/calendar (1).png",
          content: [
            {
              id: 1,
              title:
                "1997 йил - Ўзбекистон Республикасининг биринчи “Божхона кодекси” қабул қилинди.",
              number: "29",
            },
          ],
        },
        {
          title: "сентябр",
        },
        {
          title: "октябр",
          img: "../assets/calendar (1).png",
          content: [
            {
              id: 1,
              title:
                "2018 йил - Ўзбекистон Республикасининг «Давлат божхона хизмати тўғрисида»ги Қонуни янги таҳрирда қабул қилинди.",
              number: "18",
            },
            {
              id: 2,
              title:
                "1996 йил – Давлат божхона қўмитасининг Миллий кинология маркази ташкил этилди.",
              number: "24",
            },
            {
              id: 3,
              title:
                "1991 йил - Ўзбекистон Республикаси Президентининг “Ўзбекистон Республикаси Божхона комитетини ташкил этиш тўғрисида”ги ПФ-284-сон Фармони билан мустақил Ўзбекистон Республикасининг илк давлат божхона тузилмаси – Божхона қўмитаси ташкил қилинди.",
              number: "25",
            },
          ],
        },
        {
          title: "ноябр",
          img: "../assets/calendar (1).png",
          content: [
            {
              id: 1,
              title:
                "2018 йил - Давлат божхона қўмитасининг Олий ҳарбий божхона институти Божхона институти этиб қайта ташкил этилди.",
              number: "2",
            },
          ],
          number: "2",
        },
        {
          title: "декабр",
          img: "../assets/calendar (1).png",
          content: [{ id: 1, title: "Халқаро Интернетсиз куни", number: "31" }],
        },
      ],
    };
  },
  methods: {
    setTaSelected(tab) {
      this.selected = tab;
    },
  },
};
</script>

<style>
.test {
  width: 700px;
  height: 250px;
}
.second-tab {
  display: flex;
  flex-direction: column-reverse;
}
.first-tab {
  width: 100%;
}
.tab-title {
  color: #313c45;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 30px;
}
.calendar {
  width: 30px;
  height: 30px;
  color: #fff;
}
ul li {
  list-style-type: none;
  display: flex;
  vertical-align: baseline;
}
.item-title {
  line-height: 20px;
}
.month {
  display: flex;
}
.month span {
  position: relative;
  font-size: 15px;
  color: #333;
  top: 5px;
  right: 24px;
  font-weight: 500;
}
.month-title {
  font-size: 16px;
  font-weight: 500;
  color: #000;
}
</style>
