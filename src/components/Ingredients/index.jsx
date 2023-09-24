import colors from '../../utils/style/colors'
import styled from 'styled-components'
import { recipes } from '../../assets/recipes'

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

function Ingredients() {
  const ingredients = recipes.reduce(
    (acc, recipe) =>
      recipe.id === '0000001' ? acc.concat(recipe.ingredients) : acc,
    []
  )
  console.log(ingredients)

  return (
    <IngredientsWrapper>
      <IngredientsTitle>Ingredients : </IngredientsTitle>
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

export default Ingredients
