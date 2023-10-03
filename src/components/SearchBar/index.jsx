import colors from '../../utils/style/colors'
import styled from 'styled-components'
import Ingredients from '../Ingredients'

const StepWrapper = styled.div`
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

function Step({ step, servingsProportion }) {
  return (
    <StepWrapper>
      <StepTitle key={step.number}>
        {step.number} - {step.name}{' '}
      </StepTitle>
      {step.ingredients.length > 0 ? (
        // Create list of ingredients for this specific step, only if there is some
        <Ingredients
          ingredients={step.ingredients}
          servingsProportion={servingsProportion}
        />
      ) : null}
      <StepText key={step.description}>{step.description}</StepText>
    </StepWrapper>
  )
}

export default Step
