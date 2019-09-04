import 'jest'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import configStore from '../utils/fake-store'

import Menu from '@/components/Menu.vue'

let store
const localVue = createLocalVue()
localVue.use(Vuex)

const generateComponent = (options) =>
  shallowMount(Menu, {
    store,
    localVue,
    stubs: ['router-link'],
    propsData: {
      menuOpened: false
    },
    ...options
  })

describe('Menu.vue', () => {
  beforeEach(() => {
    store = new Vuex.Store(configStore({ isSignedIn: true }))
  })

  it('Menu is a vue instance', () => {
    const wrapper = generateComponent()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('When user is not authenticated', () => {
    const wrapper = generateComponent({
      store: new Vuex.Store(configStore({ isSignedIn: false }))
    })
    expect(wrapper.find('.sign-in').exists()).toBeTruthy()
  })

  it('When user is authenticated', () => {
    const wrapper = generateComponent()
    expect(wrapper.find('.authenticated').exists()).toBeTruthy()
  })

  it('When menu is opened', () => {
    const wrapper = generateComponent()
    wrapper.vm.toggleMenu()
    expect(wrapper.vm.$data.menuOpened).toBeTruthy()
  })

  it('When menu is closed', () => {
    const wrapper = generateComponent()
    wrapper.setData({ menuOpened: true })
    wrapper.vm.toggleMenu()
    expect(wrapper.vm.$data.menuOpened).toBeFalsy()
  })
})
