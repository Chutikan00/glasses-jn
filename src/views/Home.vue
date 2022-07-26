<template>
  <v-container>
    <v-text-field label="name" v-model="name" placeholder="name" solo></v-text-field>
    <v-text-field label="price" v-model="price" placeholder="price" solo></v-text-field>
    <v-text-field label="each" v-model="each" placeholder="each" solo></v-text-field>
    <v-text-field label="stock" v-model="stock" placeholder="stock" solo></v-text-field>
    <v-text-field label="img" v-model="img" placeholder="img" solo></v-text-field>
    <v-row class="mb-10">
      <v-btn @click="pushData({ price: price, name: name, each: each,stock: stock, img: img })" color="yellow">
        Push Data</v-btn>
    </v-row>


    <v-row no-gutters class="mt-10 ml-10  ">
      <v-col class="text-4xl font-serif" cols="8"> All Product </v-col>
      <v-col cols="3">
        <v-text-field label="Type..." variant="underlined" prepend-inner-icon="mdi-magnify" v-on:keyup="filterByname()"
          v-model="msg"></v-text-field>
      </v-col>
    </v-row>
    <v-row no-gutters class="ml-5 mt-2">
      <v-col cols="4" class="mt-8 " v-for="(item,index) in showProducts" :key="item.name">
        <v-img :src="item.img" height="150"></v-img>
        <p class=" mt-5 text-center text-xl font-serif">{{item.name}}</p>
        <p class="text-center text-l font-serif">stock : <span class="font-mono">{{item.stock}}</span></p>
        <p class="text-center text-xl font-serif">price : <span class="font-mono">{{item.price}}</span></p>


        <v-row no-gutters class="mb-5 mt-4 d-flex justify-center align-center">
          <v-btn @click="callDialog(item,index)" class="mr-3" flat rounded="pill" size="small" color="green">Edit
          </v-btn>

          <v-btn @click="deleteProduct(index)" flat rounded="pill" size="small" color="red">Delete</v-btn>
        </v-row>
      </v-col>

    </v-row>
  </v-container>
  <v-dialog v-model="dialog.show" persistent>
    <v-card>
      <v-card-title>
        <span class="text-h5">Edit Detail</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field  v-model="inputName" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field  v-model="inputImage" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field  type="number" v-model="inputStock" required>
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field  type="number" v-model="inputPrice" required>
              </v-text-field>
            </v-col>

          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" text @click="dialog.show = false">
          Close
        </v-btn>
        <v-btn text @click="updateItem()">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
  import {
    useProductStore
  } from "@/stores/products";
  import {
    ref
  } from "vue";


 const { addCart,update,pushData,deleteProduct,products,updateByEdit } = useProductStore()
  const name = ref("");
  const price = ref("");
  const each = ref("");
  const img = ref("");
  const stock = ref("")
  const msg = ref('')
  const dialog = ref({
    show: false,
    item: {
      name: '',
      image: '',
      price: null,
      stock: null,
      index: null,
    }
  })
  const inputImage = ref("")
  const inputName = ref("")
  const inputPrice = ref("")
  const inputStock = ref("")
  const inputIndex = ref("")

  const showProducts = ref(products)

  const addedCart = (item, index) => {
    addCart(item)
    update(item.name, index)
  }

  const updateItem = async () => {
    const item = {
      name: inputName,
      price: inputPrice,
      stock: inputStock,
      img: inputImage,
      index: inputIndex
    }
     updateByEdit(item)
    dialog.value.show = false
  }

  const callDialog = async (item, index) => {
    dialog.value.show = true
    dialog.value.item = item
    inputImage.value = dialog.value.item.img
    inputName.value = dialog.value.item.name
    inputPrice.value= dialog.value.item.price
    inputStock.value = dialog.value.item.stock
    inputIndex.value = index

  }

  const filterByname = () => {
    showProducts.value = products.value
    const filter = showProducts.value.filter((each) => {
      return each.name.toLowerCase().trim().includes(msg.value.toLowerCase().trim())
    })
    return showProducts.value = filter
  }
</script>

<style lang="scss" scoped>
</style>