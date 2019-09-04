import 'jest'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import News from '@/components/News.vue'
import configStore from '../utils/fake-store'

let store
const localVue = createLocalVue()
localVue.use(Vuex)

const generateComponent = (options) =>
  shallowMount(News, {
    store,
    localVue,
    ...options
  })

describe('News.vue', () => {
  beforeEach(() => {
    store = new Vuex.Store(configStore())
  })

  it('News is a vue instance', () => {
    const wrapper = generateComponent()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('When mounted bind tattos from server', () => {
    const spy = jest.spyOn(News.methods, 'bindTattoos')
    generateComponent()
    expect(spy).toHaveBeenCalled()
  })

  it('When title is passed', () => {
    const title = 'NOVIDADES'
    const wrapper = generateComponent({
      propsData: {
        title
      }
    })
    expect(wrapper.find('.title').text()).toMatch(title)
  })

  it('When no title is passed', () => {
    const wrapper = generateComponent()
    expect(wrapper.find('.title').text()).toMatch('')
  })
})
