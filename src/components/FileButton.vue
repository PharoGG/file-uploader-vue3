<template>
  <input
    type="file"
    @change="handleFileSelect"
    accept=".jpg,.jpeg,.png"
    style="display: none"
    ref="fileInput"
  />
  <button class="file-button" @click="triggerInput">
    {{ store.buttonText }}
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useFileStore } from "../stores";

const fileInput = ref<HTMLInputElement | null>(null);
const store = useFileStore();

const triggerInput = () => {
  if (store.fileState === "uploading" || store.fileState === "uploaded") {
    store.resetFile(); // Если файл загружается или загружен то сбрасываем состояние
  } else {
    fileInput.value?.click(); // А иначе вызываем клик по скрытому инпуту для выбора файла
  }
};

const handleFileSelect = (event: Event) => {
  const files = (event.target as HTMLInputElement).files;
  if (files) {
    store.selectFile(files[0]);
  }
};
</script>

<style scoped lang="scss">
.file-button {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 0px 12px;
  width: 120px;
  height: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.02),
    0 3px 7px -3px rgba(0, 0, 0, 0.08);
  background: #fff;
  font-weight: 400;
  font-size: 14px;
  line-height: 114%;
  letter-spacing: -0.01em;
  color: #384252;
  cursor: pointer;

  transition: border 0.2s, background-color 0.2s, box-shadow 0.2s, color 0.2s;

  &:hover {
    border: 1px solid #d0d5dc;
    background-color: #f3f4f6;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.02);
  }

  &:active {
    border: 1px solid #d0d5dc;
    background-color: #e5e7eb;
    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(107, 114, 128, 0.1);
  }

  &:disabled,
  &.is-disabled {
    color: #9ca3b0;
    cursor: default;
    background-color: #e5e7eb;
    box-shadow: none;
    border: 1px solid #e5e7eb;
  }
}
</style>
