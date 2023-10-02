import Favorites from './'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { FavoritesProvider } from '../../utils/context'

describe('Favorites', () => {
  test('render without crash', async () => {
    render(
      <Router>
        <FavoritesProvider>
          <Favorites />
        </FavoritesProvider>
      </Router>
    )
  })
})
