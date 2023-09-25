import { Component } from 'react'
import colors from '../../utils/style/colors'
import styled from 'styled-components'

const IngredientsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`

const IngredientsTitle = styled.p`
  color: ${colors.secondary};
`

const IngredientsList = styled.ul`
  color: ${colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const IngredientText = styled.li`
  color: ${colors.secondary};
  padding-right: 20px;
`

class Ingredients extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { ingredients } = this.props

    return (
      <IngredientsWrapper>
        <IngredientsTitle>Ingredients : </IngredientsTitle>
        {/* For every ingredient, shows name, quantity and metric if there is */}
        <IngredientsList>
          {ingredients.map((ingredient) => (
            <IngredientText key={ingredient.name}>
              {ingredient.name} {ingredient.quantity} {ingredient.metric}
            </IngredientText>
          ))}
        </IngredientsList>
      </IngredientsWrapper>
    )
  }
}

export default Ingredients
