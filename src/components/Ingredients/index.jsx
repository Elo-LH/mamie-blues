import { Component } from 'react'
import colors from '../../utils/style/colors'
import styled from 'styled-components'

const IngredientsWrapper = styled.div``

const IngredientsList = styled.div`
  color: ${colors.secondary};
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`

const IngredientText = styled.p`
  color: ${colors.secondary};
  padding-right: 15px;
`

class Ingredients extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { ingredients } = this.props

    // Get a random fruit emoji as list marker
    const getEmoji = () => {
      const emojis = ['🍇', '🍓', '🍊', '🍐']
      return emojis[~~(Math.random() * emojis.length)]
    }

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
