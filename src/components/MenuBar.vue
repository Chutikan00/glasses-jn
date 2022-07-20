<template lang="">
  <v-app-bar>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/product">product</router-link> |
      <router-link to="/cart">Cart {{ cartLength }}</router-link>
    </div>
  </v-app-bar>
</template>
<script setup>
import { useProductStore } from '../stores/products';
import { computed } from 'vue';
const store = useProductStore();
const cartLength = computed(() => store.cart.length);
</script>
