import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Link } from 'react-router-dom'
import { recipes } from '../../assets/recipes'
import RecipeCard from '../../components/RecipeCard'

const ListWrapper = styled.div`
  background-color: ${colors.backgroundDark};
  display: grid;
  gap: 10px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  padding: 10px;
`

function RecipesList() {
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

export default RecipesList
