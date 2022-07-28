<template>
  <div class="total">
    <div class="total-middle">
      <ul class="oylar">
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
.total {
  background-image: linear-gradient(180deg, #f7f7f7, #47ad5900);
}
.nav-item {
  width: 80px;
  height: 70px;
  border: 1px solid green;
  transform: skew(20deg);
  margin-left: 10px;
}
.nav-item:active {
  background-color: #39ae69;
}
.selected {
  background-color: #39ae69;
}
.oylar {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(6, 1fr);
}

@media (max-width: 590px) {
  .oylar {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
