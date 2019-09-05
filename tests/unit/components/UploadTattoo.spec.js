import 'jest'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import configStore from '../utils/fake-store'

import UploadTattoo from '@/components/UploadTattoo.vue'

let store
const localVue = createLocalVue()
localVue.use(Vuex)

const generateComponent = (options) =>
  shallowMount(UploadTattoo, {
    store,
    localVue,
    propsData: {
      sending: false,
      thumb: '',
      tattoo: {
        source: null,
        title: null
      }
    },
    ...options
  })

describe('UploadTattoo.vue', () => {
  beforeEach(() => {
    window.alert = jest.fn()
    store = new Vuex.Store(configStore({ isSignedIn: true }))
  })

  it('UploadTattoo is a vue instance', () => {
    const wrapper = generateComponent()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('When the file is dropped in the label dropzone', () => {
    const spyProcessFile = jest.spyOn(UploadTattoo.methods, 'processFile')
    const wrapper = generateComponent()
    wrapper.find('#dropArea').trigger('drop', {
      dataTransfer: {
        files: [new Blob(['tattoo'], { type: 'application/image' })]
      }
    })
    expect(spyProcessFile).toHaveBeenCalled()
  })

  it('When file is selected from input', () => {
    const spyProcessFile = jest.spyOn(UploadTattoo.methods, 'processFile')
    const wrapper = generateComponent()
    wrapper.find('#tattooId').trigger('click', {
      files: [new Blob(['tattoo'], { type: 'application/image' })]
    })
    expect(spyProcessFile).toHaveBeenCalled()
  })

  it('When file is processed', () => {
    const wrapper = generateComponent()
    wrapper.find('#tattooId').trigger('click', {
      files: [new Blob(['tattoo'], { type: 'application/image' })]
    })
    expect(wrapper.vm.$data.source).not.toBeNull()
  })

  it('When form is submited without image', () => {
    const spyUpload = jest.spyOn(UploadTattoo.methods, 'uploadTattoo')
    const spyAlert = jest.spyOn(window, 'alert')
    const wrapper = generateComponent()
    wrapper.setData({
      tattoo: {
        source: null,
        title: 'Tattoo'
      }
    })
    wrapper.find('form').trigger('submit')
    expect(spyAlert).toHaveBeenCalledWith('insira uma imagem!')
    expect(spyUpload).not.toHaveBeenCalled()
  })

  it('When form is submited without title', () => {
    const spyUpload = jest.spyOn(UploadTattoo.methods, 'uploadTattoo')
    const spyAlert = jest.spyOn(window, 'alert')
    const wrapper = generateComponent()
    wrapper.setData({
      tattoo: {
        source: new Blob(['tattoo'], { type: 'application/image' }),
        title: null
      }
    })
    wrapper.find('form').trigger('submit')
    expect(spyAlert).toHaveBeenCalledWith('digite um titulo!')
    expect(spyUpload).not.toHaveBeenCalled()
  })

  it('When form is submited with image and title', () => {
    const spyUpload = jest.spyOn(UploadTattoo.methods, 'uploadTattoo')
    const spyAlert = jest.spyOn(window, 'alert')
    const wrapper = generateComponent()
    wrapper.setData({
      tattoo: {
        source: new Blob(['tattoo'], { type: 'application/image' }),
        title: 'Tattoo'
      }
    })
    wrapper.find('form').trigger('submit')
    expect(spyAlert).not.toHaveBeenCalled()
    expect(spyUpload).toHaveBeenCalled()
  })
})
