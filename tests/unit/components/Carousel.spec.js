import 'jest'
import { shallowMount } from '@vue/test-utils'
import Carousel from '@/components/Carousel.vue'

describe('Carousel.vue', () => {
  it('Carousel is a vue instance', () => {
    const wrapper = shallowMount(Carousel)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('When no collection is passed', () => {
    const wrapper = shallowMount(Carousel)
    expect(wrapper.find('.component-carousel').exists()).toBeFalsy()
  })

  it('When collection is passed, checking background-image', () => {
    const collectionItem = {
      id: 'sjPEHqQD7YgQHhoL4zJn',
      source: 'tattoo-1.jpg',
      title: 'tattoo 1'
    }
    const wrapper = shallowMount(Carousel, {
      propsData: {
        collection: [collectionItem]
      }
    })
    const item = wrapper.findAll('.carousel-cell').at(0)
    expect(item.exists()).toBeTruthy()
    expect(item.find('.title').text()).toEqual(collectionItem.title)
    expect(item.find('.title').element.getAttribute('title')).toEqual(
      collectionItem.title
    )
    expect(item.find('.content').element.style.backgroundImage).toEqual(
      `url(${collectionItem.source})`
    )
  })

  it('when the collection changes', () => {
    const wrapper = shallowMount(Carousel, {
      propsData: {
        collection: [{}]
      }
    })
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
