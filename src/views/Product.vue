<script setup>
import { useProductStore } from "@/stores/products";
import { ref } from 'vue'

const store = useProductStore(); 
const msg = ref('')


const products= ref(store.products)

const showProducts = ref(products.value)

const addedCart = (item ,index) => {
    store.addCart(item)
    store.update(item.name, index)
  }

const filterByname = () =>{
  showProducts.value = products.value
 const filter  = showProducts.value.filter((each)=>{
    return each.name.toLowerCase().trim().includes(msg.value.toLowerCase().trim())
   
  })
 return showProducts.value = filter
}



</script>

<template>
 
  <v-row no-gutters class="mt-8 ml-10  ">
    <v-col class="text-4xl font-serif" cols="8"> All Product </v-col>
    <v-col cols="3">
        <v-text-field
            label="Type..."
            variant="underlined"
            prepend-inner-icon="mdi-magnify"
            v-on:keyup="filterByname()" v-model="msg"
          ></v-text-field>
    </v-col>
    </v-row>
    <v-row  no-gutters class="ml-5 mt-10">
      <v-col cols="4" class=""
        v-for="(item,index) in showProducts"
        :key ="item.name" >
        <v-card max-width="350" height="400" outlined shaped class="mx-auto mt-5"
        color="#FAFAFA">
        <v-img :src="item.img"  height="150" class="mt-3"></v-img>
        <p class=" mt-5 text-center text-lg font-serif">{{item.name}}</p>
      <p class="text-center text-base font-serif">stock : <span class="font-mono">{{item.stock}}</span></p>
      <p class="text-center text-lg font-serif">price : <span class="font-mono">{{item.price}}</span></p>

       <v-row no-gutters class="d-flex justify-center align-center">
        <v-btn @click="store.decreaseCount(index)" 
        flat rounded="pill" size="small" class="text-2xl"> - </v-btn>
        <span class="pa-3 font-mono"> {{item.each}} </span>
        <v-btn @click="store.increaseCount(index)" 
        flat rounded="pill" size="small" class="text-2xl"> + </v-btn>
       </v-row>
      
      <v-row no-gutters class="mb-5 d-flex justify-center align-center">
      <v-btn @click="store.addCart(item,index)" flat rounded="pill" size="small" color="orange">Add to cart</v-btn>
      </v-row>
      </v-card>
      

      </v-col>
    
     
    </v-row>
</template>
