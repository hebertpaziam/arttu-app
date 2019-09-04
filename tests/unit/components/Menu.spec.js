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

  it('When user is not authenticated and click on button to sign-in', () => {
    const spy = jest.spyOn(Menu.methods, 'signInWithGithub')
    const wrapper = generateComponent({
      store: new Vuex.Store(configStore({ isSignedIn: false }))
    })

    wrapper.find('.sign-in').trigger('click')
    expect(spy).toHaveBeenCalled()
  })

  it('When user is authenticated', () => {
    const wrapper = generateComponent()
    expect(wrapper.find('.authenticated').exists()).toBeTruthy()
  })

  it('When user is authenticated and click on button to sign-out', () => {
    const spy = jest.spyOn(Menu.methods, 'signOut')
    const wrapper = generateComponent()

    const signOutBtn = wrapper.find('.action.-sign-out')
    expect(signOutBtn.exists()).toBeTruthy()

    signOutBtn.trigger('click')
    expect(spy).toHaveBeenCalled()
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

  it('When the user is authenticated, they receive greetings', () => {
    const firstName = 'Snoop'
    const picture = 'Snoop.jpg'
    const wrapper = generateComponent({
      store: new Vuex.Store(
        configStore({
          getUserFirstName: firstName,
          getUserAvatar: picture,
          isSignedIn: true
        })
      )
    })

    const pictureElem = wrapper.find('.avatar > .picture')
    expect(pictureElem.exists()).toBeTruthy()
    expect(pictureElem.element.style.backgroundImage).toMatch(`url(${picture})`)

    const usernameElem = wrapper.find('.greetings > .username')
    expect(usernameElem.exists()).toBeTruthy()
    expect(usernameElem.text()).toMatch(`Olá, ${firstName}`)
  })
})
