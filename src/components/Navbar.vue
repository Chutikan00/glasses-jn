<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters class="bg-slate-200 font-bold ">
      <v-col cols="10" class="" width g-flex g-center>
        <v-row no-gutters class="h-full text-lg font-medium font-serif">

          <v-col cols="6" class=" mt-4 mr-10 text-right text-neutral-900 hover:text-blue-500 ">
            <router-link to="/about">ABOUT US</router-link>
          </v-col>

          <v-col cols="1" class="" >
            <router-link to="/">
              <v-img :aspect-ratio="aspectRatio" :width="100" src="https://cdn.discordapp.com/attachments/963461589934166056/1001711798132678676/logo.png" >
              </v-img>
            </router-link>
          </v-col>
          

          <v-col cols="2" class=" ml-10 mt-4 text-left text-neutral-900 hover:text-blue-500">
            <router-link to="/product">SHOP NOW</router-link>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="1" class="mt-4">
            <router-link to="/cart"> 
              <v-img :width="24" src="https://cdn.icon-icons.com/icons2/2715/PNG/512/shopping_cart_icon_172223.png" class="ml-5"> </v-img>
            </router-link>
            <v-row class=" text-sm ml-7"> <span class="ml-4 font-mono ">{{ cartLength }} </span>  </v-row>
            
             
      </v-col>
    <!-- <v-col cols="1" class="mt-4">
            <router-link to="/cart"> 
              <v-img :width="24" src="src/assets/fav_uni.png"> </v-img>
            </router-link>
      </v-col> -->  
    </v-row>
  </v-container>
</template>

<script>
import { useProductStore } from '../stores/products';
import { computed } from 'vue';


export default {
  setup() {
      const store = useProductStore();
      const cartLength = computed(() => store.cart.length); 

      return {store,cartLength};
  },

  data: () => ({
    width: 150,
    aspectRatio: 16 / 9,
  }),
};

</script>

<style lang="scss" scoped></style>
