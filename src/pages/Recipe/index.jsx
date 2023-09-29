import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Step from '../../components/Step'
import Time from '../../components/Time'
import Servings from '../../components/Servings'
import Ingredients from '../../components/Ingredients'
import Error from '../../components/Error'

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
const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const TimeGrid = styled.div`
  border-radius: 20px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
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

// Find recipe by id in the recipes list data
export function findRecipe(id) {
  return recipes.find((recipe) => recipe.id === id)
}

function Recipe() {
  // Retrieving id from the url param
  const { id } = useParams()

  // Find recipe by id in the recipes list data
  const recipe = findRecipe(id)

  // Displays Error if recipe is not found
  if (!recipe) {
    return <Error />
  }

  // Defining props to give to components
  const ingredients = recipe.ingredients
  const servings = recipe.servings
  const timing = recipe.timing
  const steps = recipe.steps

  return (
    <RecipeWrapper>
      <Title key={recipe.id}>{recipe.name}</Title>
      <Subtitle>{recipe.description}</Subtitle>

      <Author>
        Brought to you by Granny : {recipe.author.name} from{' '}
        {recipe.author.country}
      </Author>
      <RecipePicture
        src={FrenchCrepes}
        alt="Pile of french crepes on a plate"
      />

      <OverviewWrapper>
        <Subtitle>What do you need ?</Subtitle>
        <TextWrapper>
          <OverviewText>Difficulty : {recipe.difficulty}</OverviewText>
          <OverviewText>Cost : {recipe.cost}</OverviewText>
        </TextWrapper>

        {/* Shows detailed timing */}
        <TimeGrid>
          {timing.map((time) => (
            <Time time={time} />
          ))}
        </TimeGrid>

        <OverviewText>Ingredients :</OverviewText>
        <Servings servings={servings} />

        <Ingredients ingredients={ingredients} servings={servings} />
      </OverviewWrapper>

      {/* Display each step */}
      {steps.map((step) => (
        <Step step={step} />
      ))}
    </RecipeWrapper>
  )
}

export default Recipe
