import colors from '../../utils/style/colors'
import styled from 'styled-components'

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
`

function Step() {
  return (
    <StepWrapper>
      <StepTitle>1 Add Eggs to flour</StepTitle>
      <StepText>Ingredients needed : 5eggs, 500g flour</StepText>
      <StepText>
        You'll find here recipesb from grannys all over the world. Feel free to
        explore and cook. Rediscover the taste of homemade cookies or explore
        new cultures. Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
        ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
        qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
        non numquam eius modi tempora incidunt ut labore et dolore magnam
        aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
        commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
        voluptate velit esse quam nihil molestiae consequatur, vel illum qui
        dolorem eum fugiat quo voluptas nulla pariatur?
      </StepText>
    </StepWrapper>
  )
}

export default Step
