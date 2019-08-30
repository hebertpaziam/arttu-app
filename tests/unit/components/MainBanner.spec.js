import 'jest'
import { shallowMount } from '@vue/test-utils'
import MainBanner from '@/components/MainBanner.vue'

describe('MainBanner.vue', () => {
  it('MainBanner is a vue instance', () => {
    const wrapper = shallowMount(MainBanner)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('When title is passed', () => {
    const title = 'Seja bem vindo!'
    const wrapper = shallowMount(MainBanner, {
      propsData: { title }
    })
    expect(wrapper.find('.title').text()).toMatch(title)
  })

  it('When logo is passed', () => {
    const logo = '/logo.png'
    const wrapper = shallowMount(MainBanner, {
      propsData: { logo }
    })
    expect(wrapper.find('.logo').attributes('src')).toMatch(logo)
  })

  it('When no title is passed', () => {
    const wrapper = shallowMount(MainBanner)
    expect(wrapper.find('.title').text()).toMatch('')
  })

  it('When no logo is passed', () => {
    const wrapper = shallowMount(MainBanner)
    expect(wrapper.find('.logo').attributes('src')).toMatch('')
  })
})
