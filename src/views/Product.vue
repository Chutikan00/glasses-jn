<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters class="mt-8 ml-10 text-4xl font-serif ">
        All Product
    </v-row>
    <v-row  no-gutters class="ml-5 mt-10">
      <v-col cols="4" class=""
      v-for="(item,index) in store.products"
      :key ="item.name" >
      <v-img :src="item.img"  height="150"></v-img>
      <p class=" mt-5 text-center text-xl font-serif">{{item.name}}</p>
      <p class="text-center text-l font-serif">stock : <span class="font-mono">{{item.stock}}</span></p>
      <p class="text-center text-xl font-serif">price : <span class="font-mono">{{item.price}}</span></p>

       <v-row no-gutters class="d-flex justify-center align-center">
        <v-btn @click="store.decreaseCount(index)" 
        flat rounded="pill" size="small" class="text-2xl"> - </v-btn>
        <span class="pa-3 font-mono"> {{item.each}} </span>
        <v-btn @click="store.increaseCount(index)" 
        flat rounded="pill" size="small" class="text-2xl"> + </v-btn>
       </v-row>
      
      <v-row no-gutters class="mb-5 d-flex justify-center align-center">
      <v-btn @click="store.addCart(item)" flat rounded="pill" size="small" color="orange">Add to cart</v-btn>
      </v-row>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useProductStore } from "@/stores/products";
const store = useProductStore();
console.log(store.products);
</script>

<style lang="scss" scoped>
</style>