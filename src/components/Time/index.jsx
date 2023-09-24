import colors from '../../utils/style/colors'
import styled from 'styled-components'
import { recipes } from '../../assets/recipes'

const TimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TimeText = styled.p`
  color: ${colors.secondary};
`
function Step() {
  const time = recipes.reduce((acc, recipe) =>
    recipe.id === '0000001' ? acc.concat(recipe.timing) : acc
  )
  console.log(time)

  return (
    <TimeWrapper>
      <TimeText>Total time :{time.timing.total}</TimeText>
      <TimeText>Preparation time : {time.timing.preparation}</TimeText>
      <TimeText>Cooking time : {time.timing.cooking}</TimeText>
      <TimeText>Resting time :{time.timing.resting}</TimeText>
    </TimeWrapper>
  )
}

export default Step
