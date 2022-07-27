<template>
  <v-container>
    <v-row no-gutters class="ma-10"> 
      <v-col cols="8">
        <span class="ma-5 ml-10 text-2xl ">Cart</span>
        <v-row no-gutters v-if="store.cart != null || undefined" >
          <v-col
            v-for="(items, index) in store.cart"
            :key="items.name"
            cols="12"
          >
          <v-card
            class="mx-auto mt-10 pa-0"
            max-width=""
            outlined
            shaped >
            <v-card-actions style="float:right;" class="pa-0">
              <v-btn
                @click="store.deleteCart(index)"
                rounded="pill"  size="small" color="red" >X</v-btn>
            </v-card-actions >
            <v-list-item three-line >
              <v-list-item-avatar
                tile
                size="150"
                color="#E3F2FD"
              ><v-img :src="items.img" height="120"></v-img></v-list-item-avatar>
            <v-list-item-content class="mt-5">
              <v-list-item-title class="text-lg mb-1 ml-5">
                {{ items.name }}
              </v-list-item-title>
              <v-list-item-subtitle class="ml-5">
                 <p class="mt-3 text-base" >Price : {{ items.price }}</p>
                <p class="mt-1 text-base">Each : {{ items.each }}</p>
              </v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
          </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="3" class="ml-10 " >
        <span class="text-2xl">Summary</span>
        <v-row no-gutters="" class="mt-10">
          <v-col cols="12">
            <span>Subtotal : {{ sum }}</span>
            <span>{{ test }}</span>
          </v-col>
          <v-col cols="12">
            <span>Tax : 7%</span>
          </v-col>
          <v-col cols="12">
            <span>Total : {{ serviceCharge }}</span>
          </v-col>
          <v-col cols="12" class="mt-10">
            <div class="text-center">
    <v-btn flat rounded="pill"  size="small" color="orange" @click="checkBill()">
      Checkout

      <v-dialog
        v-model="dialog"
        activator="parent"
      >
        <v-card>
          <v-card-text>
            Your order has been success.
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn>

  </div>
          </v-col>
            
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, computed } from 'vue';
import { useProductStore } from '@/stores/products';


export default {
  setup () {
    const store = useProductStore();
    const total = ref(0);
    const abc = 0;

    const checkBill = () => {
      store.checkout()
      store.deleteallCart()
    }

    const test = computed(() => {
      total.value = 0;
        store.cart.forEach((each) => {
          total.value = each.price * each.each + total.value;
      })
    })

    const serviceCharge = computed(() => total.value * 0.07 + total.value);

    const sum = computed(() => total);
    
    return {serviceCharge,sum,store,total,test,checkBill};

  },
  
  data () {
      return {
        dialog: false,
      }
    },

};
    
 

  


/*const store = useProductStore();
const total = ref(0);
const abc = 0;

const test = computed(() => {
  total.value = 0;
  store.cart.forEach((each) => {
    total.value = each.price * each.each + total.value;
  });
});

const serviceCharge = computed(() => total.value * 0.07 + total.value);

const sum = computed(() => total);*/



</script>

<style lang="scss" scoped></style>
