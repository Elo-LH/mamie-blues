import colors from '../../utils/style/colors'
import styled from 'styled-components'
import { recipes } from '../../assets/recipes'

const StepWrapper = styled.div`
  background-color: ${colors.backgroundLight};
  padding-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;
`
const StepsWrapper = styled.div`
  background-color: ${colors.backgroundLight};
  padding-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;
`

const StepTitle = styled.h3`
  color: ${colors.primary};
`
const StepText = styled.p`
  color: ${colors.dark};
  text-align: justify;
`

function Step() {
  const steps = recipes.reduce(
    (acc, recipe) => (recipe.id === '0000001' ? acc.concat(recipe.steps) : acc),
    []
  )
  console.log(steps)
  const ingredients = steps.reduce(
    (acc, step) => acc.concat(step.ingredients),
    []
  )
  console.log(ingredients)

  return (
    <StepsWrapper>
      {steps.map((step) => (
        <StepWrapper>
          <StepTitle key={step.number}>
            {step.number} - {step.name}{' '}
          </StepTitle>
          <StepText key={step.name}>Ingredients : </StepText>
          <StepText key={step.description}>{step.description}</StepText>
        </StepWrapper>
      ))}
    </StepsWrapper>
  )
}

export default Step
