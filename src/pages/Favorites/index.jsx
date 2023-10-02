import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Link } from 'react-router-dom'
import { recipes } from '../../assets/recipes'
import RecipeCard from '../../components/RecipeCard'
import { FavoritesContext } from '../../utils/context'
import { useContext } from 'react'

const ListWrapper = styled.div`
  background-color: ${colors.backgroundLight};
  column-count: 1;
  @media (min-width: 600px) {
    column-count: 2;
  }
  @media (min-width: 900px) {
    column-count: 3;
  }
  padding: 10px;
`

function Favorites() {
  const { favorites } = useContext(FavoritesContext)

  return (
    <ListWrapper>
      {favorites.map((favorite) => (
        <Link key={`recipe-${favorite.id}`} to={`/recipe/${favorite.id}`}>
          <RecipeCard recipe={favorite} />
        </Link>
      ))}
    </ListWrapper>
  )
}

export default Favorites
