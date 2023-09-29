import { toDaysHoursMin } from './'

describe('Function toDaysHoursMin', () => {
  test(`given null returns 'None'`, () => {
    expect(toDaysHoursMin(0)).toEqual('None')
  })
  test(`given 60 returns '1 hour'`, () => {
    expect(toDaysHoursMin(60)).toEqual('1 hour')
  })
  test(`given 1440 returns '1 day'`, () => {
    expect(toDaysHoursMin(1440)).toEqual('1 day')
  })
  test(`given 3640 returns '2 days - 12 hours - 40 min'`, () => {
    expect(toDaysHoursMin(3640)).toEqual('2 days - 12 hours - 40 min')
  })
})
