<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      class="navigation-bar"
    >
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class=" text--accent-4">
          <v-list-item v-for="(item, index) in menuBars" :key="index">
            <v-list-item-title class="text-center">
              <router-link :to="item.to">
                {{ item.title }}
              </router-link>
              <v-divider></v-divider>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-toolbar-items>
        <v-img max-height="50" max-width="50" src="./assets/logo.png"></v-img>
      </v-toolbar-items>

      <!-- <v-divider
    class="mx-4"
    vertical
    ></v-divider> -->

      <span class="subheading text-blue"
        >Ўзбекистон Республикаси Давлат божхона қўмитаси
      </span>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down align-center">
        <div class="header-items">
          <router-link to="/">
            <v-btn class="v-btn--is-elevated">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="#39ae69"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
            </v-btn>
            <p class="hidden-sm-and-down">Ҳудудий бошқармалар</p>
          </router-link>

          <router-link to="/">
            <v-btn>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#39ae69"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </v-btn>
            <p>Кабинетга кириш</p>
          </router-link>
        </div>

        <v-divider vertical></v-divider>

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark v-bind="attrs" v-on="on"> UZB </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-divider vertical></v-divider>
      </v-toolbar-items>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          /></svg
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer class="footer" app>
      <div class="text-center">
        <v-btn
          color="transparent"
          dark
          class="text-center"
          @click="sheet = !sheet"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="gray"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 11l7-7 7 7M5 19l7-7 7 7"
            />
          </svg>
        </v-btn>
        <v-bottom-sheet v-model="sheet">
          <v-sheet class="text-center" height="200px">
            <v-btn
              class="mt-6"
              text
              color="transparent"
              @click="sheet = !sheet"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="gray"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                />
              </svg>
            </v-btn>

            <v-card class="footer-card">
              <v-list>
                <v-list-item-group>
                  <v-list-item v-for="(item, id) in footerList" :key="id">
                    <v-list-item-content>
                      <v-list-item-title
                        v-text="item.title"
                        max-width="100"
                      ></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-sheet>
        </v-bottom-sheet>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    menuBars: [
      {
        title: "Қўмита ҳақида",
        to: "/",
      },
      {
        title: "Божхона назорати",
        to: "/",
      },
      {
        title: "ОАВ учун",
        to: "/",
      },
      {
        title: "Боғланиш",
        to: "/",
      },
    ],
    items: [{ title: "Rus" }, { title: "Lotin" }],
    drawer: false,
    group: null,
    sheet: false,
    footerList: [
      {
        id: 1,
        title: "O'zbekiston Respublikasi Milliy huquqiy internet portali",
        img: "s",
      },
      {
        id: 2,
        title: "O'zbekiston Respublikasi Prezidentining rasmiy veb sayti",
        img: "s",
      },
      {
        id: 3,
        title: "O'zbekiston Respublikasi Hukumat portali",
        img: "s",
      },
      {
        id: 4,
        title: "O'zbekiston Respublikasi Bosh prokuraturasi",
        img: "s",
      },
      {
        id: 5,
        title: "O'zbekiston Respublikasi Ichki ishlar vazirligi",
        img: "s",
      },
      {
        id: 6,
        title: "O'zbekiston Respublikasi Davlat soliq qo'mitasi",
        img: "s",
      },
    ],
    tiles: [
      { img: "keep.png", title: "Keep" },
      { img: "inbox.png", title: "Inbox" },
      { img: "hangouts.png", title: "Hangouts" },
      { img: "messenger.png", title: "Messenger" },
      { img: "google.png", title: "Google+" },
    ],
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style>
@import url("./assets/app.css");
.container {
  padding: 0;
}
.v-application {
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
}
.v-application .title,
.subheading,
.headline {
  font-family: "Montserrat" !important;
}
.navigation-bar .v-list-item__title a {
  margin-bottom: 12px;
  text-decoration: none;
  color: #39ae69;
}
.header-items {
  display: flex;
}
.header-items .v-btn--is-elevated {
  box-shadow: none;
}
.header-items .theme--light.v-btn.v-btn--has-bg {
  background-color: initial;
}
.header-items a {
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-right: 16px;
}
.header-items p {
  margin: 0;
  color: #000;
  white-space: nowrap;
  font-size: 16px;
}
.header-items .v-btn:not(.v-btn--round).v-size--default {
  min-width: 30px;
  padding: 0 0;
}

.footer {
  margin: 0 auto;
  width: 170px;
  justify-content: center;
}
.footer-card .v-item-group {
  display: flex;
}
.footer-card .v-list-item__content {
  max-width: 100px;
  font-weight: 500;
  font-size: 12px;
}
.footer-card .v-list-item__title,
.v-list-item__subtitle {
  white-space: initial;
}
</style>
