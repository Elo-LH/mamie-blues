import styled from 'styled-components'
import colors from '../../utils/style/colors'
import RecipeCard from '../../components/RecipeCard'
import { FavoritesContext } from '../../utils/context'
import { useContext } from 'react'

const ListWrapper = styled.div`
  background-color: ${colors.backgroundLight};
  margin: 0 auto;
  padding: 0;
  display: grid;
  gap: 1rem;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  min-height: 90vh;
`

function Favorites() {
  const { favorites } = useContext(FavoritesContext)

  return (
    <ListWrapper>
      {favorites.map((favorite) => (
        <RecipeCard key={favorite.id} recipe={favorite} />
      ))}
    </ListWrapper>
  )
}

export default Favorites
