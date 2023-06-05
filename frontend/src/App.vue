<script setup>
import { RouterView } from 'vue-router';
import MenuView from "./views/MenuView.vue";
import PieView from "./views/PieView.vue";
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <MenuView></MenuView>
    <RouterView />
    <PieView></PieView>
  </div>
</template>

<style></style>
