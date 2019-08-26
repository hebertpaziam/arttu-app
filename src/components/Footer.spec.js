import { mount } from "@vue/test-utils";
import Footer from "./Footer";

describe("Footer", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Footer);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
