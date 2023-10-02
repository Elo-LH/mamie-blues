import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { recipes } from '../../assets/recipes'
import RecipeCard from '../../components/RecipeCard'

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
`

function RecipesList() {
  return (
    <ListWrapper>
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} />
      ))}
    </ListWrapper>
  )
}

export default RecipesList
