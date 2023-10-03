import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { recipes } from '../../assets/recipes'
import RecipeCard from '../../components/RecipeCard'
import { useParams } from 'react-router-dom'

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

// Search for recipe name with search entry
export function findResults(searchEntry) {
  return recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchEntry.toLowerCase())
  )
}

function SearchResults() {
  // Retrieving id from the url param
  const { searchEntry } = useParams()
  console.log(searchEntry)

  let recipesFound = findResults(searchEntry)
  console.log(recipesFound)
  return (
    <ListWrapper>
      {recipesFound.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </ListWrapper>
  )
}

export default SearchResults
