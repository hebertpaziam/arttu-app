import 'jest'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import News from '@/components/News.vue'
import fakeStore from '../utils/fake-store'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('News.vue', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store(fakeStore)
  })

  it('News is a vue instance', () => {
    const wrapper = shallowMount(News, { store, localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('When mounted bind tattos from server', () => {
    const spy = jest.spyOn(News.methods, 'bindTattoos')
    shallowMount(News, { store, localVue })
    expect(spy).toHaveBeenCalled()
  })

  it('When title is passed', () => {
    const title = 'NOVIDADES'
    const wrapper = shallowMount(News, {
      store,
      localVue,
      propsData: { title }
    })
    expect(wrapper.find('.title').text()).toMatch(title)
  })
  it('When no title is passed', () => {
    const wrapper = shallowMount(News, { store, localVue })
    expect(wrapper.find('.title').text()).toMatch('')
  })
})
