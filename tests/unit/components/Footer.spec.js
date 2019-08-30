import 'jest'
import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe('Footer.vue', () => {
  it('Footer is a vue instance', () => {
    const wrapper = shallowMount(Footer)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
