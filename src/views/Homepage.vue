<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters class="">
        <v-img
                :max-height="1050"
                src="src/assets/bg.jpg"
              ></v-img>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
        dialog: false,
      } 
  },
};
</script>

<style lang="scss" scoped></style>
