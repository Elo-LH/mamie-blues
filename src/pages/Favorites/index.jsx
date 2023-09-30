import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Link } from 'react-router-dom'
import { recipes } from '../../assets/recipes'
import RecipeCard from '../../components/RecipeCard'

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
  return (
    <ListWrapper>
      {recipes.map((recipe) => (
        <Link key={`recipe-${recipe.id}`} to={`/recipe/${recipe.id}`}>
          <RecipeCard recipe={recipe} />
        </Link>
      ))}
    </ListWrapper>
  )
}

export default Favorites
