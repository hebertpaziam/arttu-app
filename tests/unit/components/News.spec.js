import 'jest'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import TattooModule from '@/store/modules/tattoo'
import News from '@/components/News.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('News.vue', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        TattooModule: {
          ...TattooModule,
          actions: { bindTattoos: jest.fn() },
          state: {
            tattoos: [
              {
                id: 1,
                src: 'tattoo-1.jpg',
                desc: 'tattoo 1'
              }
            ]
          }
        }
      }
    })
  })

  it('News is a vue instance', () => {
    const wrapper = shallowMount(News, { store, localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('When no tattoos is requested', () => {
    const wrapper = shallowMount(News, { store, localVue })
    expect(wrapper.find('.component-news').exists()).toBeTruthy()
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
