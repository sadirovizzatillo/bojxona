<template>
  <v-card width="380" class="mr-3 mb-4 mr-xs-0">
    <v-img height="200px" :src="item.img">
      <v-app-bar flat color="rgba(0, 0, 0, 0)">
        <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

        <v-spacer></v-spacer>
        <v-btn rounded color="primary" dark> {{ item.title }} </v-btn>
      </v-app-bar>

      <v-card-title class="white--text mt-2">
        <p>{{ item.date }}</p>
        <p class="ml-3">
          {{ item.description }}
        </p>
      </v-card-title>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "NewsCards",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
