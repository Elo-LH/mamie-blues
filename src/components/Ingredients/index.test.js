import { getEmoji } from './'

describe('Function getEmoji', () => {
  test(`returns something`, () => {
    expect(getEmoji()).toBeDefined()
  })
  test(`returns one of the four emojis`, () => {
    expect(getEmoji()).toMatch(/^🍐|🍇|🍓|🍊$/)
  })
})
