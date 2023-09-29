import { Component } from 'react'
import colors from '../../utils/style/colors'
import styled from 'styled-components'

const IngredientsWrapper = styled.div``

const IngredientsList = styled.div`
  color: ${colors.secondary};
  column-count: 1;
  @media (min-width: 600px) {
    column-count: 2;
  }
  @media (min-width: 900px) {
    column-count: 3;
  }
`

const IngredientText = styled.p`
  color: ${colors.secondary};
  padding-right: 15px;
  display: inline-block;
  width: 100%;
`

// Get a random fruit emoji as list marker
export const getEmoji = () => {
  const emojis = ['🍇', '🍓', '🍊', '🍐']
  return emojis[~~(Math.random() * emojis.length)]
}

class Ingredients extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { ingredients, servings } = this.props

    return (
      <IngredientsWrapper>
        {/* For every ingredient, shows name, quantity and metric if there is */}
        <IngredientsList>
          {ingredients.map((ingredient) => (
            <IngredientText key={ingredient.name}>
              {getEmoji()}
              {ingredient.name} {ingredient.quantity} {ingredient.metric}
            </IngredientText>
          ))}
        </IngredientsList>
      </IngredientsWrapper>
    )
  }
}

export default Ingredients
