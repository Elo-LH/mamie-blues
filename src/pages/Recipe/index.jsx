import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Step from '../../components/Step'
import Time from '../../components/Time'
import Ingredients from '../../components/Ingredients'

import { useParams } from 'react-router-dom'
import FrenchCrepes from '../../assets/French-crepes.png'

import { recipes } from '../../assets/recipes'

const Title = styled.h1`
  color: ${colors.secondary};
  text-align: center;
  margin-top: 0px;
`

const Subtitle = styled.h2`
  color: ${colors.primary};
  padding: 15px;
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
  padding: 15px;
`
const RecipePicture = styled.img`
  width: 100%;
  max-height: 850px;
  object-fit: cover;
`

function Recipe() {
  // Retrieving id from the url param
  const { id } = useParams()

  // Find recipe by id in the recipes list data
  const recipe = recipes.find((recipe) => recipe.id === id)
  console.log(recipe)

  // Defining props to give to components
  const ingredients = recipe.ingredients
  const timing = recipe.timing
  const steps = recipe.steps

  return (
    <RecipeWrapper>
      <Title key={recipe.id}>{recipe.name}</Title>
      <Subtitle>{recipe.description}</Subtitle>

      <Author>
        Brought to you by Granny : {recipe.author.name} from
        {recipe.author.country}
      </Author>
      <RecipePicture
        src={FrenchCrepes}
        alt="Pile of french crepes on a plate"
      />

      <OverviewWrapper>
        <Subtitle>What do you need ?</Subtitle>
        <OverviewText>
          Difficulty : {recipe.difficulty}, Cost : {recipe.cost}
        </OverviewText>
        {/* Shows detailed timing */}
        <Time timing={timing} />
        <OverviewText>Ingredients :</OverviewText>
        <Ingredients ingredients={ingredients} />
      </OverviewWrapper>

      {/* Display each step */}
      {steps.map((step) => (
        <Step step={step} />
      ))}
    </RecipeWrapper>
  )
}

export default Recipe
