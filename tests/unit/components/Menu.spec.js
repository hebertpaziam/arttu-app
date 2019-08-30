import 'jest'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import AuthModule from '@/store/modules/auth'
import TattooModule from '@/store/modules/tattoo'
import Menu from '@/components/Menu.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Menu.vue', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        AuthModule: {
          ...AuthModule,
          actions: { signInWithGithub: jest.fn(), signOut: jest.fn() }
        },
        TattooModule: { ...TattooModule, actions: { toggleModal: jest.fn() } }
      }
    })
  })

  it('Menu is a vue instance', () => {
    const wrapper = shallowMount(Menu, { store, localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('When menu toggle is trigged', () => {
    const wrapper = shallowMount(Menu, { store, localVue })

    wrapper.setData({ menuOpened: false })
    wrapper.vm.toggleMenu()

    expect(wrapper.vm.$data.menuOpened).toBeTruthy()
  })
})
