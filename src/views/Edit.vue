<script>
import { useProductStore } from "@/stores/products";
import { ref } from 'vue'

export default {
    setup () {
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
        return {store,msg,products,showProducts,addedCart,filterByname};
    },
     data () {
      return {
        dialog: false,
      }
    },

};




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
      v-for="(item) in showProducts"
      :key ="item.name" >
      <v-img :src="item.img"  height="150"></v-img>
      <p class=" mt-5 text-center text-xl font-serif">{{item.name}}</p>
      <p class="text-center text-l font-serif">stock : <span class="font-mono">{{item.stock}}</span></p>
      <p class="text-center text-xl font-serif">price : <span class="font-mono">{{item.price}}</span></p>

      
      <v-row no-gutters class="mb-5 mt-5 d-flex justify-center align-center">
        <v-dialog
      v-model="dialog"
      persistent
    >
      <template v-slot:activator="{ props }">
        <v-btn @click="addedCart(item)" flat rounded="pill" size="small" color="green" class="mr-5" v-bind="props">Edit</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Edit Detail</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Name*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Image Link*"
                  required
                ></v-text-field>
              </v-col>
            <v-col
                cols="12" sm="6" md="6">
                <v-text-field
                  label="Stock*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12" sm="6" md="6">
                <v-text-field
                  label="Price*"
                  required
                ></v-text-field>
              </v-col>
             
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
      <v-btn @click="store.deleteProduct(index)" flat rounded="pill" size="small" color="red">Delete</v-btn>
      </v-row>

      </v-col>
    </v-row>
</template>
