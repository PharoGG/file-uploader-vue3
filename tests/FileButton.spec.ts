import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import FileButton from "../src/components/FileButton.vue";
import { createTestingPinia } from "@pinia/testing";
import { useFileStore } from "../src/stores";

describe("FileButton.vue", () => {
  it("triggers resetFile on button click when fileState is 'uploading' or 'uploaded'", async () => {
    const wrapper = mount(FileButton, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              file: {
                fileState: "uploading",
              },
            },
          }),
        ],
      },
    });
    const store = useFileStore();
    store.resetFile = vi.fn();
    store.selectFile = vi.fn();

    await wrapper.find("button").trigger("click");
    expect(store.resetFile).toHaveBeenCalled();
  });
});
