<template>
  <v-app>
    <v-main>
      <Header></Header>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Navbar.vue";
export default {
  name: "App",
  components: {
    Header,
  },
  data: () => ({
    //
  }),
};
</script>
