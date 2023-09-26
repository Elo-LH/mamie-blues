import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Step from '../../components/Step'
import Time from '../../components/Time'
import Ingredients from '../../components/Ingredients'
import { useParams } from 'react-router-dom'

import { recipes } from '../../assets/recipes'

const Title = styled.h1`
  color: ${colors.secondary};
  text-align: center;
  margin-top: 0px;
`

const Subtitle = styled.h2`
  color: ${colors.primary};
`

const RecipeWrapper = styled.div`
  background-color: ${colors.backgroundLight};
  margin: 0px;
`

const OverviewWrapper = styled.div`
  background-color: ${colors.backgroundDark};
  padding: 20px;
`

const OverviewText = styled.p`
  color: ${colors.secondary};
`

const Author = styled.p`
  color: ${colors.dark};
  text-align: justify;
`

function Recipe() {
  const { id } = useParams()
  const stringId = id.toString()
  console.log(stringId)
  console.log(recipes)

  const recipe = recipes.find((recipe) => recipe.id === stringId)
  console.log(recipe)

  return (
    <RecipeWrapper>
      <Title key={recipe.id}>{recipe.name}</Title>
      <Subtitle>{recipe.description}</Subtitle>
      <Author>
        {' '}
        Brought to you by Granny : {recipe.author.name} from{' '}
        {recipe.author.country}
      </Author>

      <OverviewWrapper>
        <Subtitle>What do you need ?</Subtitle>
        <OverviewText>
          Difficulty : {recipe.difficulty}, Cost : {recipe.cost}
        </OverviewText>
        <Time />
        <Ingredients />
      </OverviewWrapper>

      <Step />
    </RecipeWrapper>
  )
}

export default Recipe
