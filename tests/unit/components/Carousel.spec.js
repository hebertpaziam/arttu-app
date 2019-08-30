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
      id: 1,
      src: 'tattoo-1.jpg',
      desc: 'tattoo 1'
    }
    const wrapper = shallowMount(Carousel, {
      propsData: {
        collection: [collectionItem]
      }
    })
    const item = wrapper.findAll('.carousel-cell').at(0)
    expect(item.exists()).toBeTruthy()
    expect(item.find('.desc').text()).toEqual(collectionItem.desc)
    expect(item.find('.desc').element.getAttribute('title')).toEqual(
      collectionItem.desc
    )
    expect(item.find('.content').element.style.backgroundImage).toEqual(
      `url(${collectionItem.src})`
    )
  })
})
