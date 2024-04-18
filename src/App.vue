<template>
  <div class="app-container">
    <Header />
    <CenteredBlock>
      <FileInputArea />
    </CenteredBlock>
  </div>
</template>

<script lang="ts" setup>
// Импортируем компоненты
import Header from "./components/HeaderSite.vue";
import CenteredBlock from "./components/CenteredBlock.vue";
import FileInputArea from "./components/FileInputArea.vue";
</script>

<style lang="scss"></style>
