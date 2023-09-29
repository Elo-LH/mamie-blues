import Error from './'
import { render } from '@testing-library/react'

describe('Error component', () => {
  test('render without crash', async () => {
    render(<Error />)
  })
})
