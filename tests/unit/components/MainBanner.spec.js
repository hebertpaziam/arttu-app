import 'jest'
import { shallowMount } from '@vue/test-utils'
import MainBanner from '@/components/MainBanner.vue'

const generateComponent = (options) =>
  shallowMount(MainBanner, {
    ...options
  })

describe('MainBanner.vue', () => {
  it('MainBanner is a vue instance', () => {
    const wrapper = generateComponent()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('When title is passed', () => {
    const title = 'Seja bem vindo!'
    const wrapper = generateComponent({
      propsData: { title }
    })
    expect(wrapper.find('.title').text()).toMatch(title)
  })

  it('When logo is passed', () => {
    const logo = '/logo.png'
    const wrapper = generateComponent({
      propsData: { logo }
    })
    expect(wrapper.find('.logo').attributes('src')).toMatch(logo)
  })

  it('When no title is passed', () => {
    const wrapper = generateComponent()
    expect(wrapper.find('.title').text()).toMatch('')
  })

  it('When no logo is passed', () => {
    const wrapper = generateComponent()
    expect(wrapper.find('.logo').attributes('src')).toMatch('')
  })
})
