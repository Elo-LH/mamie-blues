import Header from './'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Header component', () => {
  test('render without crash', async () => {
    render(
      <Router>
        <Header />
      </Router>
    )
  })
})
