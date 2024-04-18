<template>
  <div class="file-input-area">
    <label class="file-label">Загрузка изображения</label>
    <div v-if="store.fileState === 'empty' || store.fileState === 'error'">
      <FileButton />
      <span class="file-status">Файл не выбран</span>
    </div>
    <div v-else-if="store.fileState === 'uploading'" class="file-selection">
      <FileButton />
      <span class="file-status" aria-live="polite">
        <img src="../assets/Line.svg" alt="Loading" class="loading-icon" />
        Загрузка файла...
      </span>
    </div>
    <div v-else-if="store.fileState === 'uploaded'" class="file-selection">
      <FileButton />
      <span class="file-status">{{ store.currentFile?.name }}</span>
    </div>
    <span
      :class="{ 'error-message': store.fileState === 'error' }"
      class="file-hint"
    >
      {{
        store.fileState === "error"
          ? store.errorMessage
          : "Доступные форматы: .jpg, .jpeg, .png"
      }}
    </span>
  </div>
</template>

<script setup lang="ts">
import FileButton from "./FileButton.vue";
import { useFileStore } from "../stores";

const store = useFileStore();
</script>

<style scoped lang="scss">
.file-input-area {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 6px;
  width: 318px;
  padding: 1rem;
  background: #fff;
}

.file-selection {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.file-label,
.file-hint {
  font-size: 13px;
  line-height: 120%;
  margin-top: 0.5rem;
}

.file-label {
  font-weight: 500;
  color: #111827;
  padding: 0px 0px 12px 0px;
}

.file-status {
  margin-left: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 114%;
  letter-spacing: -0.01em;
  color: #9ca3b0;
}

.file-hint {
  font-weight: 400;
  color: #6b7280;
  padding: 8px 0px 0px 0px;
}

.error-message {
  color: #ef4343;
}

.loading-icon {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
