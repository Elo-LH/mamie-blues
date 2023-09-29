import { findRecipe } from './'

describe('Function findRecipe', () => {
  test(`given existant id returns recipe`, () => {
    expect(findRecipe('0000001').name).toEqual('French Crêpes')
  })
  test(`given false id returns false`, () => {
    expect(findRecipe('0550')).toBeFalsy()
  })
})
