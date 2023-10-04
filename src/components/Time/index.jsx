import colors from '../../utils/style/colors'
import styled from 'styled-components'
import Clock from '../Clock'

const TimeWrapper = styled.div`
  background-color: ${colors.backgroundLight};
  border-radius: 20px;
`

const TimeText = styled.p`
  color: ${colors.dark};
  text-align: center;
`
function Time({ time }) {
  return (
    <TimeWrapper>
      <TimeText>{time.name}</TimeText>
      <Clock minutes={time.minutes} />
    </TimeWrapper>
  )
}

export default Time
