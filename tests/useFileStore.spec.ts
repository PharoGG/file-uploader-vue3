import { describe, it, expect } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useFileStore } from "../src/stores";

describe("useFileStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("selects a file and updates state correctly", () => {
    const store = useFileStore();
    const file = new File(["content"], "test.png", { type: "image/png" });
    store.selectFile(file);
    expect(store.fileState).toBe("uploading");
  });

  it("sets error when selecting a file with unsupported format", () => {
    const store = useFileStore();
    const file = new File(["content"], "test.doc", {
      type: "application/msword",
    });
    store.selectFile(file);
    expect(store.fileState).toBe("error");
    expect(store.errorMessage).toBe("Неверный формат файла");
  });
});
