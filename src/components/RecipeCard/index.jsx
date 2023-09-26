import colors from '../../utils/style/colors'
import styled from 'styled-components'

const CardWrapper = styled.div`
  background-color: ${colors.backgroundLight};
  padding: 20px;
  border-radius: 10%;
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
  return (
    <CardWrapper>
      <Title key={recipe.id}>{recipe.name}</Title>
      <Subtitle>{recipe.description}</Subtitle>
      <Author>
        {' '}
        Brought to you by Granny : {recipe.author.name} from{' '}
        {recipe.author.country}
      </Author>
    </CardWrapper>
  )
}

export default RecipeCard
