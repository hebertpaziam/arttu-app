import 'jest'

import TattooModule from '@/store/modules/tattoo'

describe('TATTOO MODULE', () => {
  beforeEach(() => {
    TattooModule.state = {
      tattoos: [
        {
          id: 'Y7DQqHEPjsnJz4LohHQg',
          source: 'tattoo-0.jpg',
          title: 'tattoo 0'
        }
      ]
    }
  })

  it('MUTATIONS: SET_TATTOOS', () => {
    let newTattoos = [
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
    TattooModule.mutations.SET_TATTOOS(TattooModule.state, newTattoos)
    expect(TattooModule.state.tattoos).toMatchObject(newTattoos)
  })

  it('MUTATIONS: REMOVE_TATTOO', () => {
    const tattooId = TattooModule.state.tattoos[0].id
    TattooModule.mutations.REMOVE_TATTOO(TattooModule.state, tattooId)
    expect(TattooModule.state.tattoos).toMatchObject([])
  })
})
