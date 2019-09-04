import 'jest'
import { shallowMount } from '@vue/test-utils'
import WeAre from '@/components/WeAre.vue'

const generateComponent = (options) => shallowMount(WeAre, { ...options })

describe('WeAre.vue', () => {
  it('WeAre is a vue instance', () => {
    const wrapper = generateComponent()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('When no title is passed', () => {
    const wrapper = generateComponent()
    expect(wrapper.find('.title').text()).toMatch('')
  })

  it('When no desc is passed', () => {
    const wrapper = generateComponent()
    expect(wrapper.find('.desc').text()).toMatch('')
  })

  it('When no cities is passed', () => {
    const wrapper = generateComponent()
    expect(wrapper.findAll('.cities li').length).toEqual(0)
  })

  it('When title is passed', () => {
    const title = 'Estamos no Brasil e em Portugal!'
    const wrapper = generateComponent({
      propsData: { title }
    })
    expect(wrapper.find('.title').text()).toMatch(title)
  })

  it('When desc is passed', () => {
    const desc = 'Escontre sua tattoo pela cidade que deseja também :)'
    const wrapper = generateComponent({
      propsData: { desc }
    })
    expect(wrapper.find('.desc').text()).toMatch(desc)
  })

  it('When cities is passed', () => {
    const cities = ['Rio de Janeiro']
    const wrapper = generateComponent({
      propsData: { cities }
    })
    expect(wrapper.findAll('.cities li').length).toEqual(1)
    expect(
      wrapper
        .findAll('.cities li')
        .at(0)
        .text()
    ).toMatch(cities[0])
  })
})
