import Footer from './'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Footer component', () => {
  test('render without crash', async () => {
    render(
      <Router>
        <Footer />
      </Router>
    )
  })
})
