<template>
  <v-text-field
    label="name"
    v-model="name"
    placeholder="name"
    solo
  ></v-text-field>
  <v-text-field
    label="price"
    v-model="price"
    placeholder="price"
    solo
  ></v-text-field>
  <v-text-field
    label="each"
    v-model="each"
    placeholder="each"
    solo
  ></v-text-field>
  <div>
    <v-btn
      @click="store.pushData({ price: price, name: name, each: each })"
      color="blue"
      >Push Data</v-btn
    >
  </div>
  <span>{{ name }}</span>
  <br />
  <span>{{ price }}</span>
  <br />
  <span>{{ each }}</span>
  <br />
  <span>{{ store.products }}</span>
</template>

<script >
import { useProductStore } from "@/stores/products";
import { ref } from "vue";

export default {
  setup() {
    const store = useProductStore();
    const name = ref("");
    const price = ref("");
    const each = ref("");

    return { store, name, price, each };
  },
};
</script>

<style lang="scss" scoped>
</style>