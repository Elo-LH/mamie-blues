import { useContext } from 'react'
import colors from '../../utils/style/colors'
import styled from 'styled-components'
import { FavoritesContext } from '../../utils/context'
import { Link } from 'react-router-dom'

const CardWrapper = styled.div`
  background-color: ${colors.backgroundLight};
  padding: 1rem;
  height: fit-content;
  border-radius: 20px;
  box-shadow: 2px 2px ${colors.secondary}, -2px -2px white;
  margin: 10px;
`
const Title = styled.h1`
  color: ${colors.secondary};
  text-align: center;
  margin-top: 0px;
`

const Subtitle = styled.h2`
  color: ${colors.primary};
`

const Author = styled.p`
  color: ${colors.dark};
  text-align: justify;
`

function RecipeCard({ recipe }) {
  const { favorites } = useContext(FavoritesContext)
  const star = favorites.find((favorite) => favorite.id === recipe.id)
    ? '⭐ '
    : ''

  return (
    <CardWrapper>
      <Link key={`recipe-${recipe.id}`} to={`/recipe/${recipe.id}`}>
        <Title key={recipe.id}>
          {star}
          {recipe.name}
        </Title>
        <Subtitle>{recipe.description}</Subtitle>
        <Author>
          {' '}
          Brought to you by Granny : {recipe.author.name} from{' '}
          {recipe.author.country}
        </Author>
      </Link>
    </CardWrapper>
  )
}

export default RecipeCard
