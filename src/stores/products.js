import {
  isTemplateNode
} from '@vue/compiler-core';
import {
  defineStore
} from 'pinia';
export const useProductStore = defineStore({
  id: 'products',
  state: () => ({
    products: [

      {
        img: 'https://images.kglobalservices.com/www.kelloggs.com/en_us/product/product_4508506/kicproductimage-121045_kicproductimage-121045.png',
        name: 'Frosted Flakes cereal',
        price: 120,
        stock: 25,
        each: 1,
      },
      {
        img: 'https://images.kglobalservices.com/www.kelloggs.com/en_us/product/product_5096612/prod_img-5124879_marshmallow-frosted-flakes.png',
        name: 'Frosted Flakes cereal with Marshmallows',
        price: 150,
        stock: 15,
        each: 1,
      },
      {
        img: 'https://images.kglobalservices.com/www.kelloggs.com/en_us/product/product_683837/prod_img-1419663_frosted-flakes-cinn.png',
        name: 'Frosted Flakes Cinnamon French Toast',
        price: 190,
        stock: 17,
        each: 1,
      },
      {
        img: 'https://images.kglobalservices.com/www.kelloggs.com/en_us/product/product_4508509/kicproductimage-126459_chocolate-frosted-flakes.png',
        name: 'Chocolate Frosted Flakes',
        price: 200,
        stock: 5,
        each: 1,
      },
      {
        img: 'https://images.kglobalservices.com/www.kelloggs.com/en_us/product/product_683835/prod_img-1419682_strawberry-milkshake-frosted-flakes.png',
        name: 'Frosted Flakes Strawberry Milkshake',
        price: 230,
        stock: 7,
        each: 1,
      },
      {
        img: 'https://images.kglobalservices.com/www.kelloggs.com/en_us/product/product_4508489/kicproductimage-125783_kicproductimage-125783.png',
        name: 'Corn Pops Cereal',
        price: 230,
        stock: 7,
        each: 1,
      },
      {
        img: 'https://images.kglobalservices.com/www.kelloggs.com/en_us/product/product_4508497/prod_img-3394699_new_redbox_optimized.png',
        name: 'Froot Loops Cereal',
        price: 230,
        stock: 7,
        each: 1,
      },
      {
        img: 'https://images.kglobalservices.com/www.kelloggs.com/en_us/product/product_4508504/kicproductimage-119203_new_marsh_optimized.png',
        name: 'Froot Loops with Marshmallows Cereal',
        price: 230,
        stock: 7,
        each: 1,
      },
      {
        img: 'https://images.kglobalservices.com/www.kelloggs.com/en_us/product/product_7932713/prod_img-9235949_prod_img-9235949.jpg',
        name: 'Corn Pops Jumbo Snax',
        price: 230,
        stock: 7,
        each: 1,
      },

      {
        img: 'https://images.kglobalservices.com/www.kelloggs.com/en_us/product/product_7932711/prod_img-9235975_jumbo-00038000234590_c1l1.png',
        name: 'Froot Loops Jumbo Snax',
        price: 230,
        stock: 7,
        each: 1,
      },
      {
        img: 'https://images.kglobalservices.com/www.kelloggs.com/en_us/product/product_9227840/prod_img-10625447_prod_img-10625447.png',
        name: 'Frosted Flakes Cereal Bars',
        price: 230,
        stock: 7,
        each: 1,
      },
      {
        img: 'https://images.kglobalservices.com/www.kelloggs.com/en_us/product/product_9227839/prod_img-11170734_cerealbars_00038000243783_c1l1.png',
        name: 'Froot Loops Cereal Bars',
        price: 230,
        stock: 7,
        each: 1,
      },



    ],
    cart: [],

  }),

  actions: {
    pushData(param) {
      this.products.push(param);
    },
    addCart(data) {
      this.cart.push(data);
    },
    deleteCart(index) {
      this.cart.splice(index, 1);
    },
    deleteallCart(index) {
      this.cart.splice(index, 10);
    },
    deleteProduct(index) {
      this.products.splice(index, 1);
    },
    increaseCount(index) {
      this.products[index].each++
    },
    decreaseCount(index) {
      this.products[index].each--
    },
    update(name, index) {
      const find = this.products.find((each) => {
        if (each.name == name) return each
      })
      find.addCart = true
      this.products.splice(index, 1, find)
    },
    updateByEdit(item) {
      const find = this.products.find((each, index) => {
        console.log(index)
        console.log(item.index)

        if (index == item.index.value) return each
      })
      find.name = item.name.value
      find.price = item.price.value
      find.stock = item.stock.value
      find.img = item.img.value
      this.products.splice(item.index.value, 1, find)
    },
    checkout() {
      if (this.cart.length != 0 || this.cart.length != null || this.cart.length != undefined) {
        this.cart.forEach((each) => {
          const find = this.products.find((item) => {
            if (each.name == item.name) return item
          })
          const index = this.products.findIndex((item) => {
            if (each.name == item.name) return item
          })
          find.stock = find.stock - each.each
          this.products.splice(index, 1, find)

        })
      }

    },
    filterByName(name) {
      const response = products.filter((element) => {
        //return element.name == name 
        // ทุกตัวต้องเหมือนกัน
        return element.name.includes(name)
        //กรณี เช็ค บางตัว
        // return element.price >= 100
        // return element.flavor == name
        //return element.color == name

      })
      return response
    }


  },

});