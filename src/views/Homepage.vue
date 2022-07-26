<template>
  <v-container fluid class="pa-0">
    <v-parallax
    height="800"
    src="https://www.nestle-cereals.com/global/sites/g/files/fawtmp151/files/styles/stage_visual_large/public/d7/article_cereal_story_2048x1152_01.jpg?itok=zvA3dmYC"
  >
    <v-row align-center justify-center >
      <v-col class="ma-10 text-center" cols="12">
        <h1 class="text-8xl font-serif font-bold mb-4 text-yellow-400 hover:text-red-400 ">
          Cereal and Granola
        </h1>
        <h4 class="text-6xl font-serif font-bold mb-4 text-yellow-400 mb-10">
          Make your day! :)
        </h4>
        <v-row class=" mt-10 ma-10" justify="center" align-content ="end" style="height: 300px;"> 
          <router-link to="/product"><v-btn rounded  color="#FFFDE7" size="x-large"
          class="text-xl font-serif font-bold"> 
            SHOP NOW !</v-btn></router-link>
          <!--#FFC400-->
        </v-row>
      </v-col>
    </v-row>
  </v-parallax>
  <v-row class="font-serif text-center ">
    <v-col cols="4">
      <v-img height ="150"
      src="https://images.kglobalservices.com/www.kelloggs.com/en_us/brand/consumerbrand-3440648/consbrand_img-3599308_consbrand_img-3599308.png"></v-img>
      <p class="text-lg font-bold " >Every Kid Deserves a Chance to be a Tiger</p>
      <p class=""  >Together we’ll help bring back school sports.</p>

    </v-col>
     <v-col cols="4">
      <v-img height ="150"
      src="https://images.kglobalservices.com/www.kelloggs.com/en_us/brand/consumerbrand-3440208/consbrand_img-12114180_consbrand_img-12114180.png"></v-img>
      <p class="text-lg font-bold " >#FollowYourNose</p>
      <p>Whether it's morning, noon or night,</p>
      <p>it's always a good time for Froot Loops.</p>

    </v-col>
     <v-col cols="4">
      <v-img height ="150"
      src="https://images.kglobalservices.com/www.kelloggs.com/en_us/brand/consumerbrand-3440172/consbrand_img-3599295_consbrand_img-3599295.png"></v-img>
      <p class="text-lg font-bold " >Gotta Have My Pops!</p>
      <p>A sweet, crispy, crunchy way to start your day.</p>
    </v-col>   
  </v-row>

    <v-row class="mt-10 bg-sky-600">
      <v-col cols="5" class="ml-10 ma-10 mt-10 text-xl font-bold text-white">
     <p class="hover:underline decoration-yellow-400"><br><br>Kellogg’s Frosted Flakes gives you the sweet spark to go all in
        Help get your family fueled up for a great day with Kellogg’s Frosted Flakes Cereal.</p>
      <p class="mt-2 hover:underline decoration-red-500">Oven-toasted crunchy corn flakes are perfectly glazed with a sweet frosting. 
        Fortified cereal with 8 essential vitamins and minerals, no cholesterol and 0 grams of fat, they're gr-r-reat!</p>
      </v-col>
    <v-col cols="5" class="ml-10 rounded-md pa-0 ">
      <v-img height="400" src="src/assets/tiger.png">
      </v-img>
    </v-col> 
  </v-row>

  <v-row class="mt-10 bg-red-400">
    <v-col cols="5" class="ml-10 rounded-md ">
      <v-img height="400" src="https://www.kelloggs.com/content/dam/Asia/kelloggs_za/images/brands/brand-products/character-images/Froot-Loops.png">
      </v-img>
    </v-col>
    <v-col cols="5" class="ma-10 mt-10 text-xl font-bold text-white">
      <p class="hover:underline decoration-sky-400"><br><br>In a world full of rules, we do what's OffLimits. 
      Unlike what you find in the cereal aisle, we give the middle finger to breakfast as we know it. 
      We're bringing you all the fun & flavor with none of the artificial ingredients commonly found in cereal. Our offensively 
      delicious flavors and band of mascots are here to help you play with your food.</p>
      <p class="mt-5 hover:underline decoration-yellow-500">So  , go ahead. Break the rules.</p>
      </v-col>
  </v-row>

   <v-row class="mt-10 bg-amber-500">
      <v-col cols="5" class="ml-10 ma-10 mt-10 text-xl font-bold text-white">
         <p class="text-3xl hover:underline decoration-sky-400"><br><br>Breakfast the Whole Family will Love</p>
      <p class="mt-2 hover:underline decoration-red-500">It’s an excellent source of 7 vitamins and minerals and has a crisp texture for terrific snacking straight from the box. 
        Pack some in a bag for the road; this cereal makes a playful addition to your lunch, 
        afternoon pick-me-up, post-workout treat, or indulgent late-night snack. 
        No matter where it fits in, you'll love the delectable crunch of Kellogg’s Corn Pops breakfast cereal.</p>
      
      </v-col>
    <v-col cols="5" class="ml-10 rounded-md pa-0 ">
      <v-img height="400" src="https://www.kelloggs.com/content/dam/Asia/kelloggs_za/images/brands/brand-products/character-images/Coco-Pops.png">
      </v-img>
    </v-col> 
  </v-row>

  <v-row class="text-center bg-slate-200" >
    <v-col cols="12" class="mt-10" >
      <router-link to ="/about">
        <p >About Us</p>
      </router-link>
    </v-col>
    <v-col cols="12">
      <router-link to ="/">
        <p>Home</p>
      </router-link>
    </v-col>
    <v-col cols="12" class="mb-10">
      <router-link to ="/product">
        <p>Product</p>
      </router-link>
    </v-col>
    
  </v-row>
  </v-container>
</template>

<script>
export default {
  
};
</script>

<style lang="scss" scoped></style>
