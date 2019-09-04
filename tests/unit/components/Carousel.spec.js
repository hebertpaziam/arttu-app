import 'jest'
import { shallowMount } from '@vue/test-utils'
import Carousel from '@/components/Carousel.vue'

const generateComponent = (options) =>
  shallowMount(Carousel, {
    stubs: ['flickity'],
    propsData: {
      collection: [
        {
          id: 'Y7DQqHEPjsnJz4LohHQg',
          source: 'tattoo-0.jpg',
          title: 'tattoo 0'
        }
      ]
    },
    ...options
  })

describe('Carousel.vue', () => {
  it('Carousel is a vue instance', () => {
    const wrapper = generateComponent()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('When no collection is passed', () => {
    const wrapper = generateComponent({
      propsData: {
        collection: []
      }
    })

    expect(wrapper.find('.component-carousel').exists()).toBeFalsy()
  })

  it('When collection is passed, checking background-image', () => {
    const wrapper = generateComponent()
    const elem = wrapper.findAll('.carousel-cell').at(0)
    expect(elem.exists()).toBeTruthy()
    expect(elem.find('.title').text()).toEqual('tattoo 0')
    expect(elem.find('.title').element.getAttribute('title')).toEqual(
      'tattoo 0'
    )
    expect(elem.find('.content').element.style.backgroundImage).toEqual(
      'url(tattoo-0.jpg)'
    )
  })

  it('when the collection changes', () => {
    const wrapper = generateComponent()
    wrapper.vm.$refs.flickity.rerender = jest.fn()
    const spy = jest.spyOn(wrapper.vm.$refs.flickity, 'rerender')

    wrapper.setProps({
      collection: [
        {
          id: 'sjPEHqQD7YgQHhoL4zJn',
          source: 'tattoo-1.jpg',
          title: 'tattoo 1'
        },
        {
          id: 'nJz4LohHQgY7DQqHEPjs',
          source: 'tattoo-2.jpg',
          title: 'tattoo 2'
        }
      ]
    })

    expect(spy).toHaveBeenCalled()
  })
})
