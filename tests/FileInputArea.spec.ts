import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import FileInputArea from "../src/components/FileInputArea.vue";
import { createTestingPinia } from "@pinia/testing";

describe("FileInputArea.vue", () => {
  it("displays 'Файл не выбран' when fileState is 'empty'", () => {
    const wrapper = mount(FileInputArea, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false,
            initialState: { file: { fileState: "empty" } },
          }),
        ],
      },
    });
    expect(wrapper.text()).toContain("Файл не выбран");
  });

  it("displays loading icon and message when fileState is 'uploading'", () => {
    const wrapper = mount(FileInputArea, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false,
            initialState: { file: { fileState: "uploading" } },
          }),
        ],
      },
    });
    expect(wrapper.find(".loading-icon").exists()).toBeTruthy();
    expect(wrapper.text()).toContain("Загрузка файла...");
  });

  it("displays the file name when fileState is 'uploaded'", () => {
    const wrapper = mount(FileInputArea, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false,
            initialState: {
              file: {
                fileState: "uploaded",
                currentFile: { name: "image.jpg" },
              },
            },
          }),
        ],
      },
    });
    expect(wrapper.text()).toContain("image.jpg");
  });
});
