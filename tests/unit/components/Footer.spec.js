import 'jest'
import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

const generateComponent = (options) =>
  shallowMount(Footer, {
    ...options
  })

describe('Footer.vue', () => {
  it('Footer is a vue instance', () => {
    const wrapper = generateComponent()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
