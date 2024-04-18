import { defineStore } from "pinia";

export const useFileStore = defineStore("file", {
  state: () => ({
    currentFile: null as File | null,
    imageUrl: "",
    fileState: "empty", // Варианты состояний: 'empty', 'uploading', 'uploaded', 'error'
    errorMessage: "",
    isCanceled: false,
  }),
  getters: {
    // Тут определяем текст кнопки по состоянию
    buttonText: (state) => {
      switch (state.fileState) {
        case "uploading":
          return "Отменить";
        case "uploaded":
          return "Удалить";
        case "empty":
        case "error":
        default:
          return "Выбрать файл";
      }
    },
  },
  actions: {
    selectFile(file: File) {
      const validFormats = ["image/jpeg", "image/png"];
      if (!file) {
        this.fileState = "error";
        this.errorMessage = "Необходимо выбрать файл";
        return;
      }
      if (!validFormats.includes(file.type)) {
        this.fileState = "error";
        this.errorMessage = "Неверный формат файла";
        return;
      }
      this.fileState = "uploading";
      this.isCanceled = false;
      //Set timeout для имитации загрузки)
      setTimeout(() => {
        if (!this.isCanceled) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const result = e.target?.result;
            if (typeof result === "string") {
              this.imageUrl = result;
              this.currentFile = file;
              this.fileState = "uploaded";
            } else {
              this.fileState = "error";
              this.errorMessage = "Ошибка при чтении файла";
            }
          };
          reader.onerror = () => {
            this.fileState = "error";
            this.errorMessage = "Ошибка при чтении файла";
          };
          reader.readAsDataURL(file);
        }
      }, 500);
    },
    // Метод обнуления состояний
    resetFile() {
      this.isCanceled = true;
      this.currentFile = null;
      this.imageUrl = "";
      this.fileState = "empty";
      this.errorMessage = "";
    },
  },
});
