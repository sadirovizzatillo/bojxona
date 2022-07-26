<template>
  <div class="total">
    <div class="total-middle">
      <ul class="nav nav-tabs d-flex">
        <li v-for="tab in tabs" :key="tab" class="nav-item">
          <a
            class="nav-link"
            :class="{ active: tab === selected }"
            @click="setTab(tab)"
          >
            {{ tab }}
          </a>
        </li>
      </ul>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "EssentialDatesItem",
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    selected: {
      type: String,
      required: true,
    },
  },
  methods: {
    setTab(tab) {
      this.$emit("selected", tab);
    },
  },
};
</script>

<style>
.nav .nav-tabs {
  display: flex;
}
.total {
  background-image: linear-gradient(180deg, #f7f7f7, #47ad5900);
}
.nav-item a {
  width: 90px;
  height: 70px;
  border: 1px solid green;
  transform: skew(20deg);
  margin-left: 10px;
  text-align: center;
}
.active {
  background-color: #39ae69;
}
.active .nav-link {
  color: white !important;
}
</style>
