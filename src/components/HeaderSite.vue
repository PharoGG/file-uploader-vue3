<template>
  <header class="header">
    <h1 class="mark-title">
      <div class="mark"><img src="../assets/Icon.svg" /></div>
      Ekvio DS
    </h1>
    <h2 class="title">File Input</h2>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "../assets/global.scss";

.header {
  border: 1px solid $border-color;
  border-radius: 16px;
  padding: 48px 56px;
  width: 802px;
  height: 320px;
  box-shadow: 0 10px 15px -3px $shadow-color;
  background: $background-color-component;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.mark-title {
  border-radius: 100px;
  padding: 10px 16px;
  width: 125px;
  height: 44px;
  background: #f3f4f6;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #4b5563;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mark {
  width: 20px;
  height: 20px;
  padding-right: 10px;
}

.title {
  font-weight: 500;
  font-size: 48px;
  line-height: 125%;
  letter-spacing: -0.02em;
  color: #111827;
}
</style>
