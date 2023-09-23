import styled from 'styled-components'
import colors from '../../utils/style/colors'

const Title = styled.h1`
  color: ${colors.primary};
`

const HomeWrapper = styled.div`
  background-color: ${colors.backgroundLight};
  margin: 0px;
  padding: 50px;
`

function Home() {
  return (
    <HomeWrapper>
      <Title>
        Wake up your inner child with good old fashioned recipes from grannys
      </Title>
    </HomeWrapper>
  )
}

export default Home
