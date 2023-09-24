import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Step from '../../components/Step'

const Title = styled.h1`
  color: ${colors.secondary};
  text-align: center;
  margin-top: 0px;
`

const Subtitle = styled.h2`
  color: ${colors.primary};
`

const RecipeWrapper = styled.div`
  background-color: ${colors.backgroundLight};
  margin: 0px;
`

const OverviewWrapper = styled.div`
  background-color: ${colors.backgroundDark};
  padding: 20px;
`

const OverviewText = styled.p`
  color: ${colors.secondary};
`

const TimeWrapper = styled.div`
  background-color: ${colors.backgroundDark};
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const Author = styled.p`
  color: ${colors.dark};
  text-align: justify;
`

const StepsWrapper = styled.div`
  background-color: ${colors.backgroundLight};
  padding: 20px;
`

function Home() {
  return (
    <RecipeWrapper>
      <Title>Crêpes</Title>
      <Subtitle>Pan cooked & delicious without sugar !</Subtitle>
      <Author> Brought to you by Granny Simone</Author>

      <OverviewWrapper>
        <Subtitle>What do you need ?</Subtitle>
        <OverviewText> Difficulty : EZ, Cost : Cheap</OverviewText>
        <TimeWrapper>
          <OverviewText>Total time : 1h40</OverviewText>
          <OverviewText>Prep time : 10min</OverviewText>
          <OverviewText>cooking time : 30min</OverviewText>
          <OverviewText>resting time : 1h</OverviewText>
        </TimeWrapper>
        <OverviewText> Ingredients : 500g flour, 1l milk, 5 eggs</OverviewText>
      </OverviewWrapper>

      <Step />
    </RecipeWrapper>
  )
}

export default Home
