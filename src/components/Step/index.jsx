import colors from '../../utils/style/colors'
import styled from 'styled-components'
import { recipes } from '../../assets/recipes'
import Ingredients from '../Ingredients'
import { Component } from 'react'

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

class Step extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { step } = this.props
    // updateIngredients(step.ingredients)

    return (
      <StepWrapper>
        <StepTitle key={step.number}>
          {step.number} - {step.name}{' '}
        </StepTitle>
        {step.ingredients.length > 0 ? (
          <Ingredients ingredients={step.ingredients} />
        ) : null}
        <StepText key={step.description}>{step.description}</StepText>
      </StepWrapper>
    )
  }
}

export default Step
