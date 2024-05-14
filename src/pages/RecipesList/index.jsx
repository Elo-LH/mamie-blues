import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useFetch } from '../../utils/hooks'
import RecipeCard from '../../components/RecipeCard'
import Error from '../../components/Error'

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

function RecipesList() {
  const { data, isLoading, error } = useFetch(
    `http://localhost:3000/recipes_list`
  )
  const recipes = data?.recipes

  if (error) {
    return <Error error={error} />
  }

  return (
    <ListWrapper>
      {isLoading ? (
        <span>En chargement, veuillez patienter</span>
      ) : (
        recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
      )}
    </ListWrapper>
  )
}

export default RecipesList
