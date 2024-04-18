<template>
  <div class="centered-block">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.centered-block {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px dashed #aa99ec;
  border-radius: 16px;
  width: 368px;
  background: #fff;
  margin: 0 auto;
  margin-top: 2rem;
}
</style>
