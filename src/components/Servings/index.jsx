import { Component } from 'react'
import colors from '../../utils/style/colors'
import styled from 'styled-components'

const ServingsWrapper = styled.div`
  display: flex;
  background-color: ${colors.backgroundLight};
  width: fit-content;
  border-radius: 20px;
`

const ServingsButton = styled.span`
  background-color: ${colors.secondary};
  color: ${colors.dark};
  padding: 10px 20px 10px 20px;
  border-radius: 20px;
  font-size: 1.5em;
  @media (min-width: 600px) {
    font-size: 2em;
    padding: 20px;
  }
  &.add-serving-button {
    box-shadow: -3px 0px 0px ${colors.dark};
  }
  &.substract-serving-button {
    box-shadow: 3px 0px 0px ${colors.dark};
  }
  &:hover {
    cursor: pointer;
  }
`

const ServingsText = styled.p`
  background-color: ${colors.backgroundLight};
  color: ${colors.dark};
  margin: 5px;
  text-align: center;
  align-self: center;
  padding-right: 20px;
  padding-left: 20px;
`

// Modify all ingredients proportions to one less serving
export function substractServing(
  servings,
  servingsProportion,
  modifyServingsProportion
) {
  if (Math.round(servings * servingsProportion) > 1) {
    const substractProportion = (servings - 1) / servings
    const oneSubstract = 1 - substractProportion
    modifyServingsProportion(servingsProportion - oneSubstract)
  }
}

// Modify all ingredients proportions to one more serving
export function addServing(
  servings,
  servingsProportion,
  modifyServingsProportion
) {
  if (Math.round(servings * servingsProportion) < 30) {
    const addProportion = (servings + 1) / servings
    const oneAdd = addProportion - 1
    modifyServingsProportion(servingsProportion + oneAdd)
  } else {
    alert('Sorry, you reached maximum servings')
  }
}

class Servings extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { servings, servingsProportion, modifyServingsProportion } =
      this.props

    return (
      <ServingsWrapper>
        <ServingsButton
          className="substract-serving-button"
          onClick={() =>
            substractServing(
              servings,
              servingsProportion,
              modifyServingsProportion
            )
          }
        >
          -
        </ServingsButton>
        <ServingsText>
          {Math.round(servings * servingsProportion)} 🍴
        </ServingsText>
        <ServingsButton
          className="add-serving-button"
          onClick={() =>
            addServing(servings, servingsProportion, modifyServingsProportion)
          }
        >
          +
        </ServingsButton>
      </ServingsWrapper>
    )
  }
}

export default Servings
